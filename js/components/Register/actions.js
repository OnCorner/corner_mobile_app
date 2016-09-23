// @flow
import * as actionTypes from '../../actionTypes'
import Api from '../../modules/Api'
import { Actions } from 'react-native-router-flux'

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

export const registerUser = (registerInfo) => {
  console.log(registerInfo)

  return dispatch => {
    Api.server.create('user', registerInfo)
    .then((user) => {
      console.log(user);
      dispatch({
        type: actionTypes.REGISTER_USER
      })
      Actions.interest()
    })
    .catch((error) => {
      console.log("Error: ", error)
    })
  }
}
