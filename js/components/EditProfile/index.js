// @flow
import { connect } from 'react-redux'

import EditProfile from './EditProfile'
import * as actions from './actions' // mapDispatchToProps
import * as actionsUserInfo from '../Util/userInfoActions'
import {
  getNav,
  getUserInfo,
} from '../../reducers/rootReducer'

// Combining 1 or + actionCreators
const mapDispatchToProps = {
  ...actions,
  ...actionsUserInfo,
}

// export default connect(mapStateToProps, mapDispatchToProps)(Login)

const mapStateToProps = (state) => ({
  ...getNav(state),
  ...getUserInfo(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)
