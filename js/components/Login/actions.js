// @flow
// import * as registerActions from '../Register/actions'
import { AsyncStorage } from 'react-native'
import { Actions } from 'react-native-router-flux'

import * as actionTypes from '../../actionTypes'
import Api from '../../modules/Api'
import * as actionsUserInfo from '../Util/userInfoActions'
import { getLogin } from '../../reducers/rootReducer'
// Action creators
// export const login = () => {
//   Actions.loginTwo
//   return {type: actionTypes.ON_LOGGING}
// }
//
// export const loginWithDelay = () => {
//   return (dispatch, getState) => {
//     setTimeout(() => {
//       const {onLogging} = getLogin(getState())
//       if(!onLogging) {
//         dispatch(login())
//       }
//     }, 1000)
//   }
// }

export const updateLoginUsername = (text) => {
  return {
    type: actionTypes.UPDATE_LOGIN_USERNAME,
    username: text,
  }
}

export const updateLoginPassword = (text) => {
  return {
    type: actionTypes.UPDATE_LOGIN_PASSWORD,
    password: text,
  }
}

export const emptyLoginInputs = () => {
  return {
    type: actionTypes.EMPTY_LOGIN_INPUTS,
  }
}

export const loginUser = (loginInfo) => {
  return dispatch => {
    Api.server.post('login', loginInfo)
    .then((loginResponse) => {
      AsyncStorage.setItem('token', loginResponse.token)
      dispatch(actionsUserInfo.updateUserInfo(loginResponse.user))
      dispatch(emptyLoginInputs())
      Actions.drawer()
    })
    .catch((error) => {
      console.log('Error: ', error)
    })
  }
}

export const checkSession = () => {
  return dispatch => {
    return AsyncStorage.getItem('token')
    .then((token) => {
      return Api.server.post('session', {token: token})
    })
    .then((user) => {
      dispatch(actionsUserInfo.updateUserInfo(user))
      return true
    })
    .catch((err) => {
      return false
    })
  }
}
