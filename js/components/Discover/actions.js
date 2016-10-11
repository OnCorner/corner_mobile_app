// @flow
// import { Actions } from 'react-native-router-flux'

import * as actionTypes from '../../actionTypes'
// import { getLogin } from '../../reducers/rootReducer'
import Api from '../../modules/Api'

// Action creators
export const populateGroups = (groups) => {
  return {
    type: actionTypes.POPULATE_GROUPS,
    groups: groups,
  }
}

export const getDiscoverGroups = (user) => {
  return dispatch => {
    Api.server.find('group')
    .then((groups) => {
      console.log("groups", groups);
      dispatch(populateGroups(groups))
    })
    .catch((error) => {
      console.log('Discover groups error: ', error)
    })
  }
}
