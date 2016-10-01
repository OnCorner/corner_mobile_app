// @flow
import Home from './Home'
import { connect } from 'react-redux'
import * as actions from './actions' // mapDispatchToProps
import {
  getLogin,
  getNav,
  getSell,
} from '../../reducers/rootReducer'

// Combining 1 or + actionCreators
// const mapDispatchToProps = {
//   ...actionsDuplicate,
//   ...actions,
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Login)

const mapStateToProps = (state) => ({
  ...getLogin(state),
  ...getNav(state),
  ...getSell(state),
})

export default connect(mapStateToProps, actions)(Home)
