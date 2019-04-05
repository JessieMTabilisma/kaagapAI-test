"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = "\n  scalar Date \n  scalar UUID\n\n  type SessionDocument {\n    sd_id: UUID!\n    file: String!\n    file_name: String!\n    content: String!\n    date_added: Date!\n    last_modified: Date\n    type: String!\n    session_id: UUID!\n  }\n\n  type Query { \n    sessionDocuments(session_id: UUID!): [SessionDocument]\n\n    sessionDocument(sd_id: UUID!): SessionDocument\n  }\n\n  type Mutation {\n    uploadSessionDocument(file: Upload!, session_id: UUID!): SessionDocument!\n  }\n";