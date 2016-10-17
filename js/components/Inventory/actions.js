// @flow
// import { Actions } from 'react-native-router-flux'

import * as actionTypes from '../../actionTypes'
// import { getLogin } from '../../reducers/rootReducer'
// import Api from '../../modules/Api'

// Action creators
export const populateActiveItems = (items) => {
  return {
    type: actionTypes.POPULATE_ACTIVE_ITEMS,
    items: items,
  }
}
