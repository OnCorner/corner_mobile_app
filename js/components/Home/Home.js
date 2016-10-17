// @flow
import React, { Component } from 'react'
import {
  ListView,
  Text,
  View,
  TouchableHighlight,
  AsyncStorage,
} from 'react-native'
import ImagePicker from 'react-native-image-picker';
import { Actions } from 'react-native-router-flux'

import s from '../../../public/assets/styles/global'
import HomeFeedRow from './HomeFeedRow'

export default class Home extends Component {
  constructor() {
    super()

    console.log(ImagePicker)
  }

  componentWillMount() {
    console.log('Printing out user info')
    console.log(this.props.user)

    this.props.populateHomeItems(this.props.user.items)
  }

  _renderRow(rowData){
    return (
      <HomeFeedRow rowData={rowData}/>
    )
  }

  render() {
    const {homeItems} = this.props

    return (
      <View style={s.container}>
        <ListView
          dataSource={homeItems}
          enableEmptySections={true}
          renderRow={this._renderRow}
        />
      </View>
    )
  }
}
