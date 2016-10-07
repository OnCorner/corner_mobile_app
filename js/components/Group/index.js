// @flow
import { connect } from 'react-redux'

import Group from './Group'
import * as actions from './actions' // mapDispatchToProps
import { getNav } from '../../reducers/rootReducer'

// Combining 1 or + actionCreators
// const mapDispatchToProps = () => ({
//   ...actionsDuplicate,
//   ...actions,
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Login)

const mapStateToProps = (state) => ({
  ...getNav(state),
})

export default connect(mapStateToProps, actions)(Group)
