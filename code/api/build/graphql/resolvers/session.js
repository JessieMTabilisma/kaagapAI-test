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

  Session: {
    documents: function documents(_ref, args, _ref2) {
      var session_id = _ref.session_id;
      var models = _ref2.models;

      return models.Session_Document.findAll({ where: { session_id: session_id } });
    }
  },

  Query: {
    session: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(parent, _ref4, _ref5) {
        var session_id = _ref4.session_id;
        var models = _ref5.models;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return models.Session.findOne({ where: { session_id: session_id } });

              case 2:
                return _context.abrupt('return', _context.sent);

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, undefined);
      }));

      return function session(_x, _x2, _x3) {
        return _ref3.apply(this, arguments);
      };
    }()
  },

  Mutation: {
    addSession: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(parent, _ref7, _ref8) {
        var session_name = _ref7.session_name,
            date_of_session = _ref7.date_of_session,
            c_id = _ref7.c_id;
        var models = _ref8.models;
        var addSessionRes, session_id;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return models.Session.create({
                  session_name: session_name,
                  date_of_session: date_of_session,
                  c_id: c_id
                });

              case 2:
                addSessionRes = _context2.sent;
                session_id = addSessionRes.dataValues.session_id;
                _context2.next = 6;
                return models.Session.findOne({
                  raw: true,
                  where: {
                    session_id: session_id
                  }
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

      return function addSession(_x4, _x5, _x6) {
        return _ref6.apply(this, arguments);
      };
    }(),

    deleteSession: function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(parent, _ref10, _ref11) {
        var session_id = _ref10.session_id,
            c_id = _ref10.c_id;
        var models = _ref11.models;
        var deleteSessionRes;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return models.Session.findOne({
                  raw: true,
                  where: { session_id: session_id }
                });

              case 2:
                deleteSessionRes = _context3.sent;
                _context3.next = 5;
                return models.Session.destroy({
                  where: { session_id: session_id, c_id: c_id }
                });

              case 5:
                return _context3.abrupt('return', deleteSessionRes);

              case 6:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, undefined);
      }));

      return function deleteSession(_x7, _x8, _x9) {
        return _ref9.apply(this, arguments);
      };
    }(),

    updateSessionInformation: function () {
      var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(parent, _ref13, _ref14) {
        var session_id = _ref13.session_id,
            session_name = _ref13.session_name,
            date_of_session = _ref13.date_of_session;
        var models = _ref14.models;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return models.Session.update({
                  session_name: session_name,
                  date_of_session: date_of_session
                }, {
                  where: { session_id: session_id }
                });

              case 2:
                _context4.next = 4;
                return models.Session.findOne({
                  raw: true,
                  where: { session_id: session_id }
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

      return function updateSessionInformation(_x10, _x11, _x12) {
        return _ref12.apply(this, arguments);
      };
    }()
  }
};