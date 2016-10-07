// @flow
import { connect } from 'react-redux'

import CreateGroup from './CreateGroup'
import * as actions from './actions' // mapDispatchToProps
import {
  getCreateGroup,
  getNav,
  getUserInfo,
} from '../../reducers/rootReducer'

// Combining 1 or + actionCreators
// const mapDispatchToProps = () => ({
//   ...actionsDuplicate,
//   ...actions,
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Login)

const mapStateToProps = (state) => ({
  ...getCreateGroup(state),
  ...getNav(state),
  ...getUserInfo(state),
})

export default connect(mapStateToProps, actions)(CreateGroup)
