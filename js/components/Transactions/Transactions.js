// @flow
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view';

import s from '../../../public/assets/styles/global'
import TabBar from '../../elements/TabBar'
import TransactionsBought from './TransactionsBought'
import TransactionsSold from './TransactionsSold'

export default class Transactions extends Component {
  constructor() {
    super()
  }

  render() {

    return (
      <View style={s.container}>
        <ScrollableTabView
          renderTabBar={() =>
            <TabBar/>
          }
          scrollWithoutAnimation={true}
          tabBarTextStyle={styles.tabBarText}
        >
          <TransactionsBought tabLabel='Bought'/>
          <TransactionsSold tabLabel='Sold'/>
        </ScrollableTabView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tabBarText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 13,
  }
})
