'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableHighlight,
  ListView,
  Navigator,
  Alert,
  Animated,
  StatusBar,

} from 'react-native';

import Swiper from 'react-native-swiper'

import ItemComments from './ItemComments'
import ItemSubviewOrder from './ItemSubviewOrder'
import ItemSubviewPayment from './ItemSubviewPayment'

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
var imageHeight = Dimensions.get('window').height / 1.333;
var infoHeight = Dimensions.get('window').height - imageHeight
var isHidden = true;
var isHiddenSecond = true;

export default class Item extends Component {
  constructor(props){
    super(props);

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this._buyPressed = this._buyPressed.bind(this);
    this._paymentPressed = this._paymentPressed.bind(this);
    this._showNotification = this._showNotification.bind(this);
    this._hideNotification = this._hideNotification.bind(this);

    this.state = {
      //Where low it should initially start off with (Higher the lower the subview starts)
      bounceValue: new Animated.Value(167),
      bounceValueSecond: new Animated.Value(167),
      slideAnimation: new Animated.Value(22),
      paymentText: 'Select',
      affirmText: 'Select',
      addressText: 'Select',
      dataSource: ds.cloneWithRows([
      ])
    };
  }

  renderRow(rowData) {
    return (
      <ItemComments rowData={rowData}/>
    );
  }

  _showNotification() {
    StatusBar.setHidden(true, 'slide');

    Animated.timing(
      this.state.slideAnimation,
      {toValue: 0, duration: 300}
    ).start();
  }

  _hideNotification() {
    StatusBar.setHidden(false, 'slide');

    Animated.timing(
      this.state.slideAnimation,
      {toValue: 22, duration: 300}
    ).start();
  }

  _selectPayment() {
    if(this.state.paymentText == 'Select') {
      this.setState({
        paymentText: 'Selected'
      })
    } else {
      this.setState({
        paymentText: 'Select'
      })
    }
  }

  _selectAffirm() {
    if(this.state.affirmText == 'Select') {
      this.setState({
        affirmText: 'Selected'
      })
    } else {
      this.setState({
        affirmText: 'Select'
      })
    }
  }

  _selectAddress() {
    if(this.state.addressText == 'Select') {
      this.setState({
        addressText: 'Selected'
      })
    } else {
      this.setState({
        addressText: 'Select'
      })
    }
  }

  _buyPressed() {
    console.log('BUY HAS BEEN PRESSED')

    //Speed of animation (To what point it goes down to)
    var toValue = 167;

    if(isHidden) {
      toValue = 0;
    }

    Animated.spring(
      this.state.bounceValue,
      {
        toValue: toValue,
        velocity: 3,
        tension: 50,
        friction: 10,
      }
    ).start();

    isHidden = !isHidden;
  }

  _paymentPressed() {
    //Speed of animation (To what point it goes down to)
    var toValue = 167;

    if(isHiddenSecond) {
      toValue = 0;
    }

    Animated.spring(
      this.state.bounceValueSecond,
      {
        toValue: toValue,
        velocity: 3,
        tension: 50,
        friction: 10,
      }
    ).start();

    isHiddenSecond = !isHiddenSecond;
  }

