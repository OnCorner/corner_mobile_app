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

export default class ShopFollowing extends Component {
  constructor(){
    super()

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {dataSource: ds.cloneWithRows([

      ])
    }
  }

  renderRow(rowData){
    return (
      <View style={styles.container}>
        <TouchableHighlight
          underlayColor='#dddddd'
        >
          <View style={styles.rowContainer}>
            <Image
              source={rowData.image}
              style={styles.thumb}
            />
            <View style={styles.textContainer}>
              <View>
                <Text style={styles.userText}>{rowData.username}</Text>
              </View>
              <View>
                <Text style={styles.userDetailText}>{rowData.userDetail}</Text>
              </View>
              <View>
                <Text style={styles.followButton}>Following</Text>
              </View>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    )
  }

  render() {

    return (
      <ListView
        dataSource={this.state.dataSource}
        enableEmptySections={true}
        renderRow={this.renderRow.bind(this)}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 15,
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd',
  },
  thumb: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  userText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 11,
    fontFamily: 'Helvetica Neue',
  },
  userDetailText: {
    color: 'white',
    fontSize: 11,
    fontFamily: 'Helvetica Neue',
  },
  followButton: {
    color: '#AD985E',
    fontSize: 11,
    fontFamily: 'Helvetica Neue',
  },
})
