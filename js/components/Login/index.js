// @flow
import { connect } from 'react-redux'

import Login from './Login'
import * as actions from './actions' // mapDispatchToProps
import {
  getLogin,
  getNav,
} from '../../reducers/rootReducer'

// Combining 1 or + actionCreators
// const mapDispatchToProps = {
//   ...actionsDuplicate,
//   ...actions,
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Login)

const mapStateToProps = (state) => ({
  ...getNav(state),
  ...getLogin(state),
})

export default connect(mapStateToProps, actions)(Login)
