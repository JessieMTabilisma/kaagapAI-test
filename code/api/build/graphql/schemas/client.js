"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = "\n  scalar Date\n\n  enum Gender {\n    M\n    F\n  }\n\n  type Client {\n    c_id: ID!\n    fname: String!\n    lname: String!\n    gender: Gender!\n    birthdate: Date!\n    date_added: Date!\n    last_opened: Date\n    p_id: Int!\n    no_of_sessions: Int\n    sessions: [Session]\n  }\n\n  type Query { \n    clients(p_id: Int!): [Client!]\n    \n    client(c_id: Int!): Client\n  }\n\n  type Mutation {\n    addClient(fname: String!, lname: String!, gender:[Gender!]!, birthdate: Date!, p_id: Int!): Client!\n\n    deleteClient(c_id: Int!): Client!\n\n    updateClientInformation(c_id: Int!, fname: String!, lname: String!, birthdate: Date!, gender:[Gender!]!): Client!\n  }\n";