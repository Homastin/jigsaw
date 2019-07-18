'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/index', 'pages/canvas'],
      tabBar: {
        "list": [{
          "pagePath": "pages/index",
          "text": "image",
          "iconPath": './assets/images/image.png',
          "selectedIconPath": './assets/images/image_active.png'
        }, {
          "pagePath": "pages/canvas",
          "text": "canvas",
          "iconPath": './assets/images/canvas.png',
          "selectedIconPath": './assets/images/canvas_active.png'
        }]
      },
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
      }
    };

    _this.use('promisify');
    _this.use('requestfix');
    return _this;
  }

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));
require('./_wepylogs.js')

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsInRhYkJhciIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJ1c2UiLCJ3ZXB5IiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7OztBQThCRSxzQkFBZTtBQUFBOztBQUFBOztBQUFBLFVBMUJmQSxNQTBCZSxHQTFCTjtBQUNQQyxhQUFPLENBQ0wsYUFESyxFQUVMLGNBRkssQ0FEQTtBQUtQQyxjQUFRO0FBQ04sZ0JBQVEsQ0FBQztBQUNQLHNCQUFZLGFBREw7QUFFUCxrQkFBUSxPQUZEO0FBR1Asc0JBQVksMkJBSEw7QUFJUCw4QkFBcUI7QUFKZCxTQUFELEVBS0w7QUFDRCxzQkFBWSxjQURYO0FBRUQsa0JBQVEsUUFGUDtBQUdELHNCQUFZLDRCQUhYO0FBSUQsOEJBQXFCO0FBSnBCLFNBTEs7QUFERixPQUxEO0FBa0JQQyxjQUFRO0FBQ05DLDZCQUFxQixPQURmO0FBRU5DLHNDQUE4QixNQUZ4QjtBQUdOQyxnQ0FBd0IsUUFIbEI7QUFJTkMsZ0NBQXdCO0FBSmxCO0FBbEJELEtBMEJNOztBQUViLFVBQUtDLEdBQUwsQ0FBUyxXQUFUO0FBQ0EsVUFBS0EsR0FBTCxDQUFTLFlBQVQ7QUFIYTtBQUlkOzs7RUEvQjBCQyxlQUFLQyxHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcbiAgY29uZmlnID0ge1xuICAgIHBhZ2VzOiBbXG4gICAgICAncGFnZXMvaW5kZXgnLFxuICAgICAgJ3BhZ2VzL2NhbnZhcydcbiAgICBdLFxuICAgIHRhYkJhcjoge1xuICAgICAgXCJsaXN0XCI6IFt7XG4gICAgICAgIFwicGFnZVBhdGhcIjogXCJwYWdlcy9pbmRleFwiLFxuICAgICAgICBcInRleHRcIjogXCJpbWFnZVwiLFxuICAgICAgICBcImljb25QYXRoXCI6ICcuL2Fzc2V0cy9pbWFnZXMvaW1hZ2UucG5nJyxcbiAgICAgICAgXCJzZWxlY3RlZEljb25QYXRoXCIgOiAnLi9hc3NldHMvaW1hZ2VzL2ltYWdlX2FjdGl2ZS5wbmcnXG4gICAgICB9LCB7XG4gICAgICAgIFwicGFnZVBhdGhcIjogXCJwYWdlcy9jYW52YXNcIixcbiAgICAgICAgXCJ0ZXh0XCI6IFwiY2FudmFzXCIsXG4gICAgICAgIFwiaWNvblBhdGhcIjogJy4vYXNzZXRzL2ltYWdlcy9jYW52YXMucG5nJyxcbiAgICAgICAgXCJzZWxlY3RlZEljb25QYXRoXCIgOiAnLi9hc3NldHMvaW1hZ2VzL2NhbnZhc19hY3RpdmUucG5nJ1xuICAgICAgfV1cbiAgICB9LFxuICAgIHdpbmRvdzoge1xuICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2xpZ2h0JyxcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdXZUNoYXQnLFxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ2JsYWNrJ1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy51c2UoJ3Byb21pc2lmeScpXG4gICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKVxuICB9XG5cbn1cbiJdfQ==