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
