// @flow
import { connect } from 'react-redux'

import Discover from './Discover'
import * as actions from './actions' // mapDispatchToProps
import {
  getNav,
  getCreateGroup
} from '../../reducers/rootReducer'

// Combining 1 or + actionCreators
// const mapDispatchToProps = () => ({
//   ...actionsDuplicate,
//   ...actions,
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Login)

const mapStateToProps = (state) => ({
  ...getNav(state),
  ...getCreateGroup(state),
})

export default connect(mapStateToProps, actions)(Discover)
