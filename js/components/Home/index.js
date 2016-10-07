// @flow
import { connect } from 'react-redux'

import Home from './Home'
import * as actions from './actions' // mapDispatchToProps
import * as actionsUserInfo from '../Util/userInfoActions'
import {
  getLogin,
  getNav,
  getSell,
  getRegister,
  getUserInfo,
} from '../../reducers/rootReducer'

// Combining 1 or + actionCreators
const mapDispatchToProps = {
  ...actions,
  ...actionsUserInfo,
}

// export default connect(mapStateToProps, mapDispatchToProps)(Login)

const mapStateToProps = (state) => ({
  ...getLogin(state),
  ...getRegister(state),
  ...getNav(state),
  ...getSell(state),
  ...getUserInfo(state),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
