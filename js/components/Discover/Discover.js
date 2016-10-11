// @flow
import React, { Component } from 'react';
import {
  ListView,
  StyleSheet,
  View,
  Text,
} from 'react-native';

import DiscoverHeader from './DiscoverHeader'
import DiscoverRow from './DiscoverRow'

export default class Discover extends Component {
  constructor(){
    super()

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      dataSource: ds.cloneWithRows([
        {
          "moderators": [],
          "members": [],
          "items": [],
          "likes": [],
          "tags": [],
          "relatedGroups": [],
          "creator": {
            "password": "pbkdf2$10000$97ad055c7382e0cdd4614a198b2c63f0ef0e1f81a86a5d26357061b17a170801d22f0b7353ec44eaea78594e47ef99d2e8ea2051d7a731799d5232a3064e482b$3b1a923a0dd6c13769612363b39009b7364ab699220883d1c977cfdbd6d5c5007c381c264e78b93b14589b877ef7cecd5f4a9a892ba646680277c89cab105986",
            "email": "jack@jack.com",
            "firstName": "Jack",
            "lastName": "Jacker",
            "username": "jackson",
            "shopName": "",
            "zip": "",
            "type": "USER",
            "shopDescription": "",
            "status": "EMAIL_PENDING",
            "shopImage": "",
            "profileImage": "",
            "createdAt": "2016-10-08T04:34:36.909Z",
            "updatedAt": "2016-10-08T04:38:38.137Z",
            "id": "57f8775c12437406156cd8c9"
          },
          "name": "Group 5",
          "description": "Asdf Grop 5",
          "image": '../../../public/assets/img/dummy/kawsGroup.jpg',
          "status": "INACTIVE",
          "private": false,
          "createdAt": "2016-10-08T05:34:15.462Z",
          "updatedAt": "2016-10-08T05:34:15.462Z",
          "id": "57f8855753e22e441630e911"
        },
        {
          "moderators": [],
          "members": [],
          "items": [],
          "likes": [],
          "tags": [],
          "relatedGroups": [],
          "creator": {
            "password": "pbkdf2$10000$97ad055c7382e0cdd4614a198b2c63f0ef0e1f81a86a5d26357061b17a170801d22f0b7353ec44eaea78594e47ef99d2e8ea2051d7a731799d5232a3064e482b$3b1a923a0dd6c13769612363b39009b7364ab699220883d1c977cfdbd6d5c5007c381c264e78b93b14589b877ef7cecd5f4a9a892ba646680277c89cab105986",
            "email": "jack@jack.com",
            "firstName": "Jack",
            "lastName": "Jacker",
            "username": "jackson",
            "shopName": "",
            "zip": "",
            "type": "USER",
            "shopDescription": "",
            "status": "EMAIL_PENDING",
            "shopImage": "",
            "profileImage": "",
            "createdAt": "2016-10-08T04:34:36.909Z",
            "updatedAt": "2016-10-08T04:38:38.137Z",
            "id": "57f8775c12437406156cd8c9"
          },
          "name": "Group 1",
          "description": "Grou p1",
          "image": '../../../public/assets/img/dummy/kawsGroup.jpg',
          "status": "INACTIVE",
          "private": false,
          "createdAt": "2016-10-08T05:36:51.774Z",
          "updatedAt": "2016-10-08T05:36:51.774Z",
          "id": "57f885f353e22e441630e912"
        }
      ])
    }

    this.renderHeader = this.renderHeader.bind(this)
    this.renderRow = this.renderRow.bind(this)
  }

  componentDidMount() {
    // this.props.getDiscoverGroups();
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
          dataSource={this.state.dataSource}
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
