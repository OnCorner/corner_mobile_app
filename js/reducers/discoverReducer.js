// @flow weak
import * as actionTypes from '../actionTypes'

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

export const getDiscover = (state) => ({
  discoverGroups: ds.cloneWithRows(state.groups),
})
