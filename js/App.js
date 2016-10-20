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
  Modal,
} from 'react-native-router-flux'

import configureStore from './store/configureStore'
import s from '../public/assets/styles/global'
import Login from './components/Login'
import ChatTest from './components/ChatTest'
import Register from './components/Register'
import Home from './components/Home'
import Interest from './components/Interest'
import NavDrawer from './components/NavDrawer'
import Sell from './components/Sell'
import Discover from './components/Discover'
import CreateGroup from './components/CreateGroup'
import EditProfile from './components/EditProfile'
import Shop from './components/Shop'
import Settings from './components/Settings'
import Item from './components/Item'
import Group from './components/Group'
import Inventory from './components/Inventory'
import Inbox from './components/Inbox'
import Transactions from './components/Transactions'

const RouterWithRedux = connect()(Router)
const store = configureStore()

export default class App extends Component {
  constructor() {
    super()
  }

  render() {

    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key='root'>
            <Scene component={Login} hideNavBar initial={true} key='login' sceneStyle={s.bgColor} title='Login' type='reset'/>
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
                  component={Item}
                  direction='vertical'
                  key='item'
                  navigationBarStyle={s.transNavbar}
                  sceneStyle={s.bgColor}
                />
                <Scene
                  component={Shop}
                  key='shop'
                  sceneStyle={s.bgColor}
                  title='Shop'
                  type='reset'
                />
                <ChatTest
                  component={ChatTest}
                  key='chattest'
                  sceneStyle={s.bgColor}
                  title='ChatTest'
                  type='reset'
                />
                <Scene
                  component={Discover}
                  key='discover'
                  sceneStyle={s.bgColor}
                  title='Discover'
                  type='reset'
                />
                <Scene
                  component={Inbox}
                  key='inbox'
                  sceneStyle={s.bgColor}
                  title='Inbox'
                  type='reset'
                />
                <Scene
                  component={Transactions}
                  key='transactions'
                  sceneStyle={s.bgColor}
                  title='Transactions'
                  type='reset'
                />
                <Scene
                  component={Inventory}
                  key='inventory'
                  sceneStyle={s.bgColor}
                  title='Inventory'
                  type='reset'
                />
                <Scene
                  component={CreateGroup}
                  key='creategroup'
                  sceneStyle={s.bgColor}
                  title='Create Group'
                  type='reset'
                />
                <Scene
                  component={Group}
                  direction='vertical'
                  key='group'
                  sceneStyle={s.bgColor}
                />
                <Scene
                  component={EditProfile}
                  key='editprofile'
                  sceneStyle={s.bgColor}
                  title='Edit Profile'
                  type='reset'
                />
                <Scene
                  component={Settings}
                  key='settings'
                  sceneStyle={s.bgColor}
                  title='Settings'
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
//Re-structure Scene levels
