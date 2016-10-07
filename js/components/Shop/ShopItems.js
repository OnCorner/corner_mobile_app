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
  }

  _renderRow(rowData){
    return (
      <View style={styles.item}>
        <TouchableHighlight underlayColor='transparent'>
          <View>
            <Image
              source={rowData.itemImgOne}
              style={styles.groupImage}
            />
            <Text style={styles.styleText}>{rowData.itemStyle}</Text>
            <Text style={styles.priceText}>${rowData.itemPrice}</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }

  render() {
    const {itemsDataSource} = this.props

    return (
      <ListView
        contentContainerStyle={styles.list}
        dataSource={itemsDataSource}
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
