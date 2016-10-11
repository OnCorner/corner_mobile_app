// @flow
import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import Swiper from 'react-native-swiper'

import HomeFeedRowLeft from './HomeFeedRowLeft'
import HomeFeedRowRight from './HomeFeedRowRight'
// import ItemDetail from './ItemDetail'

export default class HomeFeedRow extends Component {
  constructor() {
    super()

    this._navigate = this._navigate.bind(this)
  }

  _navigate(route, rowData){
    // route.route.passProps = {rowData: rowData}
    console.log('Pressed Item')
  }

  _contactPressed(){
    console.log('CONTACT BUTTON HAS BEEN PRESSED')
  }

  _buyPressed(){
    console.log('BUY BUTTON HAS BEEN PRESSED')
  }

  render() {
    const {rowData} = this.props

    return (
      <Swiper
        style={styles.wrapper}
        height={159}
        dot={<View style={{backgroundColor:'transparent'}} />}
        activeDot={<View style={{backgroundColor: 'transparent'}} />}
        loop={false}
        index={1}
      >
        {/* Right swipe */}
        <HomeFeedRowRight rowData={rowData}/>

        {/* Main swipe */}
        <View style={styles.rowContainer}>
          <TouchableHighlight
            onPress={() => Actions.item({rowData})}
            underlayColor='transparent'
          >
            <View style={styles.rowMain}>
              <Image
                source={rowData.image1}
                style={styles.thumb}
              />
              <View style={styles.textContainer}>
                <View>
                  <Text style={styles.brandText}>{rowData.brand}</Text>
                  <Text style={styles.styleText}>{rowData.style}</Text>
                  <Text style={styles.sizeText}>{rowData.size}</Text>
                  <Text style={styles.priceText}>${rowData.price}</Text>
                </View>
              </View>
            </View>
          </TouchableHighlight>
          <View style={styles.separator}/>
        </View>

        {/* Left swipe */}
        <HomeFeedRowLeft/>

      </Swiper>
    )
  }
}

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  rowContainer: {
    flex: 1,
    backgroundColor:'black'
  },
  rowMain: {
    flexDirection: 'row',
    padding: 15,
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
  thumb: {
    width: 175,
    height: 127,
    marginRight: 15
  },
  wrapper: {

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
  deleteNoButton: {
    marginRight: 15,
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
  },
  deleteYesButton: {
    color: 'white',
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
  deleteText: {
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue'
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
  swipeIcon: {
    width: 18,
    height: 18
  }
})
