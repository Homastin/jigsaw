'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _CustomModal = require('./../components/CustomModal.js');

var _CustomModal2 = _interopRequireDefault(_CustomModal);

var _helper = require('./../utils/helper.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/* import jigsawWxs from '../wxs/jigsaw.wxs'; */


var Result = function (_wepy$page) {
  _inherits(Result, _wepy$page);

  function Result() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Result);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Result.__proto__ || Object.getPrototypeOf(Result)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      /* ====== 滑动验证 start======= */
      jigsawModalPosition: '',
      isJigsawModal: false,
      uniqueClass: 'jigsaw-container',
      imgSrcObj: {},
      xPosition: 0,
      slideState: '', // 滑动中 sliding 滑动结束 slideEnd err success
      slideIcon: 'iconyoujiantou',
      slideMsg: '',
      scrollY: true,
      isShowPrompt: true,
      isShowChatMsgFake: false
      /* ====== 滑动验证 end======= */
    }, _this.methods = {
      showModal: function showModal() {
        this.isJigsawModal = true;
        this.$apply();

        this._reset();
      },

      /*====滑动验证 start====*/
      bindTouchstart: function bindTouchstart(e) {
        console.log(e, 'startX');
        this.slideState = 'focus';
        this.isShowPrompt = false;
        this.$apply();
      },
      bindTouchEnd: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
          var _this2 = this;

          var targetX, currentX;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  targetX = this.imgSrcObj.x;
                  currentX = e.left;


                  if (this._computeVerifyRes(targetX, currentX)) {
                    this.slideMsg = '验证成功';
                    this.slideIcon = 'icongouhao';
                    this.slideState = 'success';
                    this.$apply();

                    setTimeout(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                      return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              _context.next = 2;
                              return _this2._handleJigsawRes();

                            case 2:
                            case 'end':
                              return _context.stop();
                          }
                        }
                      }, _callee, _this2);
                    })), 800);
                  } else {
                    this.slideIcon = 'iconchahao';
                    this.slideState = 'error';
                    this.slideMsg = '验证失败';
                    this.$apply();

                    setTimeout(function (e) {
                      _this2._reset();
                    }, 1500);
                  }

                case 3:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function bindTouchEnd(_x) {
          return _ref2.apply(this, arguments);
        }

        return bindTouchEnd;
      }(),
      refresh: function refresh() {
        this._reset();
      }
      /*======滑动验证 end=======*/

    }

    /*  wxs =  */ /* {
                  jigsawWxs
                  } */, _this.$repeat = {}, _this.$props = { "JigsawModal": { "xmlns:v-bind": "", "v-bind:position.sync": "jigsawModalPosition", "v-bind:show.sync": "isJigsawModal", "v-bind:customClass.sync": "uniqueClass" } }, _this.$events = {}, _this.components = {
      JigsawModal: _CustomModal2.default
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Result, [{
    key: '_showSlideModal',


    /*====滑动验证 start====*/
    value: function _showSlideModal() {
      // 展示 滑块窗口 并初始化
      this.isJigsawModal = true;
      this.$apply();

      this._reset();
    }
  }, {
    key: '_getRandomImgSrc',
    value: function _getRandomImgSrc() {
      var randomNo = Math.floor(Math.random() * 10);

      this.imgSrcObj = _helper.jigsawArr[randomNo];
      this.$apply();
    }
  }, {
    key: '_computeVerifyRes',
    value: function _computeVerifyRes(target, current) {
      return target - 5 < current && current < target + 5;
    }
  }, {
    key: '_reset',
    value: function _reset() {
      this._getRandomImgSrc();

      this.setData({
        xPosition: 0
      });

      this.slideState = ''; // 滑动中 sliding 滑动结束 slideEnd err success
      this.slideIcon = 'iconyoujiantou';
      this.slideMsg = '';
      this.$apply();
    }
  }, {
    key: '_handleJigsawRes',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // 处理滑块验证的结果

                this.isJigsawModal = false;
                this.$apply();

              case 2:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function _handleJigsawRes(_x2) {
        return _ref4.apply(this, arguments);
      }

      return _handleJigsawRes;
    }()

    /*======滑动验证 end=======*/

  }]);

  return Result;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Result , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlJlc3VsdCIsImRhdGEiLCJqaWdzYXdNb2RhbFBvc2l0aW9uIiwiaXNKaWdzYXdNb2RhbCIsInVuaXF1ZUNsYXNzIiwiaW1nU3JjT2JqIiwieFBvc2l0aW9uIiwic2xpZGVTdGF0ZSIsInNsaWRlSWNvbiIsInNsaWRlTXNnIiwic2Nyb2xsWSIsImlzU2hvd1Byb21wdCIsImlzU2hvd0NoYXRNc2dGYWtlIiwibWV0aG9kcyIsInNob3dNb2RhbCIsIiRhcHBseSIsIl9yZXNldCIsImJpbmRUb3VjaHN0YXJ0IiwiZSIsImNvbnNvbGUiLCJsb2ciLCJiaW5kVG91Y2hFbmQiLCJ0YXJnZXRYIiwieCIsImN1cnJlbnRYIiwibGVmdCIsIl9jb21wdXRlVmVyaWZ5UmVzIiwic2V0VGltZW91dCIsIl9oYW5kbGVKaWdzYXdSZXMiLCJyZWZyZXNoIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiSmlnc2F3TW9kYWwiLCJDdXN0b21Nb2RhbCIsInJhbmRvbU5vIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiamlnc2F3QXJyIiwidGFyZ2V0IiwiY3VycmVudCIsIl9nZXRSYW5kb21JbWdTcmMiLCJzZXREYXRhIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7Ozs7Ozs7QUFEQTs7O0lBR3FCQSxNOzs7Ozs7Ozs7Ozs7OztzTEFFbkJDLEksR0FBTztBQUNMO0FBQ0FDLDJCQUFxQixFQUZoQjtBQUdMQyxxQkFBZSxLQUhWO0FBSUxDLG1CQUFhLGtCQUpSO0FBS0xDLGlCQUFXLEVBTE47QUFNTEMsaUJBQVcsQ0FOTjtBQU9MQyxrQkFBWSxFQVBQLEVBT1c7QUFDaEJDLGlCQUFXLGdCQVJOO0FBU0xDLGdCQUFVLEVBVEw7QUFVTEMsZUFBUyxJQVZKO0FBV0xDLG9CQUFhLElBWFI7QUFZTEMseUJBQW1CO0FBQ25CO0FBYkssSyxRQWdCUEMsTyxH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cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgQ3VzdG9tTW9kYWwgZnJvbSAnQC9jb21wb25lbnRzL0N1c3RvbU1vZGFsJztcbiAgLyogaW1wb3J0IGppZ3Nhd1d4cyBmcm9tICcuLi93eHMvamlnc2F3Lnd4cyc7ICovXG4gIGltcG9ydCB7IGppZ3Nhd0FyciB9IGZyb20gJ0AvdXRpbHMvaGVscGVyJztcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBSZXN1bHQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuXG4gICAgZGF0YSA9IHtcbiAgICAgIC8qID09PT09PSDmu5Hliqjpqozor4Egc3RhcnQ9PT09PT09ICovXG4gICAgICBqaWdzYXdNb2RhbFBvc2l0aW9uOiAnJyxcbiAgICAgIGlzSmlnc2F3TW9kYWw6IGZhbHNlLFxuICAgICAgdW5pcXVlQ2xhc3M6ICdqaWdzYXctY29udGFpbmVyJyxcbiAgICAgIGltZ1NyY09iajoge30sXG4gICAgICB4UG9zaXRpb246IDAsXG4gICAgICBzbGlkZVN0YXRlOiAnJywgLy8g5ruR5Yqo5LitIHNsaWRpbmcg5ruR5Yqo57uT5p2fIHNsaWRlRW5kIGVyciBzdWNjZXNzXG4gICAgICBzbGlkZUljb246ICdpY29ueW91amlhbnRvdScsXG4gICAgICBzbGlkZU1zZzogJycsXG4gICAgICBzY3JvbGxZOiB0cnVlLFxuICAgICAgaXNTaG93UHJvbXB0OnRydWUsXG4gICAgICBpc1Nob3dDaGF0TXNnRmFrZTogZmFsc2VcbiAgICAgIC8qID09PT09PSDmu5Hliqjpqozor4EgZW5kPT09PT09PSAqL1xuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBzaG93TW9kYWwoKXtcbiAgICAgICAgdGhpcy5pc0ppZ3Nhd01vZGFsID0gdHJ1ZTtcbiAgICAgICAgdGhpcy4kYXBwbHkoKTtcblxuICAgICAgICB0aGlzLl9yZXNldCgpO1xuICAgICAgfSxcbiAgICAgIC8qPT09Pea7keWKqOmqjOivgSBzdGFydD09PT0qL1xuICAgICAgYmluZFRvdWNoc3RhcnQoZSl7XG4gICAgICAgIGNvbnNvbGUubG9nKGUsJ3N0YXJ0WCcpO1xuICAgICAgICB0aGlzLnNsaWRlU3RhdGUgPSAnZm9jdXMnO1xuICAgICAgICB0aGlzLmlzU2hvd1Byb21wdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgfSxcbiAgICAgIGFzeW5jIGJpbmRUb3VjaEVuZChlKXtcbiAgICAgICAgY29uc3QgdGFyZ2V0WCA9IHRoaXMuaW1nU3JjT2JqLng7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRYID0gZS5sZWZ0O1xuXG4gICAgICAgIGlmKHRoaXMuX2NvbXB1dGVWZXJpZnlSZXModGFyZ2V0WCwgY3VycmVudFgpKXtcbiAgICAgICAgICB0aGlzLnNsaWRlTXNnID0gJ+mqjOivgeaIkOWKnyc7XG4gICAgICAgICAgdGhpcy5zbGlkZUljb24gPSAnaWNvbmdvdWhhbyc7XG4gICAgICAgICAgdGhpcy5zbGlkZVN0YXRlID0gJ3N1Y2Nlc3MnO1xuICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG5cbiAgICAgICAgICBzZXRUaW1lb3V0KCBhc3luYyAoKT0+IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX2hhbmRsZUppZ3Nhd1JlcygpO1xuICAgICAgICAgIH0sODAwKVxuXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIHRoaXMuc2xpZGVJY29uID0gJ2ljb25jaGFoYW8nO1xuICAgICAgICAgIHRoaXMuc2xpZGVTdGF0ZSA9ICdlcnJvcic7XG4gICAgICAgICAgdGhpcy5zbGlkZU1zZyA9ICfpqozor4HlpLHotKUnO1xuICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG5cbiAgICAgICAgICBzZXRUaW1lb3V0KGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5fcmVzZXQoKTtcbiAgICAgICAgICB9LCAxNTAwKVxuICAgICAgICB9XG5cbiAgICAgIH0sXG4gICAgICByZWZyZXNoKCl7XG4gICAgICAgIHRoaXMuX3Jlc2V0KCk7XG4gICAgICB9XG4gICAgICAvKj09PT09Pea7keWKqOmqjOivgSBlbmQ9PT09PT09Ki9cbiAgICB9XG5cbiAgIC8qICB3eHMgPSAgKi8vKiB7XG4gICAgICBqaWdzYXdXeHNcbiAgICB9ICovO1xuXG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIkppZ3Nhd01vZGFsXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpwb3NpdGlvbi5zeW5jXCI6XCJqaWdzYXdNb2RhbFBvc2l0aW9uXCIsXCJ2LWJpbmQ6c2hvdy5zeW5jXCI6XCJpc0ppZ3Nhd01vZGFsXCIsXCJ2LWJpbmQ6Y3VzdG9tQ2xhc3Muc3luY1wiOlwidW5pcXVlQ2xhc3NcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgSmlnc2F3TW9kYWw6IEN1c3RvbU1vZGFsXG4gICAgfTtcblxuICAgIC8qPT09Pea7keWKqOmqjOivgSBzdGFydD09PT0qL1xuICAgIF9zaG93U2xpZGVNb2RhbCgpIHsgICAgLy8g5bGV56S6IOa7keWdl+eql+WPoyDlubbliJ3lp4vljJZcbiAgICAgIHRoaXMuaXNKaWdzYXdNb2RhbCA9IHRydWU7XG4gICAgICB0aGlzLiRhcHBseSgpO1xuXG4gICAgICB0aGlzLl9yZXNldCgpO1xuICAgIH1cbiAgICBfZ2V0UmFuZG9tSW1nU3JjKCkge1xuICAgICAgY29uc3QgcmFuZG9tTm8gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG5cbiAgICAgIHRoaXMuaW1nU3JjT2JqID0gamlnc2F3QXJyW3JhbmRvbU5vXTtcbiAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgfVxuICAgIF9jb21wdXRlVmVyaWZ5UmVzKHRhcmdldCwgY3VycmVudCkge1xuICAgICAgcmV0dXJuIHRhcmdldCAtIDUgPCBjdXJyZW50ICYmIGN1cnJlbnQgPCB0YXJnZXQgKyA1O1xuICAgIH1cbiAgICBfcmVzZXQoKSB7XG4gICAgICB0aGlzLl9nZXRSYW5kb21JbWdTcmMoKTtcblxuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgeFBvc2l0aW9uOiAwXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5zbGlkZVN0YXRlID0gJyc7IC8vIOa7keWKqOS4rSBzbGlkaW5nIOa7keWKqOe7k+adnyBzbGlkZUVuZCBlcnIgc3VjY2Vzc1xuICAgICAgdGhpcy5zbGlkZUljb24gPSAnaWNvbnlvdWppYW50b3UnO1xuICAgICAgdGhpcy5zbGlkZU1zZyA9ICcnO1xuICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICB9XG4gICAgYXN5bmMgX2hhbmRsZUppZ3Nhd1JlcyhlKSB7ICAgLy8g5aSE55CG5ruR5Z2X6aqM6K+B55qE57uT5p6cXG5cbiAgICAgIHRoaXMuaXNKaWdzYXdNb2RhbCA9IGZhbHNlO1xuICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICB9XG5cbiAgICAvKj09PT09Pea7keWKqOmqjOivgSBlbmQ9PT09PT09Ki9cbiAgfVxuXG4iXX0=