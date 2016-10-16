// @flow
// import { Actions } from 'react-native-router-flux'

import * as actionTypes from '../../actionTypes'
// import { getLogin } from '../../reducers/rootReducer'

// Action creators
export const shop = () => {
  console.log('Shop')
}

export const populateShopItems = (items) => {
  return {
    type: actionTypes.POPULATE_SHOP_ITEMS,
    items: items,
  }
}
