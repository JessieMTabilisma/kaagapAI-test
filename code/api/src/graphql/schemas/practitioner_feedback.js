export default `
  scalar Date 

  type PractitionerFeedback {
    pf_id: UUID!
    feedback_file: Binary!
    file_name: String!
    message: String!
    date_submitted: Date!
    p_id: UUID!
  }
`;
