// @flow
import Register from './Register'
import { connect } from 'react-redux'
import * as actions from './actions' // mapDispatchToProps
import * as loginActions from '../Login/actions' // mapDispatchToProps
import {
  getLogin,
  getNav,
  getRegister,
} from '../../reducers/rootReducer'

// Combining 1 or + actionCreators
const mapDispatchToProps = {
  ...actions,
  ...loginActions,
}

const mapStateToProps = (state) => ({
  ...getNav(state),
  ...getRegister(state),
  ...getLogin(state),
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)
