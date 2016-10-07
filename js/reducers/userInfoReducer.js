// @flow weak
import * as actionTypes from '../actionTypes'

const DEFAULT_STATE = {
  user: {},
}

export default function(state = DEFAULT_STATE, action) {
  switch(action.type) {
    case actionTypes.UPDATE_USER:
      return {
        ...state,
        user: action.user,
      }

    case actionTypes.UPDATE_USER_SHOP_NAME:
      return {
        ...state,
        user: {
          ...state.user,
          shopName: action.shopName,
        }
      }

    case actionTypes.UPDATE_USER_SHOP_IMG:
      return {
        ...state,
        user: {
          ...state.user,
          shopImage: action.shopImage,
        }
      }

    case actionTypes.UPDATE_USER_SHOP_DETAIL:
      return {
        ...state,
        user: {
          ...state.user,
          shopDetail: action.shopDetail,
        }
      }

    case actionTypes.UPDATE_USER_USERNAME:
      return {
        ...state,
        user: {
          ...state.user,
          username: action.username,
        }
      }

    case actionTypes.UPDATE_USER_EMAIL:
      return {
        ...state,
        user: {
          ...state.user,
          email: action.email,
        }
      }

    case actionTypes.UPDATE_USER_FIRST_NAME:
      return {
        ...state,
        user: {
          ...state.user,
          firstName: action.firstName,
        }
      }

    case actionTypes.UPDATE_USER_LAST_NAME:
      return {
        ...state,
        user: {
          ...state.user,
          lastName: action.lastName,
        }
      }

    case actionTypes.UPDATE_USER_LOCATION:
      return {
        ...state,
        user: {
          ...state.user,
          location: action.location,
        }
      }

    // case actionTypes.SUBMIT_PROFILE_EDIT:
    //   return {
    //     ...state,
    //     user: {
    //       ...state.user,
    //       email: action.email,
    //     }
    //   }

    default:
      return state
  }
}

export const getUserInfo = (state) => ({
  user: state.user
})
