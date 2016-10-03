'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
} from 'react-native';

export default class InputBox extends Component {
  static propTypes = {
    keyboardType: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    onChangeText: React.PropTypes.func,
    secureTextEntry: React.PropTypes.bool,
    style: React.PropTypes.object,
  }

  render() {
    var pr = this.props;
    var style = pr.style;
    var value = pr.value

    return (
      <TextInput
        autoCorrect={false}
        keyboardType={pr.keyboardType ? pr.keyboardType : 'default'}
        multiline={true}
        onChangeText={pr.onChangeText}
        placeholderTextColor='#AAAAAA'
        placeholder={pr.placeholder}
        secureTextEntry={pr.secureTextEntry ? pr.secureTextEntry : false}
        style={[{
          color: '#D8D8D8',
          flex: 1,
          fontSize: 15,
          height: 50,
          marginBottom: 15,
          marginTop: 15,
        }, style]}
        value={value}
      />
    );
  }
}
