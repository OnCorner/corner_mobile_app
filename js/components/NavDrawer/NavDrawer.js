import React, { Component } from 'react'
import Drawer from 'react-native-drawer'
import {
  Actions,
  DefaultRenderer
} from 'react-native-router-flux'

import NavDrawerPanel from './NavDrawerPanel'

export default class NavDrawer extends Component {

  componentDidMount() {
      Actions.refresh({key: 'drawer', ref: this.refs.navigation});
  }

  render() {
    const { navigationState: { children } } = this.props;

    console.log(this.props)

    return (
      <Drawer
        ref="navigation"
        type="displace"
        content={<NavDrawerPanel />}
        tapToClose
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        negotiatePan
        tweenHandler={(ratio) => ({
          main: { opacity: Math.max(0.54, 1 - ratio) },
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
