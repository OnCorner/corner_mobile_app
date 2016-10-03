import React, { Component } from 'react'
import Drawer from 'react-native-drawer'
import {
  Actions,
  DefaultRenderer
} from 'react-native-router-flux'

import NavDrawerPanel from './NavDrawerPanel'

export default class NavDrawer extends Component {

  componentDidMount() {
    Actions.refresh({
      key: 'drawer',
      ref: this.refs.navigation
    })
  }

  render() {
    const state = this.props.navigationState;
    const children = state.children;

    console.log(this.props)

    return (
      <Drawer
        ref="navigation"
        type="displace"
        onOpen={() => Actions.refresh({ key: state.key, open: true })}
        onClose={() => Actions.refresh({ key: state.key, open: false })}
        content={<NavDrawerPanel/>}
        tapToClose
        openDrawerOffset={0.5}
        panCloseMask={0.5}
        negotiatePan
        tweenHandler={(ratio) => ({
          main: { opacity: Math.max(1, 1 - ratio) },
        })}
      >
        <DefaultRenderer
          navigationState={children[0]}
          onNavigate={this.props.onNavigate}
        />
      </Drawer>
    )
  }
}
