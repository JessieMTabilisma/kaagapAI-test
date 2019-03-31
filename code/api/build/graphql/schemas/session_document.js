"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = "\n  scalar Date \n\n  enum Type {\n    PDF\n    TXT\n    DOCX\n  }\n\n  type SessionDocument {\n    sd_id: Int!\n    file: String!\n    file_name: String!\n    content: String!\n    date_added: Date!\n    last_modified: Date\n    type: Type!\n    session_id: Int!\n  }\n\n  type Query { \n    getSessionDocuments(session_id: Int!): [SessionDocument]\n\n    getSessionDocument(sd_id: Int!): SessionDocument\n  }\n";