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

    // var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    // this._renderRow = this._renderRow.bind(this)
    //
    // this.state = {
    //   dataSource: ds.cloneWithRows([
    //     {brand: 'Gosha Rubchinskiy', style: 'Classic Short Sleeve', size: 'OS', price:500, image: require('../../../public/assets/img/dummy/item1.jpg'), image2: require('../../../public/assets/img/dummy/item2.jpg'), image3: require('../../../public/assets/img/dummy/item3.jpg'), detail:'Super clean worn handful of times ', username: 'haru_jsb', category: 'Shirts', timeStamp:'2m'},
    //
    //     {brand: 'CAV EMPT', style: 'Noizig Shirt', size: '7', price:650, image:require('../../../public/assets/img/dummy/item2.jpg'), detail:'TAG SIZE: S. Fits Larger. Perfect for 48 size. Easily fit for 50!', username: 'julzzang', category: 'Shoes', timeStamp:'15h'},
    //
    //     {brand: 'Berluti', style: 'Striped L/S Shirt', size: 'L', price:250, image: require('../../../public/assets/img/dummy/item3.jpg'), detail:'This is a vintage beauty with a little wear but still in great shape.', username: 'suzhe012', category: 'Cars', timeStamp:'50s'},
    //   ])
    // }
  }

  _renderRow(rowData){
    return (
      <HomeFeedRow rowData={rowData} {...this.props}/>
    )
  }

  logout() {
    AsyncStorage.removeItem('token')
    .then(() => {
      Actions.login()
    })
  }

  render() {
    console.log("Home props", this.props)

    return (
      <View style={s.container}>
        <TouchableHighlight onPress={this.logout.bind(this)}>
          <Text style={{color: 'white'}}>Logout</Text>
        </TouchableHighlight>
        <ListView
          dataSource={this.props.itemsDataSource}
          enableEmptySections={true}
          renderRow={this._renderRow}
        />
      </View>
    )
  }
}
