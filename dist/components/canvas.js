'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @author hongfajing
 * @date 2019-05-04 16:28
 * @Description: 代码参考了jigsaw
 */
var jigsaw = function (_wepy$page) {
  _inherits(jigsaw, _wepy$page);

  function jigsaw() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, jigsaw);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = jigsaw.__proto__ || Object.getPrototypeOf(jigsaw)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'test verify'
    }, _this.data = {
      imgSrc: '', // 背景图路径
      x: Number, // 滑块坐标
      y: Number, // 滑块坐标
      canvasW: 220, // canvas width
      canvasH: 110, // canvas height
      blockW: 220, // block width
      blockH: 110, // block height
      l: 30, // 滑块边长
      r: 7, // 滑块半径
      PI: Math.PI, // 圆周率
      L: 47, // 滑块实际边长 l + r * 2 + 3
      canvas: 'canvas', // 画布
      block: 'block', // 滑块
      canvasCtx: Object, // 画布 canvas 实例
      blockCtx: Object, // 滑块 canvas 实例
      position: 0, // 滑块滑动的x轴距离
      isShowPrompt: true,
      thirdCtx: Object,
      third: 'third',
      thirdW: 220,
      thirdH: 110
    }, _this.methods = {
      bindSlideChange: function bindSlideChange(e) {
        this.position = e.detail.x;
        this.$apply();
      },
      bindTouchMove: function bindTouchMove(e) {
        this.isShowPrompt = false;
        this.$apply();
      },
      createCanvas: function createCanvas(e) {
        console.log(e);
        wx.canvasToTempFilePath({
          canvasId: e.currentTarget.dataset.canvasid,
          success: function success(res) {
            wx.saveImageToPhotosAlbum({
              filePath: res.tempFilePath,
              success: function success(res) {
                console.log(res);
              },
              fail: function fail(err) {
                console.error(err);
              }
            });
          },
          fail: function fail(err) {
            console.error(err);
          }
        });
      },
      cleanCanvas: function cleanCanvas() {
        var PI = this.PI,
            l = this.l,
            r = this.r,
            w = this.canvasW,
            h = this.canvasH;
        this.canvasCtx.clearRect(0, 0, w, h);
        this.blockCtx.clearRect(0, 0, w, h);
        this.thirdCtx.clearRect(0, 0, w, h);

        this.blockW = w;

        this.$apply();
      },
      refresh: function refresh() {
        this._init();
      }
    }, _this.computed = {
      slideDistance: function slideDistance() {
        return this.position;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(jigsaw, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(options) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this._init();

              case 2:
                console.log(111);

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad(_x) {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }, {
    key: '_init',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this._getRandomImgSrc();
                this._initCanvas();
                _context2.next = 4;
                return this._initImg();

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function _init() {
        return _ref3.apply(this, arguments);
      }

      return _init;
    }()
  }, {
    key: '_initCanvas',
    value: function _initCanvas() {
      this.canvasCtx = this._createCanvas(this.canvas);
      this.blockCtx = this._createCanvas(this.block);
      this.thirdCtx = this._createCanvas(this.third);
      this.$apply();
    }
  }, {
    key: '_getRandomImgSrc',
    value: function _getRandomImgSrc() {
      this.imgSrc = '//picsum.photos/300/150/?image=' + this._getRandomNumberByRange(0, 1084);
      this.$apply();
    }
  }, {
    key: '_initImg',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var that, r, y, x, L, canvasId;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this._draw();

                that = this;
                r = this.r, y = this.y - r * 2 + 2, x = this.x, L = this.L, canvasId = 'block';


                this.canvasCtx.draw();
                this.thirdCtx.draw();
                this.blockCtx.draw(false, function (res) {
                  that._canvasPutImageData({ x: x, y: y, L: L, canvasId: canvasId });
                });

              case 6:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function _initImg() {
        return _ref4.apply(this, arguments);
      }

      return _initImg;
    }()
  }, {
    key: '_draw',
    value: function _draw() {
      var L = this.L,
          r = this.r,
          w = this.canvasW,
          h = this.canvasH;

      this.x = this._getRandomNumberByRange(L + 10, w - (L + 10));
      this.y = this._getRandomNumberByRange(10 + r * 2, h - (L + 10));
      this.$apply();

      this._drawCanvas({
        ctx: this.canvasCtx,
        x: this.x,
        y: this.y,
        img: this.imgSrc,
        operation: 'fill'
      });

      this._drawCanvas({
        ctx: this.blockCtx,
        x: this.x,
        y: this.y,
        img: this.imgSrc,
        operation: 'clip'
      });

      this._drawCanvas({
        ctx: this.thirdCtx,
        x: this.x,
        y: this.y,
        img: this.imgSrc,
        operation: 'clip'
      });
    }
  }, {
    key: '_drawCanvas',
    value: function _drawCanvas(_ref5) {
      var ctx = _ref5.ctx,
          x = _ref5.x,
          y = _ref5.y,
          img = _ref5.img,
          operation = _ref5.operation,
          _ref5$dx = _ref5.dx,
          dx = _ref5$dx === undefined ? 0 : _ref5$dx,
          _ref5$dy = _ref5.dy,
          dy = _ref5$dy === undefined ? 0 : _ref5$dy;

      var PI = this.PI,
          l = this.l,
          r = this.r,
          w = this.canvasW,
          h = this.canvasH;

      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.arc(x + l / 2, y - r + 2, r, 0.72 * PI, 2.26 * PI);
      ctx.lineTo(x + l, y);
      ctx.arc(x + l + r - 2, y + l / 2, r, 1.21 * PI, 2.78 * PI);
      ctx.lineTo(x + l, y + l);
      ctx.lineTo(x, y + l);
      ctx.arc(x + r - 2, y + l / 2, r + 0.4, 2.76 * PI, 1.24 * PI, true);
      ctx.lineTo(x, y);
      ctx.lineWidth = 2;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.stroke();
      ctx[operation]();
      ctx.globalCompositeOperation = 'overlay';
      ctx.drawImage(img, dx, dy, w, h);
    }
  }, {
    key: '_createCanvas',
    value: function _createCanvas(id) {
      return wx.createCanvasContext(id);
    }
  }, {
    key: '_getRandomNumberByRange',
    value: function _getRandomNumberByRange(start, end) {
      return Math.round(Math.random() * (end - start) + start);
    }
  }, {
    key: '_sum',
    value: function _sum(x, y) {
      return x + y;
    }
  }, {
    key: '_square',
    value: function _square(x) {
      return x * x;
    }
  }, {
    key: '_canvasPutImageData',
    value: function _canvasPutImageData(_ref6) {
      var x = _ref6.x,
          y = _ref6.y,
          L = _ref6.L,
          canvasId = _ref6.canvasId;

      var that = this;
      wx.canvasGetImageData({
        canvasId: canvasId,
        x: x,
        y: y,
        width: L,
        height: L,
        success: function success(res) {
          console.log(res, 'get');
          that.blockW = L;
          that.$apply();

          wx.canvasPutImageData({
            canvasId: canvasId,
            x: 0,
            y: y,
            width: L,
            height: L,
            data: res.data,
            success: function success(res) {
              console.log(res, 'put');
            },
            fail: function fail(e) {
              console.log(e);
            }
          });
        },
        fail: function fail(e) {
          console.log(e);
        }
      });
    }
  }]);

  return jigsaw;
}(_wepy2.default.page);

