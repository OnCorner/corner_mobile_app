// @flow
import { connect } from 'react-redux'

import Inventory from './Inventory'
import * as actions from './actions' // mapDispatchToProps
import {
  getInventory,
  getNav,
  getUserInfo,
} from '../../reducers/rootReducer'

// Combining 1 or + actionCreators
// const mapDispatchToProps = {
//   ...actionsDuplicate,
//   ...actions,
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Login)

const mapStateToProps = (state) => ({
  ...getNav(state),
  ...getUserInfo(state),
  ...getInventory(state),
})

export default connect(mapStateToProps, actions)(Inventory)
