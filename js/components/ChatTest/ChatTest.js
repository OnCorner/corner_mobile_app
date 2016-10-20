// @flow
import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native'
import Socket from '../../modules/Socket'
import Api from '../../modules/Api'
import InputNormal from '../../elements/InputNormal'

export default class ChatTest extends Component {
  static propTypes = {
    dummy: React.PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {
      message: "hello",
      messages: [],
    }
  }

  componentDidMount() {
    var chat = {id: "58047d0a707d290c9c0833e3", name: "Cool Chat"}
    Socket.enterChatRoom(chat, (message) => {
      let messages = this.state.messages;
      messages.push(message);
      this.setState({messages: messages});
    });

    Api.server.find('message')
    .then((messages) => {
      this.setState({messages: messages});
    })
  }

  _handleMessage(text) {
    this.setState({message: text});
  }

  _sendMessage() {
    const chatData = {
      text: this.state.message,
      type: "USER",
      creatorId: "57cb9db5188eae6c53deed91",
      recipientId: "57cb9cdf188eae6c53deed90",
      chatId: "58047d0a707d290c9c0833e3"
    }
    Api.server.post('chat/message', chatData);
  }

  render() {
    var pr = this.props;
    var st = this.state;

    return (
      <View style={styles.container}>
        <Text>
          ChatTest
        </Text>
        <InputNormal
          onChangeText={this._handleMessage.bind(this)}
          placeholder='Message'
          value={st.message}
        />
        <TouchableHighlight onPress={this._sendMessage.bind(this)}>
          <Text style={styles.button}>
            Send
          </Text>
        </TouchableHighlight>

        {st.messages.map((message, i) => {
          return <Text style={styles.button}>
            {message.creator.username}: {message.text}
          </Text>
        })}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 55,
    padding: 15
  },
  button: {
    color: '#999999',
    fontSize: 17.2
  },
})
