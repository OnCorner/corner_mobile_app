// @flow
import React, { Component } from 'react'
import {
  Router,
  Scene,
  ActionConst,
} from 'react-native-router-flux'
import {
  Provider,
  connect,
} from 'react-redux'

import configureStore from './store/configureStore'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import Interest from './components/Interest'

const RouterWithRedux = connect()(Router)
const store = configureStore()

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key='root'>
            <Scene component={Login} hideNavBar initial={true} key='login' sceneStyle={{backgroundColor: 'black'}} title='Login'/>
            <Scene component={Register} direction='vertical' hideNavBar={false} key='register' sceneStyle={{backgroundColor: 'black'}} title='Register'/>
            <Scene component={Interest} key='interest' sceneStyle={{backgroundColor: 'black'}} title='Interest'/>
            <Scene component={Home} key='home' title='Home' type='reset'/>
          </Scene>
        </RouterWithRedux>
      </Provider>
    )
  }
}

//Register - navbar style: transparent, move title to left
