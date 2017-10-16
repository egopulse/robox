'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _understyle = require('understyle');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_react2.default.PropTypes = _propTypes2.default;

var Robox = function Robox(Comp) {
  var WrappedComponent = function (_React$Component) {
    _inherits(WrappedComponent, _React$Component);

    function WrappedComponent() {
      _classCallCheck(this, WrappedComponent);

      return _possibleConstructorReturn(this, (WrappedComponent.__proto__ || Object.getPrototypeOf(WrappedComponent)).apply(this, arguments));
    }

    _createClass(WrappedComponent, [{
      key: 'render',
      value: function render() {
        var config = this.context.robox;

        var _props = this.props,
            p = _props.p,
            pt = _props.pt,
            pr = _props.pr,
            pb = _props.pb,
            pl = _props.pl,
            px = _props.px,
            py = _props.py,
            m = _props.m,
            mt = _props.mt,
            mr = _props.mr,
            mb = _props.mb,
            ml = _props.ml,
            mx = _props.mx,
            my = _props.my,
            gutter = _props.gutter,
            col = _props.col,
            block = _props.block,
            inlineBlock = _props.inlineBlock,
            inline = _props.inline,
            table = _props.table,
            tableRow = _props.tableRow,
            tableCell = _props.tableCell,
            flex = _props.flex,
            inlineFlex = _props.inlineFlex,
            wrap = _props.wrap,
            flexColumn = _props.flexColumn,
            align = _props.align,
            justify = _props.justify,
            flexAuto = _props.flexAuto,
            flexNone = _props.flexNone,
            order = _props.order,
            style = _props.style,
            props = _objectWithoutProperties(_props, ['p', 'pt', 'pr', 'pb', 'pl', 'px', 'py', 'm', 'mt', 'mr', 'mb', 'ml', 'mx', 'my', 'gutter', 'col', 'block', 'inlineBlock', 'inline', 'table', 'tableRow', 'tableCell', 'flex', 'inlineFlex', 'wrap', 'flexColumn', 'align', 'justify', 'flexAuto', 'flexNone', 'order', 'style']);

        var _style = (0, _understyle.createUnderstyle)(config);

        var styleProps = {
          p: p, pt: pt, pr: pr, pb: pb, pl: pl, px: px, py: py,
          m: m, mt: mt, mr: mr, mb: mb, ml: ml, mx: mx, my: my,
          gutter: gutter,
          col: col,
          block: block,
          inlineBlock: inlineBlock,
          inline: inline,
          table: table,
          tableRow: tableRow,
          tableCell: tableCell,
          flex: flex,
          inlineFlex: inlineFlex,
          wrap: wrap,
          flexColumn: flexColumn,
          align: align,
          justify: justify,
          flexAuto: flexAuto,
          flexNone: flexNone,
          order: order
        };

        var sx = _extends({
          boxSizing: 'border-box'
        }, _style(styleProps), style);

        return _react2.default.createElement(Comp, _extends({}, props, { style: sx }));
      }
    }]);

    return WrappedComponent;
  }(_react2.default.Component);

  WrappedComponent.contextTypes = {
    robox: _react2.default.PropTypes.shape({
      scale: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.number),
      columns: _react2.default.PropTypes.number
    })
  };

  var spaceScale = [0, 1, 2, 3, 4, 5, 6];

  WrappedComponent.propTypes = {
    m: _react2.default.PropTypes.oneOf(spaceScale),
    mt: _react2.default.PropTypes.oneOf(spaceScale),
    mr: _react2.default.PropTypes.oneOf(spaceScale),
    mb: _react2.default.PropTypes.oneOf(spaceScale),
    ml: _react2.default.PropTypes.oneOf(spaceScale),
    mx: _react2.default.PropTypes.oneOf(spaceScale),
    my: _react2.default.PropTypes.oneOf(spaceScale),
    gutter: _react2.default.PropTypes.oneOf(spaceScale),
    p: _react2.default.PropTypes.oneOf(spaceScale),
    pt: _react2.default.PropTypes.oneOf(spaceScale),
    pr: _react2.default.PropTypes.oneOf(spaceScale),
    pb: _react2.default.PropTypes.oneOf(spaceScale),
    pl: _react2.default.PropTypes.oneOf(spaceScale),
    px: _react2.default.PropTypes.oneOf(spaceScale),
    py: _react2.default.PropTypes.oneOf(spaceScale),
    col: _react2.default.PropTypes.number,
    block: _react2.default.PropTypes.bool,
    inlineBlock: _react2.default.PropTypes.bool,
    inline: _react2.default.PropTypes.bool,
    table: _react2.default.PropTypes.bool,
    tableRow: _react2.default.PropTypes.bool,
    tableCell: _react2.default.PropTypes.bool,
    flex: _react2.default.PropTypes.bool,
    inlineFlex: _react2.default.PropTypes.bool,
    wrap: _react2.default.PropTypes.bool,
    flexColumn: _react2.default.PropTypes.bool,
    align: _react2.default.PropTypes.oneOf(['flex-start', 'flex-end', 'baseline', 'center', 'stretch']),
    justify: _react2.default.PropTypes.oneOf(['flex-start', 'flex-end', 'space-between', 'space-around', 'center']),
    flexAuto: _react2.default.PropTypes.bool,
    flexNone: _react2.default.PropTypes.bool,
    order: _react2.default.PropTypes.number,

    // Warn against legacy prop name
    column: function column(props, propName, componentName) {
      if (props[propName]) {
        return new Error('Warning! Invalid prop `' + propName + '` supplied to' + ' `' + componentName + '`. Use the `column` prop instead.');
      }
    }
  };

  return WrappedComponent;
};

exports.default = Robox;