// @flow
// import { Actions } from 'react-native-router-flux'

import * as actionTypes from '../../actionTypes'
// import { getLogin } from '../../reducers/rootReducer'
import Api from '../../modules/Api'

// Action creators
export const group = () => {
  console.log('Group')
}

export const populateGroupItems = (items) => {
  return {
    type: actionTypes.POPULATE_GROUP_ITEMS,
    items: items,
  }
}

export const fetchItemsByGroupId = (groupId) => {
  const searchCriteria = {groups: [groupId]}

  console.log('Group id shizzz ', searchCriteria)
  return dispatch => {
    Api.server.find('item', searchCriteria)
    .then((items) => {
      console.log("items>>>>>>>>>>>>>>>>>>", items);
      dispatch(populateGroupItems(items))
    })
    .catch((error) => {
      console.log('Group error: ', error)
    })
  }
}
