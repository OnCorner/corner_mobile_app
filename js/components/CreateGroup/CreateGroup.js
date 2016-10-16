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
import { Actions } from 'react-native-router-flux'
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

export default class CreateGroup extends Component {
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

    this._handleName = this._handleName.bind(this)
    this._handleGroupImg = this._handleGroupImg.bind(this);
    this._handleDetail = this._handleDetail.bind(this)
    this._handleCategory = this._handleCategory.bind(this)
    this._handleRelatedGroups = this._handleRelatedGroups.bind(this)
    this._handlePrivate = this._handlePrivate.bind(this)
    this._handlePrivateConditions = this._handlePrivateConditions.bind(this)
    this._addGroup = this._addGroup.bind(this)
  }

  _handleGroupImg() {
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

        this.props.updateGroupImg(source)
      }
    })
  }

  _handleName(text) {
    this.props.updateGroupName(text)
  }

  _handleDetail(text) {
    this.props.updateGroupDetail(text)
  }

  _handleCategory(text) {
    this.props.updateGroupCategory(text)
  }

  _handleRelatedGroups(text) {
    this.props.updateGroupRelatedGroups(text)
  }

  _handlePrivate(value) {
    this.props.updateGroupPrivate(value)
  }

  _handlePrivateConditions(text) {
    this.props.updateGroupPrivateConditions(text)
  }

  _addGroup() {
    const {
      groupName,
      groupDetail,
      groupCategory,
      groupRelatedGroups,
      groupPrivate,
      groupPrivateConditions,
      groupImgOne,
    } = this.props

    var group = {
      name: groupName,
      description: groupDetail,
      category: groupCategory,
      groupRelatedGroups: groupRelatedGroups,
      private: groupPrivate,
      // groupPrivateConditions: groupPrivateConditions,
      image: groupImgOne,
      creator: this.props.user.id,
    }

    // this.props.createGroup(group, this.props.user)
    // .then(() => {
    //   this.props.emptyGroupInputs()
    // })
    //When navigating to it would like to go back down vertically
    // this.props.uploadGroup(group)
    // Actions.discover(direction='vertical')

    this.props.createGroup(group, this.props.user)
    this.props.emptyGroupInputs()
  }

  render() {
    const {
      groupName,
      groupDetail,
      groupCategory,
      groupRelatedGroups,
      groupPrivate,
      groupPrivateConditions,
      groupImgOne,
    } = this.props

    return (
      <View style={styles.container}>
        {/*Item Details*/}
        <View>
          <InputRow
            onChangeText={this._handleName}
            placeholder='Give a name/title for the group... e.g. Nike Roshe'
            value={groupName ? groupName : ''}
            style={{marginBottom: 15}}
          />
          <View style={s.separator}/>
          <View style={styles.imageCollectionContainer}>
            <TouchableHighlight
              onPress={this._handleGroupImg}
              style={styles.imageButton}
              underlayColor='transparent'
            >
              {this.state.imageSelected ?
                <Image
                  source={groupImgOne ? groupImgOne : ''} style={styles.uploadAvatar}
                />
                :
                <View style={styles.imageContainer}>
                  <Text style={{color: '#AD985E'}}> Add Photo </Text>
                </View>
              }
            </TouchableHighlight>
          </View>
          <InputBox
            onChangeText={this._handleDetail}
            placeholder='Add a brief description... e.g. Marketplace dedicated to Nike Roshe collectors.'
            value={groupDetail ? groupDetail : ''}
          />
          <View style={s.separator}/>
          <View style={s.rowContainer}>
            <Text style={s.label}>Category</Text>
            <InputRow
              placeholder='Shoes'
              onChangeText={this._handleCategory}
              value={groupCategory ? groupCategory : ''}
            />
          </View>
          <View style={s.separator}/>
          <View style={s.rowContainer}>
            <Text style={s.label}>Related Groups</Text>
            <InputRow
              placeholder='Select'
              onChangeText={this._handleRelatedGroups}
              value={groupRelatedGroups ? groupRelatedGroups : ''}
              placeholderTextColor='white'
            />
          </View>
          <View style={s.separator}/>
          <View style={s.rowContainer}>
            <Text style={s.label}>Private</Text>
            <Switch
              onTintColor='#AD985E'
              onValueChange={this._handlePrivate}
              value={groupPrivate}
            />
          </View>
          <View style={s.separator}/>
          {groupPrivate ?
            <View>
              <InputBox
                onChangeText={this._handlePrivateConditions}
                placeholder='Place conditions for joining... e.g. Must correctly answer 3 group related questions via email.'
                value={groupPrivateConditions ? groupPrivateConditions : ''}
              />
              <View style={s.separator}/>
            </View>
            :
            null
          }
          <View style={[s.rowContainer, {justifyContent: 'flex-end'}]}>
            <TouchableHighlight
              onPress={this._addGroup}
              style={s.buttonContainerSilver}
            >
              <Text style={s.buttonTextSilver}>Create Group</Text>
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
