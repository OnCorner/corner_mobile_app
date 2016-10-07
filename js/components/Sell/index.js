// @flow
import { connect } from 'react-redux'

import Sell from './Sell'
import * as actions from './actions' // mapDispatchToProps
import {
  getNav,
  getSell,
  getUserInfo,
} from '../../reducers/rootReducer'

// Combining 1 or + actionCreators
// const mapDispatchToProps = () => ({
//   ...actionsDuplicate,
//   ...actions,
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Login)

const mapStateToProps = (state) => ({
  ...getNav(state),
  ...getSell(state),
  ...getUserInfo(state),
})

export default connect(mapStateToProps, actions)(Sell)
