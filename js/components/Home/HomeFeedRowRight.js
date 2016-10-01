// @flow
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native'
import { Actions } from 'react-native-router-flux'

import s from '../../../public/assets/styles/global'

export default class HomeFeedRowRight extends Component {
  constructor() {
    super();

    this._contactPressed = this._contactPressed.bind(this)
    this._buyPressed = this._buyPressed.bind(this)
  }

  _contactPressed(){
    console.log('CONTACT BUTTON HAS BEEN PRESSED')
    // Actions.discover()
  }

  _buyPressed(){
    console.log('BUY BUTTON HAS BEEN PRESSED')
  }

  render() {
    var rowData = this.props.rowData

    return (
      <View style={styles.rowContainer}>
        <View style={styles.rowInfo}>
          {/* Top section */}
          <View>
            <Text style={styles.brandText}>{rowData.brand}</Text>
            <Text style={styles.styleText}>{rowData.style}</Text>
            <Text style={styles.sizeText}>{rowData.size}</Text>
            <Text style={styles.priceText}>${rowData.price}</Text>
          </View>
          {/* Mid section */}
          <View>
          <Text style={styles.detailText}>{rowData.detail}</Text>
          </View>
          {/* Bottom section */}
          <View style={styles.rowInfoBottom}>
            <View>
              <Text style={styles.usernameText}>{rowData.username}</Text>
              <Text style={styles.categoryText}>{rowData.category} {rowData.timeStamp}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableHighlight
                underlayColor='transparent'
                onPress={Actions.discover}
              >
                <Text style={styles.contactButton}>Contact</Text>
              </TouchableHighlight>
              <TouchableHighlight
              underlayColor='transparent'
               onPress={this._buyPressed}
              >
                <Text style={styles.buyButton}>Buy</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
        <View style={styles.separator}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
    backgroundColor:'black'
  },
  rowInfo: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 15
  },
  rowInfoBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  separator: {
    height: 0.7,
    backgroundColor: 'black'
  },
  brandText: {
    color: '#AD985E',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
    fontWeight: 'bold',
    marginBottom: 3
  },
  styleText: {
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
    marginBottom: 3
  },
  sizeText: {
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
    marginBottom: 5
  },
  priceText: {
    color: 'white',
    fontSize: 13,
    fontFamily: 'Helvetica Neue'
  },
  detailText: {
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue'
  },
  usernameText: {
    color: 'white',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
    marginBottom: 5
  },
  categoryText: {
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue'
  },
  contactButton: {
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
    marginRight: 15
  },
  buyButton: {
    color: 'white',
    fontSize: 13,
    fontFamily: 'Helvetica Neue'
  },
  rowDelete: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
    padding: 15
  },
})
