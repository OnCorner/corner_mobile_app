import React from 'react';
import {PropTypes} from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { Actions } from 'react-native-router-flux';
import Api from '../../modules/Api.js'

const contextTypes = {
  drawer: React.PropTypes.object,
}

const NavDrawerPanel = (props, context) => {
  const drawer = context.drawer;

  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={() => {drawer.close(); Actions.home();}}>
        <Text style={styles.button}>Home</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => {drawer.close(); Actions.shop();}}>
        <Text style={styles.button}>My Shop</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => {drawer.close(); Actions.discover();}}>
        <Text style={[styles.button, {marginBottom: 15}]}>
          Discover
        </Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => {drawer.close(); Actions.inbox();}}>
        <Text style={styles.button}>
          Inbox
        </Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => {drawer.close(); Actions.inventory();}}>
        <Text style={styles.button}>
          Inventory
        </Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => {drawer.close(); Actions.transactions();}}>
        <Text style={[styles.button, {marginBottom: 15}]}>
          Transactions
        </Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => {drawer.close(); Actions.creategroup();}}>
        <Text style={styles.button}>
          Create Group
        </Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => {drawer.close(); Actions.editprofile();}}>
        <Text style={[styles.button, {marginBottom: 15}]}>
          Edit Profile
        </Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => {drawer.close(); Actions.chattest();}}>
        <Text style={[styles.button, {marginBottom: 15}]}>
          Chat Test
        </Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => {drawer.close(); Actions.settings();}}>
        <Text style={styles.button}>
          Settings
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
