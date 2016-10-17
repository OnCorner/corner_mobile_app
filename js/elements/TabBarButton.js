// @flow

const React = require('react');
const ReactNative = require('react-native');
const {
 TouchableOpacity,
  View,
} = ReactNative;

const TabBarButton = (props) => {
  return <TouchableOpacity {...props}>
    {props.children}
  </TouchableOpacity>;
}

module.exports = TabBarButton;
