'use strict';

import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import Swiper from 'react-native-swiper'

var width = Dimensions.get('window').width
var imageHeight = Dimensions.get('window').height * .25

export default class DiscoverHeader extends Component {
  constructor(props){
    super(props);

    this._renderRow = this._renderRow.bind(this);

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      selected: false,
      dataSource: ds.cloneWithRows([

      ])
    };
  }

  _renderRow(rowData){
    return (
      <View style={styles.group}>
        <TouchableHighlight underlayColor='transparent'>
          <View style={styles.groupDetailContainer}>
            <Image
              source={rowData.imageHeader}
              style={styles.groupImage}
            />
            <Text style={styles.groupText}>{rowData.groupHeader}</Text>
            <Text style={styles.adminText}>{rowData.adminHeader}</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }

  render() {
    return (
      <View>
        <Text style={styles.title}>Featured</Text>
        <ListView
          contentContainerStyle={styles.list}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
        <Text style={styles.subTitle}>Trending</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    marginTop: 70,
    marginLeft: 15,
    marginBottom: 15,
    color: '#999999',
    fontSize: 15,
    fontFamily: 'Helvetica Neue',
    fontWeight: 'bold'
  },
  subTitle: {
    marginTop: 45,
    marginLeft: 15,
    color: '#999999',
    fontSize: 15,
    fontFamily: 'Helvetica Neue',
    fontWeight: 'bold'
  },
  slideImage: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center'
  },
  itemImage: {
    width: width,
    height: imageHeight
  },
  group: {
    width: 117,
    height: 147,
    marginLeft: 15
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  groupImage: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  adminText: {
    color: 'white',
    fontSize: 11,
    fontFamily: 'Helvetica Neue'
  },
  groupText: {
    color: '#AD985E',
    fontSize: 11,
    fontFamily: 'Helvetica Neue',
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 15
  },
  groupDetailContainer: {
    alignItems: 'center'
  }
})
