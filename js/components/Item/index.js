// @flow
import { connect } from 'react-redux'

import Item from './Item'
import * as actions from './actions' // mapDispatchToProps
import {
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
})

export default connect(mapStateToProps, actions)(Item)
