'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
} from 'react-native';

class InputRow extends Component {
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
        onChangeText={pr.onChangeText}
        placeholderTextColor={pr.placeholderTextColor ? pr.placeholderTextColor : '#AAAAAA'}
        placeholder={pr.placeholder}
        secureTextEntry={pr.secureTextEntry ? pr.secureTextEntry : false}
        style={[{
          color: '#D8D8D8',
          fontSize: 15,
          height: 16.3,
          textAlign: 'right',
          flex: 3,
        }, style]}
        value={value}
      />
    );
  }
}

export default InputRow
