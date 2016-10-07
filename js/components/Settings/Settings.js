// @flow
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native'

import s from '../../../public/assets/styles/global'

export default class Settings extends Component {
  constructor() {
    super()

    this._handleLogOut = this._handleLogOut.bind(this)
  }

  _handleLogOut() {
    this.props.logoutUser()
  }

  render() {

    return (
      <View style={styles.container}>
        <View>
          <TouchableHighlight onPress={this._handleLogOut}>
            <View style={s.topRowContainer}>
              <Text style={s.buttonLabel}>Log Out</Text>
            </View>
          </TouchableHighlight>
          <View style={s.separator}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 55,
    padding: 15
  }
})
