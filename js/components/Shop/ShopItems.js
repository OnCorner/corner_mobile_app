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

export default class ShopItems extends Component {
  constructor(){
    super()

    this._renderRow = this._renderRow.bind(this);

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      selected: false,
      dataSource: ds.cloneWithRows([
        {style: 'shoes', brand: 'diamonds'},
        {style: 'shoes', brand: 'dancin'},
        {style: 'shoes', brand: 'getit'},
      ])
    }
  }

  _renderRow(rowData){
    return (
      <View style={styles.item}>
        <TouchableHighlight underlayColor='transparent'>
          <View>
            <Image
              source={rowData.image}
              style={styles.groupImage}
            />
            <Text style={styles.styleText}>{rowData.style}</Text>
            <Text style={styles.priceText}>${rowData.price}</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }

  render() {

    return (
      <ListView
        contentContainerStyle={styles.list}
        dataSource={this.state.dataSource}
        enableEmptySections={true}
        renderRow={this._renderRow}
      />
    )
  }
}

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    width: 165,
    height: 175,
    marginBottom: 40,
    marginLeft: 15,
    marginTop: 15,
  },
  groupImage: {
    width: 165,
    height: 155,
  },
  styleText: {
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 15,
  },
  priceText: {
    color: 'white',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
  }
})
