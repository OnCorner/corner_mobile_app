// @flow
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native'

export default class DiscoverRowRight extends Component {
  constructor() {
    super()
  }

  render() {
    const {rowData} = this.props

    return (
      <View style={{flex:1}}>
        <View style={styles.rowInfo}>
          {/* Top section */}
          <View>
            <Text style={styles.brandText}>{rowData.name}</Text>
            <Text style={styles.followerText}>00k followers</Text>
            <Text style={styles.likeText}>00k likes</Text>
          </View>
          {/* Mid section */}
          <View>
            <Text style={styles.groupDetailText}>{rowData.description}</Text>
          </View>
          {/* Bottom section */}
          <View style={styles.rowInfoBottom}>
            <View>
              <Text style={styles.adminText}>{rowData.creator.username}</Text>
              <Text style={styles.moreInfoText}>{rowData.category} 30d</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableHighlight
                underlayColor='transparent'
              >
                <Text style={styles.likeButton}>Like</Text>
              </TouchableHighlight>
              <TouchableHighlight
                underlayColor='transparent'
              >
                <Text style={styles.followButton}>Follow</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  adminText: {
    color: 'white',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
    marginBottom: 5
  },
  brandText: {
    color: '#AD985E',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
    fontWeight: 'bold',
    marginBottom: 3
  },
  groupDetailText: {
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue'
  },
  likeButton: {
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
    marginRight: 15
  },
  likeText: {
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
    marginBottom: 5
  },
  followButton: {
    color: 'white',
    fontSize: 13,
    fontFamily: 'Helvetica Neue'
  },
  followerText: {
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
    marginBottom: 3
  },
  moreInfoText: {
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue'
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
})
