"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = {
  Query: {
    getSessions: function getSessions(parent, _ref, _ref2) {
      var c_id = _ref.c_id;
      var models = _ref2.models;

      models.Session.findAll({
        raw: true,
        where: { c_id: c_id }
      });
    }
  },
  Mutation: {
    addSession: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(parent, _ref4, _ref5) {
        var session_name = _ref4.session_name,
            date_of_session = _ref4.date_of_session,
            c_id = _ref4.c_id;
        var models = _ref5.models;
        var addSessionRes, session_id;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return models.Session.create({
                  session_name: session_name,
                  date_of_session: date_of_session,
                  c_id: c_id
                });

              case 2:
                addSessionRes = _context.sent;
                session_id = addSessionRes.dataValues.session_id;
                _context.next = 6;
                return models.Session.findOne({
                  raw: true,
                  where: {
                    session_id: session_id
                  }
                });

              case 6:
                return _context.abrupt("return", _context.sent);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, undefined);
      }));

      return function addSession(_x, _x2, _x3) {
        return _ref3.apply(this, arguments);
      };
    }(),
    deleteSession: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(parent, _ref7, _ref8) {
        var session_id = _ref7.session_id,
            c_id = _ref7.c_id;
        var models = _ref8.models;
        var deleteSessionRes;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return models.Session.findOne({
                  raw: true,
                  where: { session_id: session_id }
                });

              case 2:
                deleteSessionRes = _context2.sent;
                _context2.next = 5;
                return models.Session.destroy({
                  where: { session_id: session_id, c_id: c_id }
                });

              case 5:
                return _context2.abrupt("return", deleteSessionRes);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, undefined);
      }));

      return function deleteSession(_x4, _x5, _x6) {
        return _ref6.apply(this, arguments);
      };
    }(),
    updateSessionInformation: function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(parent, _ref10, _ref11) {
        var session_id = _ref10.session_id,
            session_name = _ref10.session_name,
            date_of_session = _ref10.date_of_session;
        var models = _ref11.models;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return models.Session.update({
                  session_name: session_name,
                  date_of_session: date_of_session
                }, {
                  where: { session_id: session_id }
                });

              case 2:
                _context3.next = 4;
                return models.Session.findOne({
                  raw: true,
                  where: { session_id: session_id }
                });

              case 4:
                return _context3.abrupt("return", _context3.sent);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, undefined);
      }));

      return function updateSessionInformation(_x7, _x8, _x9) {
        return _ref9.apply(this, arguments);
      };
    }()
  }
};