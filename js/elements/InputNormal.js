'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
} from 'react-native';

class InputNormal extends Component {
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
        autoCapitalize={pr.autoCapitalize ? pr.autoCapitalize : 'none'}
        onChangeText={pr.onChangeText}
        placeholderStyle={{fontWeight: 'bold'}}
        placeholderTextColor='#999999'
        placeholder={pr.placeholder}
        secureTextEntry={pr.secureTextEntry ? pr.secureTextEntry : false}
        style={{fontWeight: 'bold', height: 20.5, color: '#999999', width: 100}}
        value={value}
      />
    );
  }
}

export default InputNormal
