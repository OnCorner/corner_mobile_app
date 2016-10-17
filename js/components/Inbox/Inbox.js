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
import InboxMessages from './InboxMessages'
import InboxNotifications from './InboxNotifications'

export default class Inventory extends Component {
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
          <InboxMessages tabLabel='Messages'/>
          <InboxNotifications tabLabel='Notifications'/>
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
