// @flow
import React, { Component } from 'react';
import {
  ListView,
  StyleSheet,
  View,
} from 'react-native';

import DiscoverHeader from './DiscoverHeader'
import DiscoverRow from './DiscoverRow'

export default class Discover extends Component {
  constructor(){
    super()

    this.renderHeader = this.renderHeader.bind(this)
    this.renderRow = this.renderRow.bind(this)
  }

  componentDidMount() {
    this.props.getDiscoverGroups();
  }

  renderRow(rowData){
    return(
      <DiscoverRow rowData={rowData}/>
    )
  }

  renderHeader(rowData){
    return(
      <DiscoverHeader/>
    )
  }

  render() {
    console.log("this.props", this.props)

    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.props.discoverGroups}
          enableEmptySections={true}
          renderRow={this.renderRow}
          renderHeader={this.renderHeader}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemImage: {
    flex: 1,
    width: null,
    height: null
  },
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  textBold: {
    marginTop: 71,
    marginLeft: 95,
    color: 'red',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
    fontWeight: 'bold'
  },
  text: {
    marginTop:5,
    marginLeft: 72,
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
  }
})
