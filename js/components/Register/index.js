// @flow
import { connect } from 'react-redux'

import Register from './Register'
import * as actions from './actions'
import * as actionsLogin from '../Login/actions'
import {
  getLogin,
  getNav,
  getRegister,
} from '../../reducers/rootReducer'

// Combining 1 or + actionCreators
const mapDispatchToProps = {
  ...actions,
  ...actionsLogin,
}

const mapStateToProps = (state) => ({
  ...getNav(state),
  ...getRegister(state),
  ...getLogin(state),
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)
