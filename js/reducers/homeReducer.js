// @flow weak
import * as actionTypes from '../actionTypes'
import { ListView } from 'react-native'

const DEFAULT_STATE = {
  items: []
}

export default function(state = DEFAULT_STATE, action) {
  switch(action.type) {
    case actionTypes.POPULATE_HOME_ITEMS:
      return {
        ...state,
        items: action.items
      }

    default:
      return state
  }
}

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

export const getHome = (state) => ({
  homeItems: ds.cloneWithRows(state.items),
})
