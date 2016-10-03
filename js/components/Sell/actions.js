// @flow
import {
  ListView,
} from 'react-native'
import { Actions } from 'react-native-router-flux'

import * as actionTypes from '../../actionTypes'
import Api from '../../modules/Api'

// Action creators
export const updateItemTitle = (text) => {
  return {
    type: actionTypes.UPDATE_ITEM_TITLE,
    title: text,
  }
}

export const updateItemBrand = (text) => {
  return {
    type: actionTypes.UPDATE_ITEM_BRAND,
    brand: text,
  }
}

export const updateItemStyle = (text) => {
  return {
    type: actionTypes.UPDATE_ITEM_STYLE,
    style: text,
  }
}

export const updateItemSize = (text) => {
  return {
    type: actionTypes.UPDATE_ITEM_SIZE,
    size: text,
  }
}

export const updateItemDetail = (text) => {
  return {
    type: actionTypes.UPDATE_ITEM_DETAIL,
    detail: text,
  }
}

export const updateItemCategory = (text) => {
  return {
    type: actionTypes.UPDATE_ITEM_CATEGORY,
    category: text,
  }
}

export const updateItemGroup = (text) => {
  return {
    type: actionTypes.UPDATE_ITEM_GROUP,
    group: text,
  }
}

export const updateItemQuantity = (value) => {
  return {
    type: actionTypes.UPDATE_ITEM_QUANTITY,
    quantity: value,
  }
}

export const updateItemCondition = (text) => {
  return {
    type: actionTypes.UPDATE_ITEM_CONDITION,
    condition: text,
  }
}

export const updateItemPrice = (value) => {
  return {
    type: actionTypes.UPDATE_ITEM_PRICE,
    price: value,
  }
}

export const updateItemAcceptOffer = (value) => {
  return {
    type: actionTypes.UPDATE_ITEM_ACCEPT_OFFER,
    acceptOffer: value,
  }
}

export const updateItemLocation = (value) => {
  return {
    type: actionTypes.UPDATE_ITEM_LOCATION,
    location: value,
  }
}

export const updateItemMeetUp = (value) => {
  return {
    type: actionTypes.UPDATE_ITEM_MEET_UP,
    meetUp: value,
  }
}

export const updateItemShipping = (value) => {
  return {
    type: actionTypes.UPDATE_ITEM_SHIPPING,
    shipping: value,
  }
}

export const updateItemFreeShipping = (value) => {
  return {
    type: actionTypes.UPDATE_ITEM_FREE_SHIPPING,
    freeShipping: value,
  }
}

export const updateItemImgOne = (value) => {
  return {
    type: actionTypes.UPDATE_ITEM_IMG_ONE,
    imgOne: value,
  }
}

export const updateItemImgTwo = (value) => {
  return {
    type: actionTypes.UPDATE_ITEM_IMG_TWO,
    imgTwo: value,
  }
}

export const updateItemImgThree = (value) => {
  return {
    type: actionTypes.UPDATE_ITEM_IMG_THREE,
    imgThree: value,
  }
}

export const uploadItem = (item) => {
  return {
    type: actionTypes.UPLOAD_ITEM,
    item: item,
  }
}

export const emptyItemInputs = () => {
  return {
    type: actionTypes.EMPTY_ITEM_INPUTS,
  }
}

// export const registerUser = (registerInfo) => {
//   console.log(registerInfo)
//
//   return dispatch => {
//     Api.server.create('user', registerInfo)
//     .then((user) => {
//       console.log(user);
//       dispatch({
//         type: actionTypes.REGISTER_USER
//       })
//       Actions.interest()
//     })
//     .catch((error) => {
//       console.log("Error: ", error)
//     })
//   }
// }
