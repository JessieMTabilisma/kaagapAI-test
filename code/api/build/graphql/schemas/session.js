"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = "\n  scalar Date \n\n  type Session {\n    session_id: ID!\n    session_name: String!\n    date_of_session: Date!\n    c_id: Int!\n  }\n\n  type Query { \n    getSessions(c_id: Int!): [Session]!\n  }\n\n  type Mutation {\n    addSession(session_name: String!, date_of_session: Date!, c_id: Int!): Session!\n\n    deleteSession(session_id: Int!, c_id: Int!): Session!\n\n    updateSessionInformation(session_id: Int!, session_name: String!, date_of_session: Date!): Session!\n  }\n";