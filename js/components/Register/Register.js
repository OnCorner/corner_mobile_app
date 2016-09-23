// @flow
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native'
import { Actions } from 'react-native-router-flux'

import InputNormal from '../../elements/InputNormal'

export default class Register extends Component {
  constructor() {
    super();

    this._handleUsername = this._handleUsername.bind(this)
    this._handleEmail = this._handleEmail.bind(this)
    this._handleFirstName = this._handleFirstName.bind(this)
    this._handleLastName = this._handleLastName.bind(this)
    this._handlePassword = this._handlePassword.bind(this)
    this._handleRegisterUser = this._handleRegisterUser.bind(this)
  }

  _handleUsername(text) {
    this.props.updateRegisterUsername(text)
    // this.props.updateLoginUsername(text)
  }

  _handleEmail(text) {
    this.props.updateRegisterEmail(text)
  }

  _handleFirstName(text) {
    this.props.updateRegisterFirstName(text)
  }

  _handleLastName(text) {
    this.props.updateRegisterLastName(text)
  }

  _handlePassword(text) {
    this.props.updateRegisterPassword(text)
  }

  _handleRegisterUser() {
    // this.props.registerUser()
    const { newUsername, newEmail, newFirstName, newLastName, newPassword } = this.props

    registerInfo = {
      username: newUsername,
      email: newEmail,
      firstName: newFirstName,
      lastName: newLastName,
      password: newPassword
    }

    this.props.registerUser(registerInfo)
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.registerSheet}>
          <InputNormal
            onChangeText={this._handleUsername}
            placeholder='Username'
            value={this.props.newUsername}
          />
          <InputNormal
            onChangeText={this._handleEmail}
            placeholder='Email'
            value={this.props.newEmail}
          />
          <InputNormal
            onChangeText={this._handleFirstName}
            placeholder='First Name'
            value={this.props.newFirstName}
          />
          <InputNormal
            onChangeText={this._handleLastName}
            placeholder='Last Name'
            value={this.props.newLastName}
          />
          <InputNormal
            onChangeText={this._handlePassword}
            placeholder='Password'
            secureTextEntry={true}
            value={this.props.newPassword}
          />
          <TouchableHighlight onPress={this._handleRegisterUser}>
            <Text style={styles.button}>Continue</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    color: '#999999',
    fontSize: 17.2
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  registerSheet: {
    marginLeft: 78,
    marginTop: 83
  },
});

//Styling todo
//Shorten button width
//No ... in text input
