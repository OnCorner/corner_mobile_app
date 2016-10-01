// @flow weak
import { combineReducers } from 'redux'
import nav, * as fromNav from './navReducer'
import login, * as fromLogin from './loginReducer'
import register, * as fromRegister from './registerReducer'
import sell, * as fromSell from './sellReducer'

export default combineReducers({
  nav,
  login,
  register,
  sell,
})

//Like getNav:nav
export const getNav = (state) => fromNav.getNav(state.nav)

//Like getLogin:login
export const getLogin = (state) => fromLogin.getLogin(state.login)

//Like getRegister:register
export const getRegister = (state) => fromRegister.getRegister(state.register)

//Like getSell:sell
export const getSell = (state) => fromSell.getSell(state.sell)
