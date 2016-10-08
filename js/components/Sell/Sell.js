// @flow
import React, { Component } from 'react'
import {
  Dimensions,
  Image,
  ListView,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native'
import {
  Actions,
} from 'react-native-router-flux'
import ImagePicker from 'react-native-image-picker'
var Platform = require('react-native').Platform

import InputNormal from '../../elements/InputNormal'
import InputRow from '../../elements/InputRow'
import InputBox from '../../elements/InputBox'
import s from '../../../public/assets/styles/global'

var fullWidth = Dimensions.get('window').width;

var options = {
  title: 'Select Avatar',
  customButtons: [
    {name: 'fb', title: 'Choose Photo from Facebook'},
  ],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
}

export default class Sell extends Component {
  constructor() {
    super()

    // this.state = {
    //   avatarSource: "",
    //   avatarSourceTwo: "",
    //   avatarSourceThree: "",
    // }
    console.log("symbol exists? "+(!!ImagePicker));

    var derp = setInterval(function(){console.log("symbol exists? "+(!!ImagePicker)); if(ImagePicker!==undefined)clearInterval(derp);},5)

    this.state = {
      imageSelected: false
    }

    this._handleTitle = this._handleTitle.bind(this)
    this._handleItemImgOne = this._handleItemImgOne.bind(this);
    this._handleItemImgTwo = this._handleItemImgTwo.bind(this);
    this._handleItemImgThree = this._handleItemImgThree.bind(this);
    this._handleBrand = this._handleBrand.bind(this)
    this._handleStyle = this._handleStyle.bind(this)
    this._handleSize = this._handleSize.bind(this)
    this._handleDetail = this._handleDetail.bind(this)
    this._handleCategory = this._handleCategory.bind(this)
    this._handleGroup = this._handleGroup.bind(this)
    this._handleQuantity = this._handleQuantity.bind(this)
    this._handleCondition = this._handleCondition.bind(this)
    this._handlePrice = this._handlePrice.bind(this)
    this._handleAcceptOffer = this._handleAcceptOffer.bind(this)
    this._handleLocation = this._handleLocation.bind(this)
    this._handleMeetUp = this._handleMeetUp.bind(this)
    this._handleShipping = this._handleShipping.bind(this)
    this._handleFreeShipping = this._handleFreeShipping.bind(this)
    this._addItem = this._addItem.bind(this)
  }

  _handleItemImgOne() {
    console.log(ImagePicker)

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        // You can display the image using either data...
        const source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};

        // or a reference to the platform specific asset location
        if (Platform.OS === 'ios') {
          const source = {uri: response.uri.replace('file://', ''), isStatic: true};
        } else {
          const source = {uri: response.uri, isStatic: true};
        }

        this.props.updateItemImgOne(source)
      }
    })
  }

  _handleItemImgTwo() {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        // You can display the image using either data...
        const source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};

        // or a reference to the platform specific asset location
        if (Platform.OS === 'ios') {
          const source = {uri: response.uri.replace('file://', ''), isStatic: true};
        } else {
          const source = {uri: response.uri, isStatic: true};
        }

        this.props.updateItemImgTwo(source)
      }
    })
  }

  _handleItemImgThree() {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        // You can display the image using either data...
        const source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};

        // or a reference to the platform specific asset location
        if (Platform.OS === 'ios') {
          const source = {uri: response.uri.replace('file://', ''), isStatic: true};
        } else {
          const source = {uri: response.uri, isStatic: true};
        }

        this.props.updateItemImgThree(source)
      }
    })
  }

  _handleTitle(text) {
    this.props.updateItemTitle(text)
  }

  _handleBrand(text) {
    this.props.updateItemBrand(text)
  }

  _handleStyle(text) {
    this.props.updateItemStyle(text)
  }

  _handleSize(text) {
    this.props.updateItemSize(text)
  }

  _handleDetail(text) {
    this.props.updateItemDetail(text)
  }

  _handleCategory(text) {
    this.props.updateItemCategory(text)
  }

  _handleGroup(text) {
    this.props.updateItemGroup(text)
  }

  _handleQuantity(value) {
    this.props.updateItemQuantity(value)
  }

  _handleCondition(text) {
    this.props.updateItemCondition(text)
  }

  _handlePrice(value) {
    this.props.updateItemPrice(value)
  }

  _handleAcceptOffer(value) {
    this.props.updateItemAcceptOffer(value)
  }

  _handleLocation(value) {
    this.props.updateItemLocation(value)
  }

  _handleMeetUp(value) {
    this.props.updateItemMeetUp(value)
  }

  _handleShipping(value) {
    this.props.updateItemShipping(value)
  }

  _handleFreeShipping(value) {
    this.props.updateItemFreeShipping(value)
  }

  _addItem() {
    const {
      sellItemTitle,
      sellItemBrand,
      sellItemStyle,
      sellItemSize,
      sellItemDetail,
      sellItemCategory,
      sellItemGroup,
      sellItemQuantity,
      sellItemCondition,
      sellItemPrice,
      sellItemAcceptOffer,
      sellItemLocation,
      sellItemMeetUp,
      sellItemShipping,
      sellItemFreeShipping,
      sellItemImgOne,
      sellItemImgTwo,
      sellItemImgThree,
    } = this.props

    var item = {
      name: sellItemTitle,
      quantity: sellItemQuantity,
      condition: sellItemCondition,
      price: sellItemPrice,
      brand: sellItemBrand,
      style: sellItemStyle,
      size: sellItemSize,
      description: sellItemDetail,
      category: "57cb9f94188eae6c53deed98",
      groups: ["57f8855753e22e441630e911"],
      acceptingOffers: sellItemAcceptOffer,
      zip: sellItemLocation,
      canMeetUp: sellItemMeetUp,
      shipping: sellItemShipping,
      freeShipping: sellItemFreeShipping,
      image1: sellItemImgOne,
      image2: sellItemImgTwo,
      image3: sellItemImgThree,
      user: this.props.user.id,
    }

    //CHANGE TO ITEMTITLE, ITEMBRAND, ITEMSTYLE, ETC.

    this.props.createItem(item)
    //When navigating to it would like to go back down vertically
    this.props.emptyItemInputs()

    //
    // var items = []
    // items.push(item)

    // var items = [
    //   {brand: 'Gosha Rubchinskiy', style: 'Classic Short Sleeve', size: 'OS', price:500, image: require('../../../public/assets/img/dummy/item1.jpg'), image2: require('../../../public/assets/img/dummy/item2.jpg'), image3: require('../../../public/assets/img/dummy/item3.jpg'), detail:'Super clean worn handful of times ', username: 'haru_jsb', category: 'Shirts', timeStamp:'2m'},
    //
    //   {brand: 'CAV EMPT', style: 'Noizig Shirt', size: '7', price:650, image:require('../../../public/assets/img/dummy/item2.jpg'), detail:'TAG SIZE: S. Fits Larger. Perfect for 48 size. Easily fit for 50!', username: 'julzzang', category: 'Shoes', timeStamp:'15h'},
    //
    //   {brand: 'Berluti', style: 'Striped L/S Shirt', size: 'L', price:250, image: require('../../../public/assets/img/dummy/item3.jpg'), detail:'This is a vintage beauty with a little wear but still in great shape.', username: 'suzhe012', category: 'Cars', timeStamp:'50s'},
    // ]
    //
    // var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    // var dataSource = ds.cloneWithRows(items)
  }

  render() {

    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.container}
      >
        {/*Item Details*/}
        <View>
          <InputRow
            onChangeText={this._handleStyle}
            placeholder='Give a style for the listing... e.g. Goat Hair Slippers'
            value={this.props.sellItemStyle}
            style={{
              marginBottom: 15,
            }}
          />
          <View style={s.separator}/>
          <View style={styles.imageCollectionContainer} >
            <TouchableHighlight
              onPress={this._handleItemImgOne}
              style={styles.imageButton}
              underlayColor='transparent'
            >
              {this.state.imageSelected ?
                <Image
                  source={this.props.sellItemImgOne} style={styles.uploadAvatar}
                />
                :
                <View style={styles.imageContainer}>
                  <Text style={{color: '#AD985E'}}>Add Photo</Text>
                </View>
              }
            </TouchableHighlight>
            <TouchableHighlight
              onPress={this._handleItemImgTwo}
              style={styles.imageButton}
              underlayColor='transparent'
            >
              {this.state.imageSelected ?
                <Image
                  source={this.props.sellItemImgTwo} style={styles.uploadAvatar}
                />
                :
                <View style={styles.imageContainer}>
                  <Text style={{color: '#AD985E'}}>Add Photo</Text>
                </View>
              }
            </TouchableHighlight>
            <TouchableHighlight
              onPress={this._handleItemImgThree}
              style={styles.imageButton}
              underlayColor='transparent'
            >
              {this.state.imageSelected ?
                <Image
                  source={this.props.sellItemImgTwo} style={styles.uploadAvatar}
                />
                :
                <View style={styles.imageContainer}>
                  <Text style={{color: '#AD985E'}}>Add Photo</Text>
                </View>
              }
            </TouchableHighlight>
          </View>
          <InputBox
            onChangeText={this._handleDetail}
            placeholder='Add a brief description... e.g. Tried on once. Missing half a strand of goat hair.'
            value={this.props.sellItemDetail}
          />
          <View style={s.separator}/>
          <View style={s.rowContainer}>
            <Text style={s.label}>Condition</Text>
            <InputRow
              placeholder='New'
              onChangeText={this._handleCondition}
              value={this.props.sellItemCondition}
            />
          </View>
          <View style={s.separator}/>
          <View style={s.rowContainer}>
            <Text style={s.label}>Brand</Text>
            <InputRow
              placeholder='Nike'
              onChangeText={this._handleBrand}
              value={this.props.sellItemBrand}
            />
          </View>
          <View style={s.separator}/>
          <View style={s.rowContainer}>
            <Text style={s.label}>Size</Text>
            <InputRow
              placeholder='M'
              onChangeText={this._handleSize}
              value={this.props.sellItemSize}
            />
          </View>
          <View style={s.separator}/>
          <View style={s.rowContainer}>
            <Text style={s.label}>Category</Text>
            <InputRow
              placeholder='Shoes'
              onChangeText={this._handleCategory}
              value={this.props.sellItemCategory}
            />
          </View>
          <View style={s.separator}/>
          <View style={s.rowContainer}>
            <Text style={s.label}>Group</Text>
            <InputRow
              placeholder='Button'
              onChangeText={this._handleGroup}
              value={this.props.sellItemGroup}
            />
          </View>
          <View style={s.separator}/>
          <View style={s.rowContainer}>
            <Text style={s.label}>Quantity</Text>
            <InputRow
              placeholder='Quantity'
              keyboardType="number-pad"
              onChangeText={this._handleQuantity}
              value={this.props.sellItemQuantity}
            />
          </View>
          <View style={s.separator}/>
          <View style={s.rowContainer}>
            <Text style={s.label}>Price</Text>
            <InputRow
              placeholder='$0'
              keyboardType="number-pad"
              onChangeText={this._handlePrice}
              value={this.props.sellItemPrice}
            />
          </View>
        </View>
        {/*Shipping Methods*/}
        <View>
          <Text style={[
              s.label, {
                color: 'white',
                fontWeight: 'bold',
                marginBottom: 5,
                marginTop: 5,
              }
          ]}>
            Delivery Methods
          </Text>
          <View style={s.separator}/>
          <View style={s.rowContainer}>
            <Text style={s.label}>Item Location</Text>
            <InputRow
              keyboardType="number-pad"
              onChangeText={this._handleLocation}
              placeholder='ZIP Code'
              value={this.props.sellItemLocation}
            />
          </View>
          <View style={s.separator}/>
          <View style={s.rowContainer}>
            <Text style={s.label}>Accepting Offers</Text>
            <Switch
              onTintColor='#AD985E'
              onValueChange={this._handleAcceptOffer}
              value={this.props.sellItemAcceptOffer}
            />
          </View>
          <View style={s.separator}/>
          <View style={s.rowContainer}>
            <Text style={s.label}>Meet Up</Text>
            <Switch
              onTintColor='#AD985E'
              onValueChange={this._handleMeetUp}
              value={this.props.sellItemMeetUp}
            />
          </View>
          <View style={s.separator}/>
          <View style={s.rowContainer}>
            <Text style={s.label}>Shipping</Text>
            <Switch
              onTintColor='#AD985E'
              onValueChange={this._handleShipping}
              value={this.props.sellItemShipping}
            />
          </View>
          <View style={s.separator}/>
          <View style={s.rowContainer}>
            <Text style={s.label}>Free Shipping</Text>
            <Switch
              onTintColor='#AD985E'
              onValueChange={this._handleFreeShipping}
              value={this.props.sellItemFreeShipping}
            />
          </View>
          <View style={s.separator}/>
          <View style={[s.rowContainer, {justifyContent: 'flex-end'}]}>
            <TouchableHighlight
              onPress={this._addItem}
              style={s.buttonContainerSilver}
            >
              <Text style={s.buttonTextSilver}>List Item</Text>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 55,
    padding: 15
  },
  button: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#AAAAAA'
  },
  uploadAvatar: {
    height: 100,
    width: 100,
  },
  imageButton: {
    width: 100,
    height: 100,
    backgroundColor: 'black',
    borderColor: '#AD985E',
    borderWidth: 1,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageCollectionContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 15,
  },
})

//Style modification
//Style text input, make it look like keep typing probably switch textAlign only to left
//Add social media sharing
