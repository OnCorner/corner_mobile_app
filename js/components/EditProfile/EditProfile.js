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

export default class EditProfile extends Component {
  constructor() {
    super()

    // this.state = {
    //   avatarSource: "",
    //   avatarSourceTwo: "",
    //   avatarSourceThree: "",
    // }

    // console.log("symbol exists? "+(!!ImagePicker));
    //
    // var derp = setInterval(function(){console.log("symbol exists? "+(!!ImagePicker)); if(ImagePicker!==undefined)clearInterval(derp);},5)

    this.state = {
      imageSelected: false
    }

    this._handleShopName = this._handleShopName.bind(this)
    this._handleShopImage = this._handleShopImage.bind(this);
    this._handleShopDetail = this._handleShopDetail.bind(this)
    this._handleUsername = this._handleUsername.bind(this)
    this._handleEmail = this._handleEmail.bind(this)
    // this._handleFullName = this._handleFullName.bind(this)
    this._handleFirstName = this._handleFirstName.bind(this)
    this._handleLastName = this._handleLastName.bind(this)
    this._handleMyLocation = this._handleMyLocation.bind(this)
    this._SubmitEdit = this._SubmitEdit.bind(this)
  }

  componentWillMount() {
    console.log('Populating profile page')
    console.log(this.props.user)
  }

  _handleShopImage() {
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

        this.props.updateShopImage(source)
      }
    })
  }

  _handleShopName(text) {
    this.props.updateShopName(text)
  }

  _handleShopDetail(text) {
    this.props.updateShopDetail(text)
  }

  _handleUsername(text) {
    this.props.updateUsername(text)
  }

  _handleEmail(text) {
    this.props.updateUserEmail(text)
  }

  // _handleFullName(text) {
  //   this.props.updateUserFullName(text)
  // }

  _handleFirstName(text) {
    this.props.updateUserFirstName(text)
  }

  _handleLastName(text) {
    this.props.updateUserLastName(text)
  }

  _handleMyLocation(value) {
    this.props.updateUserLocation(value)
  }

  _SubmitEdit() {
    // const {
    //   updatedUserShopName,
    //   updatedUserShopImage,
    //   updatedUserShopDetail,
    //   updatedUserUsername,
    //   updatedUserEmail,
    //   updatedUserFullName,
    //   updatedUserLocation,
    //   updatedUserInfo,
    // } = this.props
    //
    // var userEdit = {
    //   updatedUserShopName: updatedUserShopName,
    //   updatedUserShopImage: updatedUserShopImage,
    //   updatedUserShopDetail: updatedUserShopDetail,
    //   updatedUserUsername: updatedUserUsername,
    //   updatedUserEmail: updatedUserEmail,
    //   updatedUserFullName: updatedUserFullName,
    //   updatedUserLocation: updatedUserLocation,
    //   updatedUserUserInfo: updatedUserUserInfo,
    // }

    this.props.submitProfileEdit(this.props.user)
    // this.props.emptyGroupInputs()
  }

  render() {
    const {
      shopName,
      shopImage,
      shopDetail,
      username,
      email,
      firstName,
      lastName,
      location,
    } = this.props.user

    return (
      <View style={styles.container}>
        {/*Item Details*/}
        <View>
          <View style={s.topRowContainer}>
            <Text style={s.label}>Shop Name</Text>
            <InputRow
              onChangeText={this._handleShopName}
              placeholder='Shop Name'
              value={shopName}
            />
          </View>
          <View style={s.separator}/>
          <View style={styles.imageCollectionContainer}>
            <TouchableHighlight
              onPress={this._handleShopImage}
              style={styles.imageButton}
              underlayColor='transparent'
            >
              {this.state.imageSelected ?
                <Image
                  source={shopImage} style={styles.uploadAvatar}
                />
                :
                <View style={styles.imageContainer}>
                  <Text style={{color: '#AD985E'}}> Add Photo </Text>
                </View>
              }
            </TouchableHighlight>
          </View>
          <InputBox
            onChangeText={this._handleShopDetail}
            placeholder='Add a brief description for your shop... e.g. Selling only Supreme.'
            value={shopDetail}
          />
          <View style={s.separator}/>
          <View style={s.rowContainer}>
            <Text style={s.label}>Username</Text>
            <InputRow
              defaultValue={username}
              placeholder='wavypapi777'
              onChangeText={this._handleUsername}
              value={username}
            />
          </View>
          <View style={s.separator}/>
          <View style={s.rowContainer}>
            <Text style={s.label}>Email</Text>
            <InputRow
              defaultValue={email}
              placeholder='email'
              onChangeText={this._handleEmail}
              value={email}
            />
          </View>
          <View style={s.separator}/>
          <View style={s.rowContainer}>
            <Text style={s.label}>First Name</Text>
            <InputRow
              defaultValue={firstName}
              placeholder='Lyle'
              onChangeText={this._handleFirstName}
              value={firstName}
            />
          </View>
          <View style={s.separator}/>
          <View style={s.rowContainer}>
            <Text style={s.label}>Last Name</Text>
            <InputRow
              defaultValue={lastName}
              placeholder='Mane'
              onChangeText={this._handleLastName}
              value={lastName}
            />
          </View>
          <View style={s.separator}/>
          <View style={s.rowContainer}>
            <Text style={s.label}>My Location</Text>
            <InputRow
              keyboardType="number-pad"
              onChangeText={this._handleMyLocation}
              placeholder='00000'
              value={location}
            />
          </View>
       {/*<View style={s.separator}/>
          <View style={s.rowContainer}>
            <Text style={s.label}>Contact Number</Text>
            <InputRow
              keyboardType="number-pad"
              onChangeText={this._handleLocation}
              placeholder='111-111-1111'
              value={this.props.sellItemLocation}
            />
          </View>*/}
          <View style={s.separator}/>
          <View style={[s.rowContainer, {justifyContent: 'flex-end'}]}>
            <TouchableHighlight
              onPress={this._SubmitEdit}
              style={s.buttonContainerSilver}
            >
              <Text style={s.buttonTextSilver}>Done</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
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
    height: 115,
    flex: 1,
  },
  imageButton: {
    height: 115,
    backgroundColor: 'black',
    borderColor: '#AD985E',
    borderWidth: 1,
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageCollectionContainer: {
    marginTop: 15,
  },
})

//Style modification
//Time stamp and username