  render() {
    // const {itemsDataSource} = this.props
    //GOTTA HAVE DISCOVER ROW TO PASS rowData PROP INTO HERE SO I CAN SIMPLY DO rowData.itemitemImgOne etc.
    const {rowData} = this.props

    return (
      <View>
        <StatusBar barStyle="default"/>

        <Animated.View style={[styles.notification, {top: this.state.slideAnimation}]}>
          <Text style={styles.notifcationText}>This is a notification</Text>
        </Animated.View>

        <Swiper
          style={styles.wrapper}
          loop={false}
          height={imageHeight}

          dot={<View style={{backgroundColor:'#999999', width: 5, height: 5,borderRadius: 4, marginLeft: 3, marginRight: 3}}/>}

          activeDot={<View style={{backgroundColor: 'white', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3}} />}

          loop={false}
        >
          <View style={styles.slideImage}>
            <Image
              source={rowData.itemImgOne}
              style={styles.itemImage}
            />
          </View>
          <View style={styles.slideImage}>
            <Image
              source={rowData.itemImgTwo}
              style={styles.itemImage}
            />
          </View>
          <View style={styles.slideImage}>
            <Image
              source={rowData.itemImgThree}
              style={styles.itemImage}
            />
          </View>
        </Swiper>

        <Swiper
          height={infoHeight}
          onMomentumScrollEnd={function(e, state, context){console.log('index:', state.index)}}

          dot={<View style={{backgroundColor:'#999999', width: 5, height: 5,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}}/>}

          activeDot={<View style={{backgroundColor: 'white', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}

          paginationStyle={{bottom: 15, left: null, right: 15}}
          loop={false}
        >
          <View
            style={styles.infoSection}
            title={
              <View style={{flexDirection: 'row', marginBottom: 75, marginLeft: 15}}>
                <Text
                  numberOfLines={1}
                  style={styles.usernameText}
                >
                  shawn_kemp
                </Text>
              </View>
            }
          >
            <Text style={styles.brandText}>{rowData.itemBrand}</Text>
            <Text style={styles.styleText}>{rowData.itemStyle} • Size {rowData.itemSize}</Text>
            <Text style={styles.detailText}>{rowData.itemDetail}</Text>
            <View style={{flexDirection: 'row'}}>
              <TouchableHighlight
                underlayColor='transparent'
                onPress={this._buyPressed.bind(this)}
                style={styles.buyButton}
              >
                <Text style={styles.buyButtonText}>Buy ${rowData.itemPrice}</Text>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={this._buyPressed}
                style={styles.offerButton}
                underlayColor='transparent'
              >
                <Text style={styles.offerButtonText}>Offer</Text>
              </TouchableHighlight>
            </View>
          </View>

       {/*<View
            style={styles.commentSection}
          >
            <ListView
              dataSource={this.state.dataSource}
              enableEmptySections={true}
              renderRow={this.renderRow.bind(this)}
            />
          </View>*/}
        </Swiper>
        <Animated.View
          style={[styles.subView,
            {transform: [{translateY: this.state.bounceValue}]}]}
        >
          <ItemSubviewOrder
            _buyPressed={this._buyPressed}
            _paymentPressed={this._paymentPressed}
            rowData={rowData}
          />
        </Animated.View>
        <Animated.View
          style={[styles.subViewSecond,
            {transform: [{translateY: this.state.bounceValueSecond}]}]}
        >
          <ItemSubviewPayment
            _paymentPressed={this._paymentPressed}
            _showNotification={this._showNotification}
            rowData={rowData}
          />
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemImage: {
    width: width,
    height: imageHeight
  },
  wrapper: {
    backgroundColor: 'black', //This is important to hide the notification, because it is actually behind it,
  },
  slideImage: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center'
  },
  infoSection: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    paddingTop: 15
  },
  buyButton: {
    borderWidth: 1,
    borderColor: '#999999',
    borderRadius: 5,
    height: 25,
    width: 125,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: 10
  },
  offerButton: {
    borderWidth: 1,
    borderColor: '#999999',
    borderRadius: 5,
    height: 25,
    width: 125,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 10
  },
  brandText: {
    color: '#AD985E',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
    fontWeight: 'bold',
    marginBottom: 5
  },
  styleText: {
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
    marginBottom: 3
  },
  detailText: {
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
    marginBottom: 15
  },
  buyButtonText: {
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
  },
  offerButtonText: {
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
  },
  notification: {
    backgroundColor: 'black',
    position: 'absolute',
    top: 22, //Move the notification downwards to setup the scene.
    left: 0,
    right: 0,
    height: 22, //Make it the same height as the status bar
    zIndex: 0.5, //This is what makes the notification benhind the container
  },
  notifcationText: {
    color: 'yellow',
    textAlign: 'center',
    fontSize: 11,
    marginTop: 4,
  },
  subView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'black',
    height: 167,
    flex: 1,
  },
  subViewSecond: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'black',
    height: 167,
    flex: 1,
  },
})
