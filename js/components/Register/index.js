// @flow
import Register from './Register'
import { connect } from 'react-redux'
import * as actions from './actions' // mapDispatchToProps
import {
  getLogin,
  getNav,
  getRegister,
} from '../../reducers/rootReducer'

// Combining 1 or + actionCreators
// const mapDispatchToProps = {
//   ...actionsLogin,
//   ...actions,
// }

const mapStateToProps = (state) => ({
  ...getNav(state),
  ...getRegister(state),
})

export default connect(mapStateToProps, actions)(Register)
