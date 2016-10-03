// @flow weak
import * as actionTypes from '../actionTypes'
import { ListView } from 'react-native'

const DEFAULT_STATE = {
  imgOne: require('../../public/assets/img/dummy/item1.jpg'),
  imgTwo: require('../../public/assets/img/dummy/item2.jpg'),
  imgThree: require('../../public/assets/img/dummy/item3.jpg'),
  dataSource: [],
}

export default function(state = DEFAULT_STATE, action) {
  switch(action.type) {
    case actionTypes.UPDATE_ITEM_TITLE:
      return {
        ...state,
        title: action.title
      }

    case actionTypes.UPDATE_ITEM_BRAND:
      return {
        ...state,
        brand: action.brand
      }

    case actionTypes.UPDATE_ITEM_STYLE:
      return {
        ...state,
        style: action.style
      }

    case actionTypes.UPDATE_ITEM_SIZE:
      return {
        ...state,
        size: action.size
      }

    case actionTypes.UPDATE_ITEM_DETAIL:
      return {
        ...state,
        detail: action.detail
      }

    case actionTypes.UPDATE_ITEM_CATEGORY:
      return {
        ...state,
        category: action.category
      }

    case actionTypes.UPDATE_ITEM_GROUP:
      return {
        ...state,
        group: action.group
      }

    case actionTypes.UPDATE_ITEM_QUANTITY:
      return {
        ...state,
        quantity: action.quantity
      }

    case actionTypes.UPDATE_ITEM_CONDITION:
      return {
        ...state,
        condition: action.condition
      }

    case actionTypes.UPDATE_ITEM_PRICE:
      return {
        ...state,
        price: action.price
      }

    case actionTypes.UPDATE_ITEM_ACCEPT_OFFER:
      return {
        ...state,
        acceptOffer: action.acceptOffer
      }

    case actionTypes.UPDATE_ITEM_LOCATION:
      return {
        ...state,
        location: action.location
      }

    case actionTypes.UPDATE_ITEM_MEET_UP:
      return {
        ...state,
        meetUp: action.meetUp
      }

    case actionTypes.UPDATE_ITEM_SHIPPING:
      return {
        ...state,
        shipping: action.shipping
      }

    case actionTypes.UPDATE_ITEM_FREE_SHIPPING:
      return {
        ...state,
        freeShipping: action.freeShipping
      }

    case actionTypes.UPDATE_ITEM_IMG_ONE:
      return {
        ...state,
        imgOne: action.imgOne
      }

    case actionTypes.UPDATE_ITEM_IMG_TWO:
      return {
        ...state,
        imgTwo: action.imgTwo
      }

    case actionTypes.UPDATE_ITEM_IMG_THREE:
      return {
        ...state,
        imgThree: action.imgThree
      }

    case actionTypes.UPLOAD_ITEM:
      return {
        ...state,
        dataSource: [action.item, ...state.dataSource]
      }

    case actionTypes.EMPTY_ITEM_INPUTS:
      return {
        ...state,
        title: '',
        brand: '',
        style: '',
        size: '',
        detail: '',
        category: '',
        group: '',
        quantity: null,
        condition: '',
        price: null,
        acceptOffer: null,
        location: null,
        meetUp: null,
        shipping: null,
        freeShipping: null,
        imgOne: null,
        imgTwo: null,
        imgThree: null,
      }

    default:
      return state
  }
}

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export const getSell = (state) => ({
  sellItemTitle: state.title,
  sellItemBrand: state.brand,
  sellItemStyle: state.style,
  sellItemSize: state.size,
  sellItemDetail: state.detail,
  sellItemCategory: state.category,
  sellItemGroup: state.group,
  sellItemQuantity: state.quantity,
  sellItemCondition: state.condition,
  sellItemPrice: state.price,
  sellItemAcceptOffer: state.acceptOffer,
  sellItemLocation: state.location,
  sellItemMeetUp: state.meetUp,
  sellItemShipping: state.shipping,
  sellItemFreeShipping: state.freeShipping,
  sellItemImgOne: state.imgOne,
  sellItemImgTwo: state.imgTwo,
  sellItemImgThree: state.imgThree,
  itemsDataSource: ds.cloneWithRows(state.dataSource),
})
