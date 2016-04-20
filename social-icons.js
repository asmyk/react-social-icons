'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _socialIcon = require('./social-icon');

var _socialIcon2 = _interopRequireDefault(_socialIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function makeRenderIcon(color, className) {
  return function () {
    function renderIcon(url, i) {
      return _react2['default'].createElement(_socialIcon2['default'], { key: i, url: url, color: color, className: className });
    }

    return renderIcon;
  }();
}

function SocialIcons(_ref) {
  var urls = _ref.urls;
  var color = _ref.color;
  var className = _ref.className;
  var rest = (0, _objectWithoutProperties3['default'])(_ref, ['urls', 'color', 'className']);

  return _react2['default'].createElement(
    'div',
    rest,
    urls.map(makeRenderIcon(color, className))
  );
}

SocialIcons.defaultProps = {
  urls: []
};

SocialIcons.propTypes = {
  className: _react.PropTypes.string,
  color: _react.PropTypes.string,
  urls: _react.PropTypes.arrayOf(_react.PropTypes.string)
};

exports['default'] = SocialIcons;