'use strict';

import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

var width = Dimensions.get('window').width;

export default class GroupHeader extends Component {
  render() {
    const {rowData} = this.props

    return (
      <View style={styles.container}>
        <Image
          source={rowData.image}
          style={styles.groupImage}
        />
        <Text style={styles.infoButton}>Info</Text>
        <Text style={styles.groupName}>{rowData.name}</Text>
        <Text style={styles.followButton}>Follow</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: width,
    padding: 15,
    alignItems: 'center'
  },
  groupImage: {
    width: 345,
    height: 230,
    marginBottom: 45
  },
  groupName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#AD985E',
    fontFamily: 'Helvetica Neue',
    marginBottom: 15
  },
  infoButton: {
    fontSize: 11,
    color: 'grey',
    fontFamily: 'Helvetica Neue'
  },
  followButton: {
    fontSize: 13,
    color: 'white',
    marginBottom: 30
  }
})
