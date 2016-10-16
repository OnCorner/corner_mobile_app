'use strict';

import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native'
import { Actions } from 'react-native-router-flux'

var width = Dimensions.get('window').width;

export default class GroupRow extends Component {

  render() {
    const {rowData} = this.props

    return (
      <View style={styles.item}>
        <TouchableHighlight
          onPress={() => Actions.item({rowData})}
          underlayColor='transparent'
        >
          <View>
            <Image
              source={rowData.image1}
              style={styles.groupImage}
            />
            <Text style={styles.styleText}>{rowData.style}</Text>
            <Text style={styles.priceText}>${rowData.price}</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    width: 165,
    marginLeft: 15,
    marginBottom: 15
  },
  groupImage: {
    width: 165,
    height: 155
  },
  styleText: {
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 15
  },
  priceText: {
    color: 'white',
    fontSize: 13,
    fontFamily: 'Helvetica Neue'
  }
})
