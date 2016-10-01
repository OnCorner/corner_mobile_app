import React from 'react';
import {PropTypes} from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { Actions } from 'react-native-router-flux';

const contextTypes = {
  drawer: React.PropTypes.object,
}

const NavDrawerPanel = (props, context) => {
  console.log(context)

  const drawer = context.drawer;

  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={() => {drawer.close(); Actions.home();}}>
        <Text style={styles.button}>Home</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={styles.button}>Shop</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => {drawer.close(); Actions.discover();}}>
        <Text style={styles.button}>
          Discover
        </Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: 'black'
  },
  button: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#AAAAAA'
  },
})

NavDrawerPanel.contextTypes = contextTypes;

export default NavDrawerPanel
