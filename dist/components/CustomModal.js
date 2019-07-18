'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/**
 * @author homastin
 * @date 2019-03-26 09:53
 * @Description: 自定义模态框，普通窗口 侧滑窗口 底部窗口 对话窗口 图片窗口等
 */

var CustomModal = function (_wepy$component) {
  _inherits(CustomModal, _wepy$component);

  function CustomModal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CustomModal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CustomModal.__proto__ || Object.getPrototypeOf(CustomModal)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      /*
      *   position_options :{
      *     '': '默认普通窗口',
      *     'bottom-modal': '底部窗口',
      *     'top-modal': '头部窗口'
      *     'drawer-modal': '侧边抽屉' 需要传一个额外的参数来控制方向 justify-start --> left || justify-end --> right
      *   }
      */
      position: {
        type: String,
        twoWay: true,
        default: ''
      },
      show: {
        type: Boolean,
        twoWay: true,
        default: false
      },
      direction: {
        type: String,
        twoWay: true,
        default: '' // 默认为空值,当position 为left or right 此值需为justify-start or justify-end
      },
      customClass: {
        type: String,
        twoWay: true,
        default: ''
      }
    }, _this.methods = {
      hideModal: function hideModal(e) {
        this.show = false;
        this.$emit('modal-closed', e);
        this.$apply();
      },
      onTap: function onTap(e) {
        this.$emit('modal-clicked', e);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CustomModal, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return CustomModal;
}(_wepy2.default.component);

exports.default = CustomModal;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkN1c3RvbU1vZGFsLmpzIl0sIm5hbWVzIjpbIkN1c3RvbU1vZGFsIiwicHJvcHMiLCJwb3NpdGlvbiIsInR5cGUiLCJTdHJpbmciLCJ0d29XYXkiLCJkZWZhdWx0Iiwic2hvdyIsIkJvb2xlYW4iLCJkaXJlY3Rpb24iLCJjdXN0b21DbGFzcyIsIm1ldGhvZHMiLCJoaWRlTW9kYWwiLCJlIiwiJGVtaXQiLCIkYXBwbHkiLCJvblRhcCIsIndlcHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU9FOzs7Ozs7Ozs7OztBQU5BOzs7Ozs7SUFRcUJBLFc7Ozs7Ozs7Ozs7Ozs7O2dNQUNuQkMsSyxHQUFRO0FBQ047Ozs7Ozs7O0FBUUFDLGdCQUFVO0FBQ1JDLGNBQU1DLE1BREU7QUFFUkMsZ0JBQVEsSUFGQTtBQUdSQyxpQkFBUztBQUhELE9BVEo7QUFjTkMsWUFBTTtBQUNKSixjQUFNSyxPQURGO0FBRUpILGdCQUFRLElBRko7QUFHSkMsaUJBQVM7QUFITCxPQWRBO0FBbUJORyxpQkFBVztBQUNUTixjQUFNQyxNQURHO0FBRVRDLGdCQUFRLElBRkM7QUFHVEMsaUJBQVMsRUFIQSxDQUdPO0FBSFAsT0FuQkw7QUF3Qk5JLG1CQUFhO0FBQ1hQLGNBQU1DLE1BREs7QUFFWEMsZ0JBQVEsSUFGRztBQUdYQyxpQkFBUztBQUhFO0FBeEJQLEssUUErQlJLLE8sR0FBVTtBQUNSQyxlQURRLHFCQUNFQyxDQURGLEVBQ0s7QUFDWCxhQUFLTixJQUFMLEdBQVksS0FBWjtBQUNBLGFBQUtPLEtBQUwsQ0FBVyxjQUFYLEVBQTJCRCxDQUEzQjtBQUNBLGFBQUtFLE1BQUw7QUFDRCxPQUxPO0FBTVJDLFdBTlEsaUJBTUZILENBTkUsRUFNQztBQUNQLGFBQUtDLEtBQUwsQ0FBVyxlQUFYLEVBQTRCRCxDQUE1QjtBQUNEO0FBUk8sSzs7Ozs7NkJBV0QsQ0FFUjs7OztFQTdDc0NJLGVBQUtDLFM7O2tCQUF6QmxCLFciLCJmaWxlIjoiQ3VzdG9tTW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgLyoqXG4gICAqIEBhdXRob3IgaG9tYXN0aW5cbiAgICogQGRhdGUgMjAxOS0wMy0yNiAwOTo1M1xuICAgKiBARGVzY3JpcHRpb246IOiHquWumuS5ieaooeaAgeahhu+8jOaZrumAmueql+WPoyDkvqfmu5Hnqpflj6Mg5bqV6YOo56qX5Y+jIOWvueivneeql+WPoyDlm77niYfnqpflj6PnrYlcbiAgICovXG5cbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21Nb2RhbCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBwcm9wcyA9IHtcbiAgICAgIC8qXG4gICAgICAqICAgcG9zaXRpb25fb3B0aW9ucyA6e1xuICAgICAgKiAgICAgJyc6ICfpu5jorqTmma7pgJrnqpflj6MnLFxuICAgICAgKiAgICAgJ2JvdHRvbS1tb2RhbCc6ICflupXpg6jnqpflj6MnLFxuICAgICAgKiAgICAgJ3RvcC1tb2RhbCc6ICflpLTpg6jnqpflj6MnXG4gICAgICAqICAgICAnZHJhd2VyLW1vZGFsJzogJ+S+p+i+ueaKveWxiScg6ZyA6KaB5Lyg5LiA5Liq6aKd5aSW55qE5Y+C5pWw5p2l5o6n5Yi25pa55ZCRIGp1c3RpZnktc3RhcnQgLS0+IGxlZnQgfHwganVzdGlmeS1lbmQgLS0+IHJpZ2h0XG4gICAgICAqICAgfVxuICAgICAgKi9cbiAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdHdvV2F5OiB0cnVlLFxuICAgICAgICBkZWZhdWx0OiAnJ1xuICAgICAgfSxcbiAgICAgIHNob3c6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdHdvV2F5OiB0cnVlLFxuICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgfSxcbiAgICAgIGRpcmVjdGlvbjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHR3b1dheTogdHJ1ZSxcbiAgICAgICAgZGVmYXVsdDogJycgICAgIC8vIOm7mOiupOS4uuepuuWAvCzlvZNwb3NpdGlvbiDkuLpsZWZ0IG9yIHJpZ2h0IOatpOWAvOmcgOS4ump1c3RpZnktc3RhcnQgb3IganVzdGlmeS1lbmRcbiAgICAgIH0sXG4gICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHR3b1dheTogdHJ1ZSxcbiAgICAgICAgZGVmYXVsdDogJydcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgaGlkZU1vZGFsKGUpIHtcbiAgICAgICAgdGhpcy5zaG93ID0gZmFsc2VcbiAgICAgICAgdGhpcy4kZW1pdCgnbW9kYWwtY2xvc2VkJywgZSlcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfSxcbiAgICAgIG9uVGFwKGUpIHtcbiAgICAgICAgdGhpcy4kZW1pdCgnbW9kYWwtY2xpY2tlZCcsIGUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuXG4gICAgfVxuICB9XG4iXX0=