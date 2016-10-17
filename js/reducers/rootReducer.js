// @flow weak
import { combineReducers } from 'redux'
import nav, * as fromNav from './navReducer'
import login, * as fromLogin from './loginReducer'
import register, * as fromRegister from './registerReducer'
import sell, * as fromSell from './sellReducer'
import createGroup, * as fromCreateGroup from './createGroupReducer'
import editProfile, * as fromEditProfile from './editProfileReducer'
import userInfo, * as fromUserInfo from './userInfoReducer'
import discover, * as fromDiscover from './discoverReducer'
import group, * as fromGroup from './groupReducer'
import shop, * as fromShop from './shopReducer'
import home, * as fromHome from './homeReducer'
import inventory, * as fromInventory from './inventoryReducer'

export default combineReducers({
  nav,
  login,
  register,
  sell,
  createGroup,
  editProfile,
  userInfo,
  discover,
  group,
  shop,
  home,
  inventory,
})

//Like getNav:nav
export const getNav = (state) => fromNav.getNav(state.nav)
export const getLogin = (state) => fromLogin.getLogin(state.login)
export const getRegister = (state) => fromRegister.getRegister(state.register)
export const getSell = (state) => fromSell.getSell(state.sell)
export const getCreateGroup = (state) => fromCreateGroup.getCreateGroup(state.createGroup)
export const getEditProfile = (state) => fromEditProfile.getEditProfile(state.editProfile)
export const getUserInfo = (state) => fromUserInfo.getUserInfo(state.userInfo)
export const getDiscover = (state) => fromDiscover.getDiscover(state.discover)
export const getGroup = (state) => fromGroup.getGroup(state.group)
export const getShop = (state) => fromShop.getShop(state.shop)
export const getHome = (state) => fromHome.getHome(state.home)
export const getInventory = (state) => fromInventory.getInventory(state.inventory)
