import { createReadStream, createWriteStream, unlinkSync, rename } from 'fs';
import ffmpegInstaller from '@ffmpeg-installer/ffmpeg';
import ffmpeg from 'fluent-ffmpeg';
import shortid from 'shortid';
import path from 'path';

//Google Cloud APIs
import { Storage } from '@google-cloud/storage';
import { Translate } from '@google-cloud/translate';
const speech = require('@google-cloud/speech').v1p1beta1;
const projectId = 'Prometheus-kaagapai';

const storage = new Storage({
  projectId: projectId
});

const bucket = storage.bucket('kaagapai-uploads');

//renaming filename of files
const renameFile = ({ inputPath, session_id }) => {
  const newFileName =
    session_id + '-' + shortid.generate() + path.parse(inputPath).ext;
  const newPath = './src/tmp/' + newFileName;

  rename(inputPath, newPath, function(err) {
    if (err) throw err;
  });

  return newFileName;
};

//storing raw files to file system
const storeUpload = ({ stream, inputPath }) =>
  new Promise((resolve, reject) =>
    stream
      .pipe(createWriteStream(inputPath))
      .on('finish', () => {
        resolve();
      })
      .on('error', reject)
  );

//translating
const translateText = text => {
  const translate = new Translate({
    projectId: projectId
  });

  const options = {
    from: 'tl',
    to: 'en'
  };

  return new Promise(resolve => {
    translate.translate(text, options).then(results => {
      const translation = results[0];
      resolve(translation);
    });
  });
};

//upload to google cloud storage
const uploadGCS = path => {
  return new Promise(resolve => {
    bucket.upload(path, function(err, file) {
      if (err) {
        console.log(err);
      } else {
        resolve(file);
        deleteTmp(path);
      }
    });
  });
};

//delete tmp file
const deleteTmp = path => {
  try {
    unlinkSync(path);
  } catch (ex) {
    console.log(ex);
  }
};

// setting the path of the installer
ffmpeg.setFfmpegPath(ffmpegInstaller.path);
//convert audio file
const convert = (inputPath, outputPath) => {
  return new Promise(resolve => {
    ffmpeg({ source: inputPath })
      .audioChannels(2)
      .toFormat('wav')
      .on('error', err => {
        console.log('An error occurred: ' + err.message);
      })
      .on('progress', progress => {
        console.log('Processing: ' + progress.targetSize + ' KB converted');
      })
      .on('end', () => {
        resolve(uploadGCS(outputPath));
        deleteTmp(inputPath);
      })
      .save(outputPath);
  });
};

//extract text from audio file
const extractText = async gcsUri => {
  const client = new speech.SpeechClient();

  // The audio file's encoding, sample rate in hertz, and BCP-47 language code
  const config = {
    encoding: 'LINEAR16',
    audioChannelCount: 2,
    languageCode: 'fil-PH'
  };

  const audio = {
    uri: gcsUri
  };

  const request = {
    config: config,
    audio: audio
  };

  // Detects speech in the audio file
  const [operation] = await client.longRunningRecognize(request);
  const [response] = await operation.promise();
  const transcription = response.results
    .map(result => result.alternatives[0].transcript)
    .join('\n');
  return await transcription;
};

//deleting from GCS
const deleteFileFromGCS = filename => {
  bucket.file(filename).delete();
};

//retrieving file from GCS
const getFileFromGCS = filename => {
  const blob = bucket.file(filename);
  const blobStream = blob.createReadStream();
  return blobStream;
};

export default {
  renameFile,
  storeUpload,
  translateText,
  uploadGCS,
  extractText,
  convert,
  deleteFileFromGCS,
  getFileFromGCS
};
