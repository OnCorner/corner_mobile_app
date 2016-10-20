import Api from './Api';
import Url from './Url';
// import socketIOClient from 'socket.io-client';
// var socket = require('socket.io-client')(Url.localhost);
var socketIOClient = require('socket.io-client');
var sailsIOClient = require('sails.io.js');
var io = sailsIOClient(socketIOClient);
// var io = socketIOClient;
io.sails.url = Url.localhost;

// alert(io.sails.url);
// console.log('XXX', socket);
module.exports = {
  enterChatRoom: function(chat, cb) {
    // io.socket.on(chat.id, function(message) {
    //   alert(message.text);
    // });
    io.socket.on('CHAT_MESSAGE', function(message) {
      // alert(message.text);
      cb(message);
    });
    io.socket.get('/chat/joinRoom', {chat: chat});
    // alert("got to subscribe");
    // io.socket.on('connect', function(data) {
    //   socket.request('/user', {}, function(users) {
    //     alert("users", users);
    //   })
    //   alert("data??");
    //   socket.on('message', function(message) {
    //     alert("message", message);
    //   })
    // });
    // return io.socket.get('/section/connect');
  },
  testMessage: function() {
    io.socket.on('message', function(data) {
      // alert(data.message);
    });
  }
};