exports.default = jigsaw;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbnZhcy5qcyJdLCJuYW1lcyI6WyJqaWdzYXciLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImltZ1NyYyIsIngiLCJOdW1iZXIiLCJ5IiwiY2FudmFzVyIsImNhbnZhc0giLCJibG9ja1ciLCJibG9ja0giLCJsIiwiciIsIlBJIiwiTWF0aCIsIkwiLCJjYW52YXMiLCJibG9jayIsImNhbnZhc0N0eCIsIk9iamVjdCIsImJsb2NrQ3R4IiwicG9zaXRpb24iLCJpc1Nob3dQcm9tcHQiLCJ0aGlyZEN0eCIsInRoaXJkIiwidGhpcmRXIiwidGhpcmRIIiwibWV0aG9kcyIsImJpbmRTbGlkZUNoYW5nZSIsImUiLCJkZXRhaWwiLCIkYXBwbHkiLCJiaW5kVG91Y2hNb3ZlIiwiY3JlYXRlQ2FudmFzIiwiY29uc29sZSIsImxvZyIsInd4IiwiY2FudmFzVG9UZW1wRmlsZVBhdGgiLCJjYW52YXNJZCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiY2FudmFzaWQiLCJzdWNjZXNzIiwicmVzIiwic2F2ZUltYWdlVG9QaG90b3NBbGJ1bSIsImZpbGVQYXRoIiwidGVtcEZpbGVQYXRoIiwiZmFpbCIsImVyciIsImVycm9yIiwiY2xlYW5DYW52YXMiLCJ3IiwiaCIsImNsZWFyUmVjdCIsInJlZnJlc2giLCJfaW5pdCIsImNvbXB1dGVkIiwic2xpZGVEaXN0YW5jZSIsIm9wdGlvbnMiLCJfZ2V0UmFuZG9tSW1nU3JjIiwiX2luaXRDYW52YXMiLCJfaW5pdEltZyIsIl9jcmVhdGVDYW52YXMiLCJfZ2V0UmFuZG9tTnVtYmVyQnlSYW5nZSIsIl9kcmF3IiwidGhhdCIsImRyYXciLCJfY2FudmFzUHV0SW1hZ2VEYXRhIiwiX2RyYXdDYW52YXMiLCJjdHgiLCJpbWciLCJvcGVyYXRpb24iLCJkeCIsImR5IiwiYmVnaW5QYXRoIiwibW92ZVRvIiwiYXJjIiwibGluZVRvIiwibGluZVdpZHRoIiwiZmlsbFN0eWxlIiwic3Ryb2tlU3R5bGUiLCJzdHJva2UiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJkcmF3SW1hZ2UiLCJpZCIsImNyZWF0ZUNhbnZhc0NvbnRleHQiLCJzdGFydCIsImVuZCIsInJvdW5kIiwicmFuZG9tIiwiY2FudmFzR2V0SW1hZ2VEYXRhIiwid2lkdGgiLCJoZWlnaHQiLCJjYW52YXNQdXRJbWFnZURhdGEiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7O0lBS3FCQSxNOzs7Ozs7Ozs7Ozs7OztzTEFFbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsY0FBUSxFQURILEVBQ2M7QUFDbkJDLFNBQUdDLE1BRkUsRUFFYztBQUNuQkMsU0FBR0QsTUFIRSxFQUdjO0FBQ25CRSxlQUFTLEdBSkosRUFJYztBQUNuQkMsZUFBUyxHQUxKLEVBS2M7QUFDbkJDLGNBQVEsR0FOSCxFQU1jO0FBQ25CQyxjQUFRLEdBUEgsRUFPYztBQUNuQkMsU0FBRyxFQVJFLEVBUWM7QUFDbkJDLFNBQUcsQ0FURSxFQVNjO0FBQ25CQyxVQUFJQyxLQUFLRCxFQVZKLEVBVWM7QUFDbkJFLFNBQUcsRUFYRSxFQVdjO0FBQ25CQyxjQUFRLFFBWkgsRUFZYztBQUNuQkMsYUFBTyxPQWJGLEVBYWM7QUFDbkJDLGlCQUFXQyxNQWROLEVBY2M7QUFDbkJDLGdCQUFVRCxNQWZMLEVBZWM7QUFDbkJFLGdCQUFVLENBaEJMLEVBZ0JlO0FBQ3BCQyxvQkFBYyxJQWpCVDtBQWtCTEMsZ0JBQVVKLE1BbEJMO0FBbUJMSyxhQUFPLE9BbkJGO0FBb0JMQyxjQUFRLEdBcEJIO0FBcUJMQyxjQUFRO0FBckJILEssUUF3QlBDLE8sR0FBVTtBQUNSQyxxQkFEUSwyQkFDUUMsQ0FEUixFQUNVO0FBQ2hCLGFBQUtSLFFBQUwsR0FBZ0JRLEVBQUVDLE1BQUYsQ0FBUzFCLENBQXpCO0FBQ0EsYUFBSzJCLE1BQUw7QUFDRCxPQUpPO0FBS1JDLG1CQUxRLHlCQUtNSCxDQUxO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aUI7QUFJcEJxRixlQUFPNUUsQ0FKYTtBQUtwQjZFLGdCQUFRN0UsQ0FMWTtBQU1wQjJCLGVBTm9CLG1CQU1aQyxHQU5ZLEVBTVA7QUFDWFQsa0JBQVFDLEdBQVIsQ0FBWVEsR0FBWixFQUFpQixLQUFqQjtBQUNBc0IsZUFBS3hELE1BQUwsR0FBY00sQ0FBZDtBQUNBa0QsZUFBS2xDLE1BQUw7O0FBRUFLLGFBQUd5RCxrQkFBSCxDQUFzQjtBQUNwQnZELHNCQUFVQSxRQURVO0FBRXBCbEMsZUFBRyxDQUZpQjtBQUdwQkUsZUFBR0EsQ0FIaUI7QUFJcEJxRixtQkFBTzVFLENBSmE7QUFLcEI2RSxvQkFBUTdFLENBTFk7QUFNcEJiLGtCQUFNeUMsSUFBSXpDLElBTlU7QUFPcEJ3QyxtQkFQb0IsbUJBT1pDLEdBUFksRUFPUDtBQUNYVCxzQkFBUUMsR0FBUixDQUFZUSxHQUFaLEVBQWlCLEtBQWpCO0FBQ0QsYUFUbUI7QUFVcEJJLGdCQVZvQixnQkFVZmxCLENBVmUsRUFVWjtBQUNOSyxzQkFBUUMsR0FBUixDQUFZTixDQUFaO0FBQ0Q7QUFabUIsV0FBdEI7QUFjRCxTQXpCbUI7QUEwQnBCa0IsWUExQm9CLGdCQTBCZmxCLENBMUJlLEVBMEJaO0FBQ05LLGtCQUFRQyxHQUFSLENBQVlOLENBQVo7QUFDRDtBQTVCbUIsT0FBdEI7QUE4QkQ7Ozs7RUE5TmlDaUUsZUFBS0MsSTs7a0JBQXBCaEcsTSIsImZpbGUiOiJjYW52YXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICAvKipcbiAgICogQGF1dGhvciBob25nZmFqaW5nXG4gICAqIEBkYXRlIDIwMTktMDUtMDQgMTY6MjhcbiAgICogQERlc2NyaXB0aW9uOiDku6PnoIHlj4LogIPkuoZqaWdzYXdcbiAgICovXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGppZ3NhdyBleHRlbmRzIHdlcHkucGFnZSB7XG5cbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAndGVzdCB2ZXJpZnknLFxuICAgIH07XG5cbiAgICBkYXRhID0ge1xuICAgICAgaW1nU3JjOiAnJywgICAgICAgIC8vIOiDjOaZr+Wbvui3r+W+hFxuICAgICAgeDogTnVtYmVyLCAgICAgICAgIC8vIOa7keWdl+WdkOagh1xuICAgICAgeTogTnVtYmVyLCAgICAgICAgIC8vIOa7keWdl+WdkOagh1xuICAgICAgY2FudmFzVzogMjIwLCAgICAgIC8vIGNhbnZhcyB3aWR0aFxuICAgICAgY2FudmFzSDogMTEwLCAgICAgIC8vIGNhbnZhcyBoZWlnaHRcbiAgICAgIGJsb2NrVzogMjIwLCAgICAgICAvLyBibG9jayB3aWR0aFxuICAgICAgYmxvY2tIOiAxMTAsICAgICAgIC8vIGJsb2NrIGhlaWdodFxuICAgICAgbDogMzAsICAgICAgICAgICAgIC8vIOa7keWdl+i+uemVv1xuICAgICAgcjogNywgICAgICAgICAgICAgIC8vIOa7keWdl+WNiuW+hFxuICAgICAgUEk6IE1hdGguUEksICAgICAgIC8vIOWchuWRqOeOh1xuICAgICAgTDogNDcsICAgICAgICAgICAgIC8vIOa7keWdl+WunumZhei+uemVvyBsICsgciAqIDIgKyAzXG4gICAgICBjYW52YXM6ICdjYW52YXMnLCAgLy8g55S75biDXG4gICAgICBibG9jazogJ2Jsb2NrJywgICAgLy8g5ruR5Z2XXG4gICAgICBjYW52YXNDdHg6IE9iamVjdCwgLy8g55S75biDIGNhbnZhcyDlrp7kvotcbiAgICAgIGJsb2NrQ3R4OiBPYmplY3QsICAvLyDmu5HlnZcgY2FudmFzIOWunuS+i1xuICAgICAgcG9zaXRpb246IDAsICAgICAgICAvLyDmu5HlnZfmu5HliqjnmoR46L206Led56a7XG4gICAgICBpc1Nob3dQcm9tcHQ6IHRydWUsXG4gICAgICB0aGlyZEN0eDogT2JqZWN0LFxuICAgICAgdGhpcmQ6ICd0aGlyZCcsXG4gICAgICB0aGlyZFc6IDIyMCxcbiAgICAgIHRoaXJkSDogMTEwLFxuICAgIH07XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgYmluZFNsaWRlQ2hhbmdlKGUpe1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gZS5kZXRhaWwueDtcbiAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgIH0sXG4gICAgICBiaW5kVG91Y2hNb3ZlKGUpIHtcbiAgICAgICAgdGhpcy5pc1Nob3dQcm9tcHQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgIH0sXG4gICAgICBjcmVhdGVDYW52YXMoZSl7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICB3eC5jYW52YXNUb1RlbXBGaWxlUGF0aCh7XG4gICAgICAgICAgY2FudmFzSWQ6IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmNhbnZhc2lkLFxuICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICAgIHd4LnNhdmVJbWFnZVRvUGhvdG9zQWxidW0oe1xuICAgICAgICAgICAgICBmaWxlUGF0aDogcmVzLnRlbXBGaWxlUGF0aCxcbiAgICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZmFpbDogKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbDogKGVycikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGNsZWFuQ2FudmFzKCl7XG4gICAgICAgIGNvbnN0IFBJID0gdGhpcy5QSSwgbCA9dGhpcy5sLCByPSB0aGlzLnIsIHc9IHRoaXMuY2FudmFzVywgaD0gdGhpcy5jYW52YXNIO1xuICAgICAgICB0aGlzLmNhbnZhc0N0eC5jbGVhclJlY3QoMCwgMCwgdywgaClcbiAgICAgICAgdGhpcy5ibG9ja0N0eC5jbGVhclJlY3QoMCwgMCwgdywgaClcbiAgICAgICAgdGhpcy50aGlyZEN0eC5jbGVhclJlY3QoMCwgMCwgdywgaClcblxuICAgICAgICB0aGlzLmJsb2NrVyA9IHdcblxuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgfSxcbiAgICAgIHJlZnJlc2goKXtcbiAgICAgICAgdGhpcy5faW5pdCgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICAgIHNsaWRlRGlzdGFuY2UoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb247XG4gICAgICB9XG4gICAgfTtcblxuICAgIGFzeW5jIG9uTG9hZChvcHRpb25zKSB7XG4gICAgICBhd2FpdCB0aGlzLl9pbml0KCk7XG4gICAgICBjb25zb2xlLmxvZygxMTEpO1xuICAgIH1cblxuICAgIGFzeW5jIF9pbml0KCkge1xuICAgICAgdGhpcy5fZ2V0UmFuZG9tSW1nU3JjKCk7XG4gICAgICB0aGlzLl9pbml0Q2FudmFzKCk7XG4gICAgICBhd2FpdCB0aGlzLl9pbml0SW1nKCk7XG4gICAgfVxuICAgIF9pbml0Q2FudmFzKCl7XG4gICAgICB0aGlzLmNhbnZhc0N0eCA9IHRoaXMuX2NyZWF0ZUNhbnZhcyh0aGlzLmNhbnZhcyk7XG4gICAgICB0aGlzLmJsb2NrQ3R4ID0gdGhpcy5fY3JlYXRlQ2FudmFzKHRoaXMuYmxvY2spO1xuICAgICAgdGhpcy50aGlyZEN0eCA9IHRoaXMuX2NyZWF0ZUNhbnZhcyh0aGlzLnRoaXJkKTtcbiAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgfVxuXG4gICAgX2dldFJhbmRvbUltZ1NyYygpIHtcbiAgICAgIHRoaXMuaW1nU3JjPScvL3BpY3N1bS5waG90b3MvMzAwLzE1MC8/aW1hZ2U9JyArIHRoaXMuX2dldFJhbmRvbU51bWJlckJ5UmFuZ2UoMCwgMTA4NCk7XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH1cbiAgICBhc3luYyBfaW5pdEltZygpIHtcbiAgICAgIHRoaXMuX2RyYXcoKTtcblxuICAgICAgbGV0IHRoYXQ9IHRoaXM7XG4gICAgICBjb25zdCByID0gdGhpcy5yLFxuICAgICAgICAgICAgeSA9IHRoaXMueSAtIHIgKiAyICsgMixcbiAgICAgICAgICAgIHggPSB0aGlzLngsXG4gICAgICAgICAgICBMID0gdGhpcy5MLFxuICAgICAgICAgICAgY2FudmFzSWQ9ICdibG9jayc7XG5cbiAgICAgIHRoaXMuY2FudmFzQ3R4LmRyYXcoKTtcbiAgICAgIHRoaXMudGhpcmRDdHguZHJhdygpO1xuICAgICAgdGhpcy5ibG9ja0N0eC5kcmF3KGZhbHNlLCByZXMgPT4ge1xuICAgICAgICB0aGF0Ll9jYW52YXNQdXRJbWFnZURhdGEoe3gsIHksIEwsIGNhbnZhc0lkfSlcbiAgICAgIH0pO1xuXG4gICAgfVxuICAgIF9kcmF3KCkge1xuICAgICAgY29uc3QgTD0gdGhpcy5MLFxuICAgICAgICAgICAgciA9IHRoaXMucixcbiAgICAgICAgICAgIHcgPSB0aGlzLmNhbnZhc1csXG4gICAgICAgICAgICBoPSB0aGlzLmNhbnZhc0g7XG5cbiAgICAgIHRoaXMueCA9IHRoaXMuX2dldFJhbmRvbU51bWJlckJ5UmFuZ2UoTCArIDEwLCB3IC0gKEwgKyAxMCkpO1xuICAgICAgdGhpcy55ID0gdGhpcy5fZ2V0UmFuZG9tTnVtYmVyQnlSYW5nZSgxMCArIHIgKiAyLCBoIC0gKEwgKyAxMCkpO1xuICAgICAgdGhpcy4kYXBwbHkoKTtcblxuICAgICAgdGhpcy5fZHJhd0NhbnZhcyh7XG4gICAgICAgIGN0eDogdGhpcy5jYW52YXNDdHgsXG4gICAgICAgIHg6IHRoaXMueCxcbiAgICAgICAgeTogdGhpcy55LFxuICAgICAgICBpbWc6IHRoaXMuaW1nU3JjLFxuICAgICAgICBvcGVyYXRpb246J2ZpbGwnXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5fZHJhd0NhbnZhcyh7XG4gICAgICAgIGN0eDogdGhpcy5ibG9ja0N0eCxcbiAgICAgICAgeDogdGhpcy54LFxuICAgICAgICB5OiB0aGlzLnksXG4gICAgICAgIGltZzogdGhpcy5pbWdTcmMsXG4gICAgICAgIG9wZXJhdGlvbjonY2xpcCcsXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5fZHJhd0NhbnZhcyh7XG4gICAgICAgIGN0eDogdGhpcy50aGlyZEN0eCxcbiAgICAgICAgeDogdGhpcy54LFxuICAgICAgICB5OiB0aGlzLnksXG4gICAgICAgIGltZzogdGhpcy5pbWdTcmMsXG4gICAgICAgIG9wZXJhdGlvbjonY2xpcCcsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBfZHJhd0NhbnZhcyh7Y3R4LCB4LCB5LCBpbWcsIG9wZXJhdGlvbiwgZHggPSAwLCBkeSA9IDB9KSB7XG4gICAgICBjb25zdCBQSSA9IHRoaXMuUEksIGwgPXRoaXMubCwgcj0gdGhpcy5yLCB3PSB0aGlzLmNhbnZhc1csIGg9IHRoaXMuY2FudmFzSDtcblxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4Lm1vdmVUbyh4LCB5KTtcbiAgICAgIGN0eC5hcmMoeCArIGwgLyAyLCB5IC0gciArIDIsIHIsIDAuNzIgKiBQSSwgMi4yNiAqIFBJKTtcbiAgICAgIGN0eC5saW5lVG8oeCArIGwsIHkpO1xuICAgICAgY3R4LmFyYyh4ICsgbCArIHIgLSAyLCB5ICsgbCAvIDIsIHIsIDEuMjEgKiBQSSwgMi43OCAqIFBJKTtcbiAgICAgIGN0eC5saW5lVG8oeCArIGwsIHkgKyBsKTtcbiAgICAgIGN0eC5saW5lVG8oeCwgeSArIGwpO1xuICAgICAgY3R4LmFyYyh4ICsgciAtIDIsIHkgKyBsIC8gMiwgciArIDAuNCwgMi43NiAqIFBJLCAxLjI0ICogUEksIHRydWUpO1xuICAgICAgY3R4LmxpbmVUbyh4LCB5KTtcbiAgICAgIGN0eC5saW5lV2lkdGggPSAyO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyknO1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSc7XG4gICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICBjdHhbb3BlcmF0aW9uXSgpO1xuICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdvdmVybGF5JztcbiAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCBkeCwgZHksIHcsIGgpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDYW52YXMoaWQpIHtcbiAgICAgIHJldHVybiB3eC5jcmVhdGVDYW52YXNDb250ZXh0KGlkKVxuICAgIH1cblxuICAgIF9nZXRSYW5kb21OdW1iZXJCeVJhbmdlKHN0YXJ0LCBlbmQpIHtcbiAgICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoZW5kIC0gc3RhcnQpICsgc3RhcnQpXG4gICAgfVxuXG4gICAgX3N1bSh4LCB5KSB7XG4gICAgICByZXR1cm4geCArIHlcbiAgICB9XG5cbiAgICBfc3F1YXJlKHgpIHtcbiAgICAgIHJldHVybiB4ICogeFxuICAgIH1cblxuICAgIF9jYW52YXNQdXRJbWFnZURhdGEoe3gseSxMLGNhbnZhc0lkfSl7XG4gICAgICBsZXQgdGhhdD0gdGhpcztcbiAgICAgIHd4LmNhbnZhc0dldEltYWdlRGF0YSh7XG4gICAgICAgIGNhbnZhc0lkOiBjYW52YXNJZCxcbiAgICAgICAgeDogeCxcbiAgICAgICAgeTogeSxcbiAgICAgICAgd2lkdGg6IEwsXG4gICAgICAgIGhlaWdodDogTCxcbiAgICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMsICdnZXQnKTtcbiAgICAgICAgICB0aGF0LmJsb2NrVyA9IEw7XG4gICAgICAgICAgdGhhdC4kYXBwbHkoKTtcblxuICAgICAgICAgIHd4LmNhbnZhc1B1dEltYWdlRGF0YSh7XG4gICAgICAgICAgICBjYW52YXNJZDogY2FudmFzSWQsXG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogeSxcbiAgICAgICAgICAgIHdpZHRoOiBMLFxuICAgICAgICAgICAgaGVpZ2h0OiBMLFxuICAgICAgICAgICAgZGF0YTogcmVzLmRhdGEsXG4gICAgICAgICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMsICdwdXQnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmYWlsKGUpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbChlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuXG4gIH1cbiJdfQ==