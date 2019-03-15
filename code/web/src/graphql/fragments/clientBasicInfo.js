import { gql } from 'apollo-boost';

const CLIENT_BASIC_INFO = gql`
  fragment ClientBasicInfo on Client {
    c_id
    fname
    lname
    gender
    birthdate
  }
`;

export default CLIENT_BASIC_INFO;
