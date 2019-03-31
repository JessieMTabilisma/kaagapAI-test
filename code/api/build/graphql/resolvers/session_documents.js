'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = {
  Query: {
    getSessionDocuments: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(parent, _ref2, _ref3) {
        var session_id = _ref2.session_id;
        var models = _ref3.models;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return models.Session_Document.findAll({
                  raw: true,
                  where: { session_id: session_id },
                  attributes: {
                    exclude: ['content']
                  }
                });

              case 2:
                return _context.abrupt('return', _context.sent);

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, undefined);
      }));

      return function getSessionDocuments(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      };
    }(),
    getSessionDocument: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(parent, _ref5, _ref6) {
        var sd_id = _ref5.sd_id;
        var models = _ref6.models;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return models.Session_Document.findOne({
                  raw: true,
                  where: { sd_id: sd_id },
                  attributes: ['sd_id', 'file', 'file_name']
                });

              case 2:
                return _context2.abrupt('return', _context2.sent);

              case 3:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, undefined);
      }));

      return function getSessionDocument(_x4, _x5, _x6) {
        return _ref4.apply(this, arguments);
      };
    }()
  }
};