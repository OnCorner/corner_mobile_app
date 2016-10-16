// @flow weak
import * as actionTypes from '../actionTypes'
import { ListView } from 'react-native'

const DEFAULT_STATE = {
  groups: []
}

export default function(state = DEFAULT_STATE, action) {
  switch(action.type) {
    case actionTypes.POPULATE_GROUPS:
      return {
        ...state,
        groups: action.groups
      }

    default:
      return state
  }
}

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

export const getDiscover = (state) => ({
  discoverGroups: ds.cloneWithRows(state.groups),
})
