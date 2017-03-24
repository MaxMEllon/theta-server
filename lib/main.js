'use strict';

require('babel-polyfill');

var _expressAwait = require('express-await');

var _expressAwait2 = _interopRequireDefault(_expressAwait);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var request = _axios2.default.create({
  baseURL: 'http://192.168.1.1',
  responseType: 'json'
});

var app = (0, _expressAwait2.default)();

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());

app.postAsync('/osc/commands/execute', function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(req, res) {
    var response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('[INFO] ===> POST /osc/commands/execute', req.body);
            _context.next = 3;
            return request({
              method: 'post',
              url: '/osc/commands/execute',
              data: req.body
            });

          case 3:
            response = _context.sent;

            res.send(response.body);
            console.log('[INFO] <=== RES');

          case 6:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

app.getAsync('/osc/info', function () {
  var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(req, res) {
    var response;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log('[INFO] ===> GET /osc/info');
            _context2.next = 3;
            return request({
              method: 'get',
              url: '/osc/info'
            });

          case 3:
            response = _context2.sent;

            res.send(response.data);
            console.log('[INFO] <=== RES');

          case 6:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());

app.listen(4000);