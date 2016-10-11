// @flow weak
import * as actionTypes from '../actionTypes'

const DEFAULT_STATE = {
  items: []
}

export default function(state = DEFAULT_STATE, action) {
  switch(action.type) {
    case actionTypes.POPULATE_GROUP_ITEMS:
      return {
        ...state,
        items: items
      }

    default:
      return state
  }
}

export const getGroup = (state) => ({
  groupItems: state.items
})
