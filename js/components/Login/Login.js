// @flow
import React, { Component } from 'react'
import {
  Text,
  TouchableHighlight,
  View,
} from 'react-native'
import { Actions } from 'react-native-router-flux'

import InputNormal from '../../elements/InputNormal'

export default class Login extends Component {
  constructor() {
    super();

    this._handleCurrentUsername = this._handleCurrentUsername.bind(this);
  }

  _handleCurrentUsername(text) {
    this.props.updateUsername(text)
  }

  render() {
    console.log(this.props)

    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>
          {this.props.username}
        </Text>
        <InputNormal
          placeholder='Username'
          onChangeText={this._handleCurrentUsername}
          value={this.props.username}
        />
        <TouchableHighlight onPress={Actions.register}>
          <Text style={{color: '#999999', fontSize: 17.2}}>
            Register
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}
