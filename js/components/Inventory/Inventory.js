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
import InventoryActive from './InventoryActive'
import InventoryInactive from './InventoryInactive'

export default class Inventory extends Component {
  constructor() {
    super()
  }

  componentWillMount() {
    this.props.populateActiveItems(this.props.user.items)
  }

  render() {
    const {inventoryItems} = this.props

    return (
      <View style={s.container}>
        <ScrollableTabView
          renderTabBar={() =>
            <TabBar/>
          }
          scrollWithoutAnimation={true}
          tabBarTextStyle={styles.tabBarText}
        >
          <InventoryActive
            tabLabel='Active'
            inventoryItems={inventoryItems}
          />
          <InventoryInactive tabLabel='Inactive'/>
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
