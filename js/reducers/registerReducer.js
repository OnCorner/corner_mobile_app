// @flow weak
import * as actionTypes from '../actionTypes'

const DEFAULT_STATE = {

}

export default function(state = DEFAULT_STATE, action) {
  switch(action.type) {
    case actionTypes.UPDATE_REGISTER_USERNAME:
      return {
        ...state,
        username: action.username
      }

    case actionTypes.UPDATE_REGISTER_EMAIL:
      return {
        ...state,
        email: action.email
      }

    case actionTypes.UPDATE_REGISTER_FIRST_NAME:
      return {
        ...state,
        firstName: action.firstName
      }

    case actionTypes.UPDATE_REGISTER_LAST_NAME:
      return {
        ...state,
        lastName: action.lastName
      }

    case actionTypes.UPDATE_REGISTER_PASSWORD:
      return {
        ...state,
        password: action.password
      }

    case actionTypes.REGISTER_USER:
      return {
        ...state,
        success: true,
      }

    default:
      return state
  }
}

export const getRegister = (state) => ({
  newUsername: state.username,
  newEmail: state.email,
  newFirstName: state.firstName,
  newLastName: state.lastName,
  newPassword: state.password,
  registerSuccess: state.success,
})
