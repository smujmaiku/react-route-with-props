"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/*!
 * React Route With Props <https://github.com/smujmaiku/react-route-with-props>
 * Copyright(c) 2019 Michael Szmadzinski
 * MIT Licensed
 */
var React = require('react');

var _require = require('react-router-dom'),
    Route = _require.Route;

var PropTypes = require('prop-types');

var makeRoute = function makeRoute(props) {
  var RouteWithProps = function RouteWithProps(_ref) {
    var Component = _ref.Component,
        routeProps = _objectWithoutProperties(_ref, ["Component"]);

    return React.createElement(Route, _extends({
      component: function component(_ref2) {
        var location = _ref2.location,
            match = _ref2.match,
            history = _ref2.history;
        return React.createElement(Component, _extends({
          location: location,
          match: match,
          history: history
        }, props));
      }
    }, routeProps));
  };

  RouteWithProps.propTypes = {
    Component: PropTypes.any.isRequired
  };
  return RouteWithProps;
};

exports = module.exports = makeRoute;
