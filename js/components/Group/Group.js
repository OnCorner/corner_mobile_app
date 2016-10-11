'use strict';

import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import GroupHeader from './GroupHeader'
import GroupRow from './GroupRow'

var width = Dimensions.get('window').width;

export default class Group extends Component {
  constructor(props) {
    super(props)

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    // this.renderHeader = this.renderHeader.bind(this)
    this.renderRow = this.renderRow.bind(this)
  }

  componentWillMount() {
    console.log("Group::componentWillMount", this.props);
    this.props.fetchItemsByGroupId(this.props.rowData.id)
  }

  renderRow(rowData){
    return(
      <GroupRow rowData={rowData}/>
    )
  }

  renderHeader(rowData){
    console.log('_____)_)_)______', rowData)

    return(
      <GroupHeader rowData={rowData}/>
    )
  }

  render() {
    const {rowData, groupItems} = this.props
    console.log("GROUPS>>>>>>>>>>>>>>>>>>this.props", this.props);
    return (
      <View style={styles.container}>
        <ListView
          contentContainerStyle={styles.list}
          dataSource={groupItems}
          renderRow={this.renderRow}
          renderHeader={this.renderHeader.bind(this, rowData)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 55,
    backgroundColor: 'black'
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  textBold: {
    marginTop: 0,
    marginLeft: 128,
    color: 'red',
    fontSize: 22,
    fontFamily: 'Helvetica Neue',
    fontWeight: 'bold'
  },
  text: {
    marginTop:511,
    marginLeft: 133,
    color: 'red',
    fontSize: 11,
    fontFamily: 'Helvetica Neue'
  },
  textSecond: {
    marginTop:3,
    marginLeft: 72,
    color: 'red',
    fontSize: 11,
    fontFamily: 'Helvetica Neue'
  },
  itemImage: {
    flex: 1,
    width: null,
    height: null,
    marginTop: 70
  },
  groupImage: {
    width: 345,
    height: 231,
    marginLeft: 15,
    marginTop: 104
  },
})
