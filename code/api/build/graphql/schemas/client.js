"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = "\n  scalar Date\n  scalar UUID\n\n  enum Gender {\n    M\n    F\n  }\n\n  enum ArchiveStatus {\n    archived\n    active\n  }\n\n  type Client {\n    c_id: UUID!\n    fname: String!\n    lname: String!\n    gender: Gender!\n    birthdate: Date!\n    date_added: Date!\n    last_opened: Date\n    archive_status: ArchiveStatus!\n    p_id: UUID!\n    no_of_sessions: Int\n    sessions: [Session]\n  }\n\n  type Query { \n    clients(p_id: UUID!): [Client!]\n    \n    client(c_id: UUID!): Client\n  }\n\n  type Mutation {\n    addClient(fname: String!, lname: String!, gender:[Gender!]!, birthdate: Date!, p_id: UUID!): Client!\n\n    deleteClient(c_id: UUID!): Client!\n\n    restoreClient(c_id: UUID!): Client!\n\n    updateClientInformation(c_id: UUID!, fname: String!, lname: String!, birthdate: Date!, gender:[Gender!]!): Client!\n  }\n";