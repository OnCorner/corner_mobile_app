// @flow weak
import { combineReducers } from 'redux'
import nav, * as fromNav from './navReducer'
import login, * as fromLogin from './loginReducer'
import register, * as fromRegister from './registerReducer'
import sell, * as fromSell from './sellReducer'
import createGroup, * as fromCreateGroup from './createGroupReducer'
import editProfile, * as fromEditProfile from './editProfileReducer'

export default combineReducers({
  nav,
  login,
  register,
  sell,
  createGroup,
  editProfile
})

//Like getNav:nav
export const getNav = (state) => fromNav.getNav(state.nav)
export const getLogin = (state) => fromLogin.getLogin(state.login)
export const getRegister = (state) => fromRegister.getRegister(state.register)
export const getSell = (state) => fromSell.getSell(state.sell)
export const getCreateGroup = (state) => fromCreateGroup.getCreateGroup(state.createGroup)
export const getEditProfile = (state) => fromEditProfile.getEditProfile(state.editProfile)
