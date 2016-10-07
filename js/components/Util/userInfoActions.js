// @flow
import * as actionTypes from '../../actionTypes'
import Api from '../../modules/Api'
import { Actions } from 'react-native-router-flux'

export const updateUserInfo = (user) => {
  return {
    type: actionTypes.UPDATE_USER,
    user: user,
  }
}

export const updateShopName = (text) => {
  return {
    type: actionTypes.UPDATE_USER_SHOP_NAME,
    shopName: text,
  }
}

export const updateShopImage = (value) => {
  return {
    type: actionTypes.UPDATE_USER_SHOP_IMAGE,
    shopImage: value,
  }
}

export const updateShopDetail = (text) => {
  return {
    type: actionTypes.UPDATE_USER_SHOP_DETAIL,
    shopDetail: text,
  }
}

export const updateUsername = (text) => {
  return {
    type: actionTypes.UPDATE_USER_USERNAME,
    username: text,
  }
}

export const updateUserEmail = (text) => {
  return {
    type: actionTypes.UPDATE_USER_EMAIL,
    email: text,
  }
}

export const updateUserFirstName = (text) => {
  return {
    type: actionTypes.UPDATE_USER_FIRST_NAME,
    firstName: text,
  }
}

export const updateUserLastName = (text) => {
  return {
    type: actionTypes.UPDATE_USER_LAST_NAME,
    lastName: text,
  }
}

export const updateUserLocation = (value) => {
  return {
    type: actionTypes.UPDATE_USER_LOCATION,
    location: value,
  }
}

export const submitProfileEdit = (editedUserInfo) => {
  console.log('__EDITED USER INFO__', editedUserInfo)
  console.log('__USER ID__', editedUserInfo.id)

  return dispatch => {
    Api.server.update('user', editedUserInfo, editedUserInfo.id)
    .then((userUpdateResponse) => {
      console.log(up)
      console.log(userUpdateResponse)
      dispatch(updateUserInfo(userUpdateResponse.user))
      //When navigating to it would like to go back down vertically
      Actions.shop(direction='vertical')
    })
    .catch((error) => {
      console.log('Error: ', error)
    })
  }
}
