// @flow
import { Actions } from 'react-native-router-flux'
import { AsyncStorage } from 'react-native'

import * as actionTypes from '../../actionTypes'
import { getLogin } from '../../reducers/rootReducer'
import * as actionsUserInfo from '../Util/userInfoActions'

// Action creators
export const logoutUser = () => {
  let clearUserInfo = {}

  return dispatch => {
    dispatch(actionsUserInfo.updateUserInfo(clearUserInfo))

    AsyncStorage.removeItem('token')
    .then(() => {
      Actions.login()
    })
  }
}
