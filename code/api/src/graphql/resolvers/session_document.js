import GraphQlUUID from 'graphql-type-uuid';
import uploadModules from '../../modules/upload_modules';
import documentModules from '../../modules/document_modules';
// import { GraphQlUpload } from 'graphql-upload';

export default {
  UUID: GraphQlUUID,
  
  Query: {
    // sessionDocuments: async (parent, { session_id }, { models }) => {
    //   return await models.Session_Document.findAll({
    //     raw: true,
    //     where: { session_id },
    //     attributes: {
    //       exclude: ['content']
    //     }
    //   });
    // },
    
    // sessionDocument: async (parent, { sd_id }, { models }) => {
    //   return await models.Session_Document.findOne({
    //     raw: true,
    //     where: { sd_id },
    //     attributes: {
    //       exclude: ['content']
    //     }
    //   });
    // }

    downloadSessionDocument: (parent, { sd_id, savePath }, { models }) => 
      models.Session_Document.findOne({
        raw: true,
        where: { sd_id }
      }).then(async res => {
        const filename = res.file.split('gs://kaagapai-uploads/')[1];
        const originalFilename = res.file_name;
        savePath = savePath.replace(/\\/g, '/') + '/';

        await documentModules.getFileFromGCS(filename, savePath, originalFilename);

        return res;
      }),
  },

  Mutation: {
    uploadSessionDocument: (parent, { file, session_id }, { models }) =>
      uploadModules.uploadFile(file, session_id)
        .then(async ({ session_id, fileName, filePath, translation, mimetype }) => {
          const addFileRes = await models.Session_Document.create({
            session_id,
            file: filePath,
            file_name: fileName,
            content: translation,
            type: mimetype,
            date_added: new Date()
          });

          const { sd_id } = addFileRes.dataValues;

          return sd_id;
        })
        .then(sd_id => {
          return models.Session_Document.findOne({
            raw: true,
            where: { sd_id },
            attributes: {
              exclude: ['content']
            }
          });
        })
  }
};
