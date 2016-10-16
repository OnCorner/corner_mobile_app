// @flow
import { Actions } from 'react-native-router-flux'

import * as actionTypes from '../../actionTypes'

// Action creators
export const populateHomeItems = (items) => {
  return {
    type: actionTypes.POPULATE_HOME_ITEMS,
    items: items,
  }
}
