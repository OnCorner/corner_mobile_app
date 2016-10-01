// @flow
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

import s from '../../../public/assets/styles/global'

export default class DiscoverRowLeft extends Component {
  constructor() {
    super();
  }

  render() {

    return (
      <View style={styles.rowContainer}>
        <View style={styles.rowDelete}>
          <Text style={styles.deleteText}>Would you like to delete this listing from Feed?</Text>
          <View style={styles.rowDeleteBottom}>
            <Text style={styles.deleteNoButton}>No</Text>
            <Text style={styles.deleteYesButton}>Yes</Text>
          </View>
        </View>
        <View style={styles.separator}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  deleteNoButton: {
    marginRight: 15,
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
  },
  deleteText: {
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue'
  },
  deleteYesButton: {
    color: 'white',
    fontSize: 13,
    fontFamily: 'Helvetica Neue'
  },
  rowContainer: {
    flex: 1,
    backgroundColor:'black'
  },
  rowDelete: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
    padding: 15
  },
  rowDeleteBottom: {
    justifyContent: 'flex-end',
    flexDirection: 'row'
  },
  separator: {
    height: 0.7,
    backgroundColor: 'black'
  },
})
