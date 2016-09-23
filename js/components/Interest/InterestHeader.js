// @flow
import React, { Component } from 'react'
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native'
import { Actions } from 'react-native-router-flux'

var width = Dimensions.get('window').width * .50;

export default class InterestHeader extends Component {
  constructor(){
    super()
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>
            Select 3 groups from our suggestions to begin
          </Text>
          <TouchableHighlight
            onPress={Actions.home}
            underlayColor='transparent'
          >
            <Text style={styles.goButton}>LIFT OFF!</Text>
          </TouchableHighlight>
          <Text style={styles.subTitleText}>Featured</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15
  },
  goButton: {
    color: '#AD985E',
    fontSize: 22,
    fontFamily: 'Helvetica Neue',
    fontWeight: 'bold',
    marginBottom: 30
  },
  subTitleText: {
    color: '#999999',
    fontSize: 15,
    fontWeight: 'bold'
  },
  title: {
    width: width
  },
  titleText: {
    color: 'white',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
    marginBottom: 15
  },
})
