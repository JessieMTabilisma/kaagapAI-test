'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphqlTypeUuid = require('graphql-type-uuid');

var _graphqlTypeUuid2 = _interopRequireDefault(_graphqlTypeUuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = {
  UUID: _graphqlTypeUuid2.default,

  Client: {
    sessions: function sessions(_ref, args, _ref2) {
      var c_id = _ref.c_id;
      var models = _ref2.models;

      return models.Session.findAll({ where: { c_id: c_id } });
    },

    no_of_sessions: function no_of_sessions(_ref3, args, _ref4) {
      var c_id = _ref3.c_id;
      var models = _ref4.models;

      return models.Session.count({ where: { c_id: c_id } });
    }
  },

  Query: {
    clients: function clients(parent, _ref5, _ref6) {
      var p_id = _ref5.p_id;
      var models = _ref6.models;

      return models.Client.findAll({
        raw: true,
        where: { p_id: p_id }
      });
    },

    client: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(parent, _ref8, _ref9) {
        var c_id = _ref8.c_id;
        var models = _ref9.models;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return models.Client.update({
                  last_opened: new Date()
                }, { where: { c_id: c_id } });

              case 2:
                _context.next = 4;
                return models.Client.findOne({ where: { c_id: c_id } });

              case 4:
                return _context.abrupt('return', _context.sent);

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, undefined);
      }));

      return function client(_x, _x2, _x3) {
        return _ref7.apply(this, arguments);
      };
    }()
  },

  Mutation: {
    addClient: function () {
      var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(parent, _ref11, _ref12) {
        var fname = _ref11.fname,
            lname = _ref11.lname,
            gender = _ref11.gender,
            birthdate = _ref11.birthdate,
            p_id = _ref11.p_id;
        var models = _ref12.models;
        var addClientRes, c_id;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return models.Client.create({
                  fname: fname,
                  lname: lname,
                  gender: gender,
                  birthdate: birthdate,
                  p_id: p_id,
                  date_added: new Date()
                });

              case 2:
                addClientRes = _context2.sent;
                c_id = addClientRes.dataValues.c_id;
                _context2.next = 6;
                return models.Client.findOne({
                  raw: true,
                  where: { c_id: c_id }
                });

              case 6:
                return _context2.abrupt('return', _context2.sent);

              case 7:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, undefined);
      }));

      return function addClient(_x4, _x5, _x6) {
        return _ref10.apply(this, arguments);
      };
    }(),

    deleteClient: function () {
      var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(parent, _ref14, _ref15) {
        var c_id = _ref14.c_id;
        var models = _ref15.models;
        var deleteClientRes;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return models.Client.findOne({
                  raw: true,
                  where: { c_id: c_id }
                });

              case 2:
                deleteClientRes = _context3.sent;
                _context3.next = 5;
                return models.Client.destroy({
                  where: { c_id: c_id }
                });

              case 5:
                return _context3.abrupt('return', deleteClientRes);

              case 6:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, undefined);
      }));

      return function deleteClient(_x7, _x8, _x9) {
        return _ref13.apply(this, arguments);
      };
    }(),

    updateClientInformation: function () {
      var _ref16 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(parent, _ref17, _ref18) {
        var c_id = _ref17.c_id,
            fname = _ref17.fname,
            lname = _ref17.lname,
            birthdate = _ref17.birthdate,
            gender = _ref17.gender;
        var models = _ref18.models;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return models.Client.update({
                  fname: fname,
                  lname: lname,
                  birthdate: birthdate,
                  gender: gender
                }, {
                  where: { c_id: c_id }
                });

              case 2:
                _context4.next = 4;
                return models.Client.findOne({
                  raw: true,
                  where: { c_id: c_id }
                });

              case 4:
                return _context4.abrupt('return', _context4.sent);

              case 5:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, undefined);
      }));

      return function updateClientInformation(_x10, _x11, _x12) {
        return _ref16.apply(this, arguments);
      };
    }()
  }
};