// @flow
import React, { Component } from 'react'
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native'
import { Actions } from 'react-native-router-flux'
// import s from '../../../public/assets/style/global'
// style={s.text1}
import InputNormal from '../../elements/InputNormal'

export default class Login extends Component {
  constructor() {
    super()

    this.state = {
      isPendingSession: true
    }

    this._handleUsername = this._handleUsername.bind(this);
    this._handlePassword = this._handlePassword.bind(this);
    this._handleLoginUser = this._handleLoginUser.bind(this);
  }

  componentWillMount() {
    this.props.checkSession()
    .then((success) => {
      if(success) {
        Actions.drawer()
      } else {
        this.setState({isPendingSession: false});
      }
    })
  }

  _handleUsername(text) {
    this.props.updateLoginUsername(text)
  }

  _handlePassword(text) {
    this.props.updateLoginPassword(text)
  }

  _handleLoginUser() {
    const { username, password } = this.props

    loginInfo = {
      username: username,
      password: password
    }

    this.props.loginUser(loginInfo)
  }

  render() {
    if(this.state.isPendingSession) {
      return (
        <View style={styles.splashPage}></View>
      );
    } else {
      return (
        <Image
          source={require('../../../public/assets/img/background.png')}
          style={styles.backgroundImg}
        >
          <View style={styles.container}>
            <InputNormal
              onChangeText={this._handleUsername}
              placeholder='Username'
              value={this.props.username}
            />
            <InputNormal
              onChangeText={this._handlePassword}
              placeholder='Password'
              secureTextEntry={true}
              value={this.props.password}
            />
            <TouchableHighlight onPress={this._handleLoginUser}>
              <Text style={styles.button}>
                Login
              </Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={Actions.register}>
              <Text style={styles.button}>
                Register
              </Text>
            </TouchableHighlight>
          </View>
        </Image>
      )
    }
  }
}

const styles = StyleSheet.create({
  backgroundImg: {
    flex: 1,
    width: null,
    height: null
  },
  button: {
    color: '#999999',
    fontSize: 17.2
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 78,
    marginTop: 83
  },
  logo: {
    padding: 30
  },
  splashPage: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

//Styling todo
//Shorten button width
//No ... in text input
