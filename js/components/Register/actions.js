// @flow
import * as actionTypes from '../../actionTypes'
import Api from '../../modules/Api'
import { Actions } from 'react-native-router-flux'
import { AsyncStorage } from 'react-native'

// Action creators
export const updateRegisterUsername = (text) => {
  return {
    type: actionTypes.UPDATE_REGISTER_USERNAME,
    username: text,
  }
}

export const updateRegisterEmail = (text) => {
  return {
    type: actionTypes.UPDATE_REGISTER_EMAIL,
    email: text,
  }
}

export const updateRegisterFirstName = (text) => {
  return {
    type: actionTypes.UPDATE_REGISTER_FIRST_NAME,
    firstName: text,
  }
}

export const updateRegisterLastName = (text) => {
  return {
    type: actionTypes.UPDATE_REGISTER_LAST_NAME,
    lastName: text,
  }
}

export const updateRegisterPassword = (text) => {
  return {
    type: actionTypes.UPDATE_REGISTER_PASSWORD,
    password: text,
  }
}

export const updateUserInfo = (user) => {
  return {
    type: actionTypes.UPDATE_USER,
    user: user,
  }
}

export const registerUser = (registerInfo) => {
  return dispatch => {
    Api.server.post('signup', registerInfo)
    .then((signUpResponse) => {
      AsyncStorage.setItem('token', signUpResponse.token);
      dispatch({
        type: actionTypes.REGISTER_USER
      })
      dispatch(updateUserInfo(signUpResponse.user))
      Actions.interest()
    })
    .catch((error) => {
      console.log("Error: ", error)
    })
  }
}
