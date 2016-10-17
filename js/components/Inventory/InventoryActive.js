// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
  Image
} from 'react-native';
import { Actions } from 'react-native-router-flux'

import s from '../../../public/assets/styles/global'

export default class InventoryActive extends Component {
  constructor(){
    super()
  }

  renderRow(rowData){
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={() => Actions.item({rowData})}
          underlayColor='#dddddd'
        >
          <View style={styles.rowContainer}>
            <Image
              source={rowData.image1}
              style={styles.thumb}
            />
            <View style={styles.textContainer}>
              <View>
                <Text style={styles.userText}>{rowData.brand}</Text>
              </View>
              <View>
                <Text style={styles.userDetailText}>{rowData.style}</Text>
              </View>
              <View>
                <Text style={styles.followButton}>Active</Text>
              </View>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    )
  }

  render() {
    const {inventoryItems} = this.props

    return (
      <ListView
        dataSource={inventoryItems}
        enableEmptySections={true}
        renderRow={this.renderRow.bind(this)}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 15,
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd',
  },
  thumb: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  userText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 11,
    fontFamily: 'Helvetica Neue',
  },
  userDetailText: {
    color: 'white',
    fontSize: 11,
    fontFamily: 'Helvetica Neue',
  },
  followButton: {
    color: '#AD985E',
    fontSize: 11,
    fontFamily: 'Helvetica Neue',
  },
})
