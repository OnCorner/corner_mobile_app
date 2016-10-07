// @flow weak
import * as actionTypes from '../actionTypes'
import { ListView } from 'react-native'

const DEFAULT_STATE = {
}

export default function(state = DEFAULT_STATE, action) {
  switch(action.type) {
    // case actionTypes.UPDATE_USER_SHOP_NAME:
    //   return {
    //     ...state,
    //     shopName: action.shopName
    //   }
    //
    // case actionTypes.UPDATE_USER_SHOP_IMG:
    //   return {
    //     ...state,
    //     shopImg: action.shopImg
    //   }
    //
    // case actionTypes.UPDATE_USER_SHOP_DETAIL:
    //   return {
    //     ...state,
    //     shopDetail: action.shopDetail
    //   }
    //
    // case actionTypes.UPDATE_USER_USERNAME:
    //   return {
    //     ...state,
    //     username: action.username
    //   }

    // case actionTypes.UPDATE_USER_EMAIL:
    //   return {
    //     ...state,
    //     email: action.email
    //   }

    // case actionTypes.UPDATE_USER_FULL_NAME:
    //   return {
    //     ...state,
    //     fullName: action.fullName
    //   }
    //
    // case actionTypes.UPDATE_USER_LOCATION:
    //   return {
    //     ...state,
    //     location: action.location
    //   }
    //
    // case actionTypes.SUBMIT_PROFILE_EDIT:
    //   return {
    //     ...state,
    //     userEdit: action.userEdit
    //   }

    default:
      return state
  }
}

export const getEditProfile = (state) => ({
  // updatedUserShopName: state.shopName,
  // updatedUserShopImg: state.shopImg,
  // updatedUserShopDetail: state.shopDetail,
  // updatedUserUsername: state.username,
  // updatedUserEmail: state.email,
  // updatedUserFullName: state.fullName,
  // updatedUserLocation: state.location,
  // updatedUserInfo: state.userEdit,
})
