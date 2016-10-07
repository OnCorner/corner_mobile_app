'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Dimensions
} from 'react-native';
import Swiper from 'react-native-swiper'

import DiscoverRowLeft from './DiscoverRowLeft'
import DiscoverRowRight from './DiscoverRowRight'

var width = Dimensions.get('window').width;

export default class DiscoverRow extends Component {
  constructor() {
    super();
  }

  _likePressed() {
    console.log('LIKE BUTTON HAS BEEN PRESSED')
  }

  _followPressed() {
    console.log('FOLLOW BUTTON HAS BEEN PRESSED')
  }

  render() {
    var rowData = this.props.rowData

    return (
      <Swiper
        style={styles.wrapper}
        height={181}
        dot={<View style={{backgroundColor:'transparent'}} />}
        activeDot={<View style={{backgroundColor: 'transparent'}} />}
        loop={false}
        index={1}
      >
        {/* Right swipe */}
        <DiscoverRowRight rowData={rowData}/>

        {/* Main swipe */}
        <View style={{flex: 1, padding: 15}}>
          <View>
            <TouchableHighlight>
              <Image
                source={rowData.groupImgOne}
                style={styles.groupThumb}
              />
            </TouchableHighlight>
            <View style={styles.rowGroupContainer}>
              <View>
                <Text style={styles.groupText}>{rowData.groupName}</Text>

                <TouchableHighlight onPress={null}>
                  <Text style={styles.admin}>{rowData.groupAdmin}</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </View>

        {/* Left swipe */}
        <DiscoverRowLeft/>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  groupThumb: {
    width: 345,
    height: 115,
    marginBottom: 15
  },
  groupText: {
    color: '#AD985E',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
    fontWeight: 'bold',
    marginBottom: 5
  },
  admin: {
    color: 'white',
    fontSize: 13,
    fontFamily: 'Helvetica Neue'
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rowGroupContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  deleteButton: {
    width: 17,
    height: 17
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  deleteNoButton: {
    marginRight: 20
  },
  rowDelete: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
    padding: 15
  },
  rowDeleteBottom: {
    justifyContent: 'flex-end',
    flexDirection: 'row'
  },
  rowInfo: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 15
  },
  rowInfoBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  likeButton: {
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
    marginRight: 15
  },
  followButton: {
    color: 'white',
    fontSize: 13,
    fontFamily: 'Helvetica Neue'
  },
  brandText: {
    color: '#AD985E',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
    fontWeight: 'bold',
    marginBottom: 3
  },
  likeText: {
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
    marginBottom: 5
  },
  deleteNoButton: {
    marginRight: 15,
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
  },
  deleteYesButton: {
    color: 'white',
    fontSize: 13,
    fontFamily: 'Helvetica Neue'
  },
  deleteText: {
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue'
  },
  followerText: {
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
    marginBottom: 3
  },
  groupDetailText: {
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue'
  },
  adminText: {
    color: 'white',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
    marginBottom: 5
  },
  moreInfoText: {
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue'
  }
})
