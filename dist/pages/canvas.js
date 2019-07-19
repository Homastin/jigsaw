'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(jigsaw , 'pages/canvas'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbnZhcy5qcyJdLCJuYW1lcyI6WyJqaWdzYXciLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImltZ1NyYyIsIngiLCJOdW1iZXIiLCJ5IiwiY2FudmFzVyIsImNhbnZhc0giLCJibG9ja1ciLCJibG9ja0giLCJsIiwiciIsIlBJIiwiTWF0aCIsIkwiLCJjYW52YXMiLCJibG9jayIsImNhbnZhc0N0eCIsIk9iamVjdCIsImJsb2NrQ3R4IiwicG9zaXRpb24iLCJpc1Nob3dQcm9tcHQiLCJ0aGlyZEN0eCIsInRoaXJkIiwidGhpcmRXIiwidGhpcmRIIiwibWV0aG9kcyIsImJpbmRTbGlkZUNoYW5nZSIsImUiLCJkZXRhaWwiLCIkYXBwbHkiLCJiaW5kVG91Y2hNb3ZlIiwiY3JlYXRlQ2FudmFzIiwiY29uc29sZSIsImxvZyIsInd4IiwiY2FudmFzVG9UZW1wRmlsZVBhdGgiLCJjYW52YXNJZCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiY2FudmFzaWQiLCJzdWNjZXNzIiwicmVzIiwic2F2ZUltYWdlVG9QaG90b3NBbGJ1bSIsImZpbGVQYXRoIiwidGVtcEZpbGVQYXRoIiwiZmFpbCIsImVyciIsImVycm9yIiwiY2xlYW5DYW52YXMiLCJ3IiwiaCIsImNsZWFyUmVjdCIsInJlZnJlc2giLCJfaW5pdCIsImNvbXB1dGVkIiwic2xpZGVEaXN0YW5jZSIsIm9wdGlvbnMiLCJfZ2V0UmFuZG9tSW1nU3JjIiwiX2luaXRDYW52YXMiLCJfaW5pdEltZyIsIl9jcmVhdGVDYW52YXMiLCJfZ2V0UmFuZG9tTnVtYmVyQnlSYW5nZSIsIl9kcmF3IiwidGhhdCIsImRyYXciLCJfY2FudmFzUHV0SW1hZ2VEYXRhIiwiX2RyYXdDYW52YXMiLCJjdHgiLCJpbWciLCJvcGVyYXRpb24iLCJkeCIsImR5IiwiYmVnaW5QYXRoIiwibW92ZVRvIiwiYXJjIiwibGluZVRvIiwibGluZVdpZHRoIiwiZmlsbFN0eWxlIiwic3Ryb2tlU3R5bGUiLCJzdHJva2UiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJkcmF3SW1hZ2UiLCJpZCIsImNyZWF0ZUNhbnZhc0NvbnRleHQiLCJzdGFydCIsImVuZCIsInJvdW5kIiwicmFuZG9tIiwiY2FudmFzR2V0SW1hZ2VEYXRhIiwid2lkdGgiLCJoZWlnaHQiLCJjYW52YXNQdXRJbWFnZURhdGEiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7O0lBS3FCQSxNOzs7Ozs7Ozs7Ozs7OztzTEFFbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsY0FBUSxFQURILEVBQ2M7QUFDbkJDLFNBQUdDLE1BRkUsRUFFYztBQUNuQkMsU0FBR0QsTUFIRSxFQUdjO0FBQ25CRSxlQUFTLEdBSkosRUFJYztBQUNuQkMsZUFBUyxHQUxKLEVBS2M7QUFDbkJDLGNBQVEsR0FOSCxFQU1jO0FBQ25CQyxjQUFRLEdBUEgsRUFPYztBQUNuQkMsU0FBRyxFQVJFLEVBUWM7QUFDbkJDLFNBQUcsQ0FURSxFQVNjO0FBQ25CQyxVQUFJQyxLQUFLRCxFQVZKLEVBVWM7QUFDbkJFLFNBQUcsRUFYRSxFQVdjO0FBQ25CQyxjQUFRLFFBWkgsRUFZYztBQUNuQkMsYUFBTyxPQWJGLEVBYWM7QUFDbkJDLGlCQUFXQyxNQWROLEVBY2M7QUFDbkJDLGdCQUFVRCxNQWZMLEVBZWM7QUFDbkJFLGdCQUFVLENBaEJMLEVBZ0JlO0FBQ3BCQyxvQkFBYyxJQWpCVDtBQWtCTEMsZ0JBQVVKLE1BbEJMO0FBbUJMSyxhQUFPLE9BbkJGO0FBb0JMQyxjQUFRLEdBcEJIO0FBcUJMQyxjQUFRO0FBckJILEssUUF3QlBDLE8sR0FBVTtBQUNSQyxxQkFEUSwyQkFDUUMsQ0FEUixFQUNVO0FBQ2hCLGFBQUtSLFFBQUwsR0FBZ0JRLEVBQUVDLE1BQUYsQ0FBUzFCLENBQXpCO0FBQ0EsYUFBSzJCLE1BQUw7QUFDRCxPQUpPO0FBS1JDLG1CQUxRLHlCQUtNSCxDQUxO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QjtBQUlwQnFGLGVBQU81RSxDQUphO0FBS3BCNkUsZ0JBQVE3RSxDQUxZO0FBTXBCMkIsZUFOb0IsbUJBTVpDLEdBTlksRUFNUDtBQUNYVCxrQkFBUUMsR0FBUixDQUFZUSxHQUFaLEVBQWlCLEtBQWpCO0FBQ0FzQixlQUFLeEQsTUFBTCxHQUFjTSxDQUFkO0FBQ0FrRCxlQUFLbEMsTUFBTDs7QUFFQUssYUFBR3lELGtCQUFILENBQXNCO0FBQ3BCdkQsc0JBQVVBLFFBRFU7QUFFcEJsQyxlQUFHLENBRmlCO0FBR3BCRSxlQUFHQSxDQUhpQjtBQUlwQnFGLG1CQUFPNUUsQ0FKYTtBQUtwQjZFLG9CQUFRN0UsQ0FMWTtBQU1wQmIsa0JBQU15QyxJQUFJekMsSUFOVTtBQU9wQndDLG1CQVBvQixtQkFPWkMsR0FQWSxFQU9QO0FBQ1hULHNCQUFRQyxHQUFSLENBQVlRLEdBQVosRUFBaUIsS0FBakI7QUFDRCxhQVRtQjtBQVVwQkksZ0JBVm9CLGdCQVVmbEIsQ0FWZSxFQVVaO0FBQ05LLHNCQUFRQyxHQUFSLENBQVlOLENBQVo7QUFDRDtBQVptQixXQUF0QjtBQWNELFNBekJtQjtBQTBCcEJrQixZQTFCb0IsZ0JBMEJmbEIsQ0ExQmUsRUEwQlo7QUFDTkssa0JBQVFDLEdBQVIsQ0FBWU4sQ0FBWjtBQUNEO0FBNUJtQixPQUF0QjtBQThCRDs7OztFQTlOaUNpRSxlQUFLQyxJOztrQkFBcEJoRyxNIiwiZmlsZSI6ImNhbnZhcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIC8qKlxuICAgKiBAYXV0aG9yIGhvbmdmYWppbmdcbiAgICogQGRhdGUgMjAxOS0wNS0wNCAxNjoyOFxuICAgKiBARGVzY3JpcHRpb246IOS7o+eggeWPguiAg+S6hmppZ3Nhd1xuICAgKi9cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3Mgamlnc2F3IGV4dGVuZHMgd2VweS5wYWdlIHtcblxuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICd0ZXN0IHZlcmlmeScsXG4gICAgfTtcblxuICAgIGRhdGEgPSB7XG4gICAgICBpbWdTcmM6ICcnLCAgICAgICAgLy8g6IOM5pmv5Zu+6Lev5b6EXG4gICAgICB4OiBOdW1iZXIsICAgICAgICAgLy8g5ruR5Z2X5Z2Q5qCHXG4gICAgICB5OiBOdW1iZXIsICAgICAgICAgLy8g5ruR5Z2X5Z2Q5qCHXG4gICAgICBjYW52YXNXOiAyMjAsICAgICAgLy8gY2FudmFzIHdpZHRoXG4gICAgICBjYW52YXNIOiAxMTAsICAgICAgLy8gY2FudmFzIGhlaWdodFxuICAgICAgYmxvY2tXOiAyMjAsICAgICAgIC8vIGJsb2NrIHdpZHRoXG4gICAgICBibG9ja0g6IDExMCwgICAgICAgLy8gYmxvY2sgaGVpZ2h0XG4gICAgICBsOiAzMCwgICAgICAgICAgICAgLy8g5ruR5Z2X6L656ZW/XG4gICAgICByOiA3LCAgICAgICAgICAgICAgLy8g5ruR5Z2X5Y2K5b6EXG4gICAgICBQSTogTWF0aC5QSSwgICAgICAgLy8g5ZyG5ZGo546HXG4gICAgICBMOiA0NywgICAgICAgICAgICAgLy8g5ruR5Z2X5a6e6ZmF6L656ZW/IGwgKyByICogMiArIDNcbiAgICAgIGNhbnZhczogJ2NhbnZhcycsICAvLyDnlLvluINcbiAgICAgIGJsb2NrOiAnYmxvY2snLCAgICAvLyDmu5HlnZdcbiAgICAgIGNhbnZhc0N0eDogT2JqZWN0LCAvLyDnlLvluIMgY2FudmFzIOWunuS+i1xuICAgICAgYmxvY2tDdHg6IE9iamVjdCwgIC8vIOa7keWdlyBjYW52YXMg5a6e5L6LXG4gICAgICBwb3NpdGlvbjogMCwgICAgICAgIC8vIOa7keWdl+a7keWKqOeahHjovbTot53nprtcbiAgICAgIGlzU2hvd1Byb21wdDogdHJ1ZSxcbiAgICAgIHRoaXJkQ3R4OiBPYmplY3QsXG4gICAgICB0aGlyZDogJ3RoaXJkJyxcbiAgICAgIHRoaXJkVzogMjIwLFxuICAgICAgdGhpcmRIOiAxMTAsXG4gICAgfTtcblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBiaW5kU2xpZGVDaGFuZ2UoZSl7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBlLmRldGFpbC54O1xuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgfSxcbiAgICAgIGJpbmRUb3VjaE1vdmUoZSkge1xuICAgICAgICB0aGlzLmlzU2hvd1Byb21wdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgfSxcbiAgICAgIGNyZWF0ZUNhbnZhcyhlKXtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgIHd4LmNhbnZhc1RvVGVtcEZpbGVQYXRoKHtcbiAgICAgICAgICBjYW52YXNJZDogZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuY2FudmFzaWQsXG4gICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgICAgd3guc2F2ZUltYWdlVG9QaG90b3NBbGJ1bSh7XG4gICAgICAgICAgICAgIGZpbGVQYXRoOiByZXMudGVtcEZpbGVQYXRoLFxuICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBmYWlsOiAoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsOiAoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgY2xlYW5DYW52YXMoKXtcbiAgICAgICAgY29uc3QgUEkgPSB0aGlzLlBJLCBsID10aGlzLmwsIHI9IHRoaXMuciwgdz0gdGhpcy5jYW52YXNXLCBoPSB0aGlzLmNhbnZhc0g7XG4gICAgICAgIHRoaXMuY2FudmFzQ3R4LmNsZWFyUmVjdCgwLCAwLCB3LCBoKVxuICAgICAgICB0aGlzLmJsb2NrQ3R4LmNsZWFyUmVjdCgwLCAwLCB3LCBoKVxuICAgICAgICB0aGlzLnRoaXJkQ3R4LmNsZWFyUmVjdCgwLCAwLCB3LCBoKVxuXG4gICAgICAgIHRoaXMuYmxvY2tXID0gd1xuXG4gICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICB9LFxuICAgICAgcmVmcmVzaCgpe1xuICAgICAgICB0aGlzLl9pbml0KCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbXB1dGVkID0ge1xuICAgICAgc2xpZGVEaXN0YW5jZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbjtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgYXN5bmMgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgIGF3YWl0IHRoaXMuX2luaXQoKTtcbiAgICAgIGNvbnNvbGUubG9nKDExMSk7XG4gICAgfVxuXG4gICAgYXN5bmMgX2luaXQoKSB7XG4gICAgICB0aGlzLl9nZXRSYW5kb21JbWdTcmMoKTtcbiAgICAgIHRoaXMuX2luaXRDYW52YXMoKTtcbiAgICAgIGF3YWl0IHRoaXMuX2luaXRJbWcoKTtcbiAgICB9XG4gICAgX2luaXRDYW52YXMoKXtcbiAgICAgIHRoaXMuY2FudmFzQ3R4ID0gdGhpcy5fY3JlYXRlQ2FudmFzKHRoaXMuY2FudmFzKTtcbiAgICAgIHRoaXMuYmxvY2tDdHggPSB0aGlzLl9jcmVhdGVDYW52YXModGhpcy5ibG9jayk7XG4gICAgICB0aGlzLnRoaXJkQ3R4ID0gdGhpcy5fY3JlYXRlQ2FudmFzKHRoaXMudGhpcmQpO1xuICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICB9XG5cbiAgICBfZ2V0UmFuZG9tSW1nU3JjKCkge1xuICAgICAgdGhpcy5pbWdTcmM9Jy8vcGljc3VtLnBob3Rvcy8zMDAvMTUwLz9pbWFnZT0nICsgdGhpcy5fZ2V0UmFuZG9tTnVtYmVyQnlSYW5nZSgwLCAxMDg0KTtcbiAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgfVxuICAgIGFzeW5jIF9pbml0SW1nKCkge1xuICAgICAgdGhpcy5fZHJhdygpO1xuXG4gICAgICBsZXQgdGhhdD0gdGhpcztcbiAgICAgIGNvbnN0IHIgPSB0aGlzLnIsXG4gICAgICAgIHkgPSB0aGlzLnkgLSByICogMiArIDIsXG4gICAgICAgIHggPSB0aGlzLngsXG4gICAgICAgIEwgPSB0aGlzLkwsXG4gICAgICAgIGNhbnZhc0lkPSAnYmxvY2snO1xuXG4gICAgICB0aGlzLmNhbnZhc0N0eC5kcmF3KCk7XG4gICAgICB0aGlzLnRoaXJkQ3R4LmRyYXcoKTtcbiAgICAgIHRoaXMuYmxvY2tDdHguZHJhdyhmYWxzZSwgcmVzID0+IHtcbiAgICAgICAgdGhhdC5fY2FudmFzUHV0SW1hZ2VEYXRhKHt4LCB5LCBMLCBjYW52YXNJZH0pXG4gICAgICB9KTtcblxuICAgIH1cbiAgICBfZHJhdygpIHtcbiAgICAgIGNvbnN0IEw9IHRoaXMuTCxcbiAgICAgICAgciA9IHRoaXMucixcbiAgICAgICAgdyA9IHRoaXMuY2FudmFzVyxcbiAgICAgICAgaD0gdGhpcy5jYW52YXNIO1xuXG4gICAgICB0aGlzLnggPSB0aGlzLl9nZXRSYW5kb21OdW1iZXJCeVJhbmdlKEwgKyAxMCwgdyAtIChMICsgMTApKTtcbiAgICAgIHRoaXMueSA9IHRoaXMuX2dldFJhbmRvbU51bWJlckJ5UmFuZ2UoMTAgKyByICogMiwgaCAtIChMICsgMTApKTtcbiAgICAgIHRoaXMuJGFwcGx5KCk7XG5cbiAgICAgIHRoaXMuX2RyYXdDYW52YXMoe1xuICAgICAgICBjdHg6IHRoaXMuY2FudmFzQ3R4LFxuICAgICAgICB4OiB0aGlzLngsXG4gICAgICAgIHk6IHRoaXMueSxcbiAgICAgICAgaW1nOiB0aGlzLmltZ1NyYyxcbiAgICAgICAgb3BlcmF0aW9uOidmaWxsJ1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuX2RyYXdDYW52YXMoe1xuICAgICAgICBjdHg6IHRoaXMuYmxvY2tDdHgsXG4gICAgICAgIHg6IHRoaXMueCxcbiAgICAgICAgeTogdGhpcy55LFxuICAgICAgICBpbWc6IHRoaXMuaW1nU3JjLFxuICAgICAgICBvcGVyYXRpb246J2NsaXAnLFxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuX2RyYXdDYW52YXMoe1xuICAgICAgICBjdHg6IHRoaXMudGhpcmRDdHgsXG4gICAgICAgIHg6IHRoaXMueCxcbiAgICAgICAgeTogdGhpcy55LFxuICAgICAgICBpbWc6IHRoaXMuaW1nU3JjLFxuICAgICAgICBvcGVyYXRpb246J2NsaXAnLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2RyYXdDYW52YXMoe2N0eCwgeCwgeSwgaW1nLCBvcGVyYXRpb24sIGR4ID0gMCwgZHkgPSAwfSkge1xuICAgICAgY29uc3QgUEkgPSB0aGlzLlBJLCBsID10aGlzLmwsIHI9IHRoaXMuciwgdz0gdGhpcy5jYW52YXNXLCBoPSB0aGlzLmNhbnZhc0g7XG5cbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5tb3ZlVG8oeCwgeSk7XG4gICAgICBjdHguYXJjKHggKyBsIC8gMiwgeSAtIHIgKyAyLCByLCAwLjcyICogUEksIDIuMjYgKiBQSSk7XG4gICAgICBjdHgubGluZVRvKHggKyBsLCB5KTtcbiAgICAgIGN0eC5hcmMoeCArIGwgKyByIC0gMiwgeSArIGwgLyAyLCByLCAxLjIxICogUEksIDIuNzggKiBQSSk7XG4gICAgICBjdHgubGluZVRvKHggKyBsLCB5ICsgbCk7XG4gICAgICBjdHgubGluZVRvKHgsIHkgKyBsKTtcbiAgICAgIGN0eC5hcmMoeCArIHIgLSAyLCB5ICsgbCAvIDIsIHIgKyAwLjQsIDIuNzYgKiBQSSwgMS4yNCAqIFBJLCB0cnVlKTtcbiAgICAgIGN0eC5saW5lVG8oeCwgeSk7XG4gICAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpJztcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyknO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgY3R4W29wZXJhdGlvbl0oKTtcbiAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnb3ZlcmxheSc7XG4gICAgICBjdHguZHJhd0ltYWdlKGltZywgZHgsIGR5LCB3LCBoKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2FudmFzKGlkKSB7XG4gICAgICByZXR1cm4gd3guY3JlYXRlQ2FudmFzQ29udGV4dChpZClcbiAgICB9XG5cbiAgICBfZ2V0UmFuZG9tTnVtYmVyQnlSYW5nZShzdGFydCwgZW5kKSB7XG4gICAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKGVuZCAtIHN0YXJ0KSArIHN0YXJ0KVxuICAgIH1cblxuICAgIF9zdW0oeCwgeSkge1xuICAgICAgcmV0dXJuIHggKyB5XG4gICAgfVxuXG4gICAgX3NxdWFyZSh4KSB7XG4gICAgICByZXR1cm4geCAqIHhcbiAgICB9XG5cbiAgICBfY2FudmFzUHV0SW1hZ2VEYXRhKHt4LHksTCxjYW52YXNJZH0pe1xuICAgICAgbGV0IHRoYXQ9IHRoaXM7XG4gICAgICB3eC5jYW52YXNHZXRJbWFnZURhdGEoe1xuICAgICAgICBjYW52YXNJZDogY2FudmFzSWQsXG4gICAgICAgIHg6IHgsXG4gICAgICAgIHk6IHksXG4gICAgICAgIHdpZHRoOiBMLFxuICAgICAgICBoZWlnaHQ6IEwsXG4gICAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzLCAnZ2V0Jyk7XG4gICAgICAgICAgdGhhdC5ibG9ja1cgPSBMO1xuICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG5cbiAgICAgICAgICB3eC5jYW52YXNQdXRJbWFnZURhdGEoe1xuICAgICAgICAgICAgY2FudmFzSWQ6IGNhbnZhc0lkLFxuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IHksXG4gICAgICAgICAgICB3aWR0aDogTCxcbiAgICAgICAgICAgIGhlaWdodDogTCxcbiAgICAgICAgICAgIGRhdGE6IHJlcy5kYXRhLFxuICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLCAncHV0Jyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmFpbChlKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIGZhaWwoZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cblxuICB9XG4iXX0=