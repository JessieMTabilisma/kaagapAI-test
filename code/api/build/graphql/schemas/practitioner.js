"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = "\n  scalar Date \n  \n  enum Status {\n    pending\n    deactivated\n    active\n  }\n\n  type Practitioner {\n    p_id: UUID!\n    email: String!\n    phone_no: String!\n    password: String!\n    fname: String!\n    lname: String!\n    license: String!\n    profession: String!\n    status: Status!\n    date_registered: Date!\n    date_deactivated: Date\n    last_logged: Date\n    session_token: String\n  }\n";