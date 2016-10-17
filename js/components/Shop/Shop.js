// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  TouchableHighlight,
  Dimensions
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import TabBar from '../../elements/TabBar'
import ShopItems from './ShopItems'
import ShopFollowing from './ShopFollowing'
import ShopRating from './ShopRating'

var width = Dimensions.get('window').width;

export default class Shop extends Component {
  constructor(){
    super()

  }

  componentWillMount() {
    this.props.populateShopItems(this.props.user.items)
  }

  render() {
    const {shopItems} = this.props

    return (
      <View style={styles.container}>
        <Image
          source={require('../../../public/assets/img/dummy/coverPhoto.jpg')}
          style={styles.coverPhoto}
        />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>PapiWaveShop</Text>
          <Text style={styles.userLocation}>Los Angeles, CA</Text>
          <Text style={styles.followButton}>Follow</Text>
          <View style={styles.separator}/>
          <Text style={styles.shopDetail}>With a tradition rooted in guaranteed authentic merchandise — a reputation that began in 3030 — PapiWaveShop established itself as the premier location for both customers and consignors alike.</Text>
        </View>
        <ScrollableTabView
          renderTabBar={() =>
            <TabBar/>
          }
          scrollWithoutAnimation={true}
          tabBarTextStyle={styles.tabBarText}
        >
          <ShopItems tabLabel='Items' shopItems={shopItems}/>
          <ShopFollowing tabLabel='Following'/>
          <ShopRating tabLabel='Rating 4.9'/>
        </ScrollableTabView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 55,
    backgroundColor: 'black',
  },
  coverPhoto: {
    width: width,
    height: 160,
  },
  followButton: {
    color: '#AD985E',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
    marginBottom: 15,
    fontWeight: 'bold',
  },
  userInfo: {
    padding: 15,
  },
  userName: {
    color: 'white',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
    marginBottom: 3,
  },
  userLocation: {
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
    marginBottom: 5,
  },
  separator: {
    height: 0.5,
    backgroundColor: '#dddddd',
    marginBottom: 15,
  },
  shopDetail: {
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
  },
  tabBarText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 13,
  }
})
