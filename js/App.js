// @flow
import React, { Component } from 'react'
import {
  Provider,
  connect,
} from 'react-redux'
import {
  ActionConst,
  Actions,
  Router,
  Scene,
} from 'react-native-router-flux'

import configureStore from './store/configureStore'
import s from '../public/assets/styles/global'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import Interest from './components/Interest'
import NavDrawer from './components/NavDrawer'
import Sell from './components/Sell'
import Discover from './components/Discover'

const RouterWithRedux = connect()(Router)
const store = configureStore()

export default class App extends Component {

  // <Scene key='drawer' component={NavDrawer}>
  //   <Scene component={Home} initial={true} key='home' title='Home' type='reset'/>
  // </Scene>

  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key='root'>
            <Scene component={Login} hideNavBar initial={true} key='login' sceneStyle={s.bgColor} title='Login'/>
            <Scene component={Register} direction='vertical' hideNavBar={false} key='register' sceneStyle={s.bgColor} title='Register'/>
            <Scene component={Interest} key='interest' sceneStyle={s.bgColor} title='Interest'/>
            <Scene key='drawer' component={NavDrawer} open={false}>
              <Scene key="main" navigationBarStyle={s.navbar} onRight={() => Actions.sell()} rightTitle='Sell'>
                <Scene
                  component={Home}
                  initial={true}
                  key='home'
                  sceneStyle={s.bgColor}
                  title='Home'
                  type='reset'
                />
                <Scene
                  component={Sell}
                  direction='vertical'
                  key='sell'
                  sceneStyle={s.bgColor}
                  title='Sell'
                />
                <Scene
                  component={Discover}
                  key='discover'
                  sceneStyle={s.bgColor}
                  title='Discover'
                  type='reset'
                />
              </Scene>
            </Scene>
          </Scene>
        </RouterWithRedux>
      </Provider>
    )
  }
}

//Register - navbar style: transparent, move title to left
