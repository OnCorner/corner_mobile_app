// @flow
import { connect } from 'react-redux'

import Shop from './Shop'
import * as actions from './actions' // mapDispatchToProps
import {
  getNav,
  getSell,
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
})

export default connect(mapStateToProps, actions)(Shop)
