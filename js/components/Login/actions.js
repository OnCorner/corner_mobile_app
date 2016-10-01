// @flow
import * as actionTypes from '../../actionTypes'
import { getLogin } from '../../reducers/rootReducer'
import Api from '../../modules/Api'
import * as registerActions from '../Register/actions'
import { AsyncStorage } from 'react-native'
import { Actions } from 'react-native-router-flux'

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

export const handleLoginUser = (loginInfo) => {
  return dispatch => {
    Api.server.post('login', loginInfo)
    .then((loginResponse) => {
      AsyncStorage.setItem('token', loginResponse.token);
      dispatch({
        type: actionTypes.LOGIN_USER
      })
      dispatch(registerActions.updateUserInfo(loginResponse.user))
      Actions.main()
    })
    .catch((error) => {
      console.log("Error: ", error)
    })
  }
}
