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

    // this.renderHeader = this.renderHeader.bind(this)
    this.renderRow = this.renderRow.bind(this)
  }

  componentWillMount() {
    console.log("Group::componentWillMount", this.props);
    // this.props.fetchItemsByGroupId(this.props.rowData.id)
    this.props.populateGroupItems(this.props.rowData.items)
  }

  renderHeader(headerData){
    return(
      <GroupHeader headerData={headerData}/>
    )
  }

  renderRow(rowData){
    return(
      <GroupRow rowData={rowData}/>
    )
  }

  render() {
    // const {rowData, groupItems} = this.props
    const {groupItems, rowData} = this.props
    console.log("GROUPS>>>>>>>>>>>>>>>>>>this.props", this.props.groupItems);
    // dataSource={rowData}
    // renderRow={this.renderRow}

    return (
      <View style={styles.container}>
        <ListView
          contentContainerStyle={styles.list}
          dataSource={groupItems}
          enableEmptySections={true}
          renderHeader={this.renderHeader.bind(this, rowData)}
          renderRow={this.renderRow}
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
