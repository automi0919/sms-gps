const WebSocket = require('ws')
const {v4: uuid4} = require('uuid');
const config = require('../config');
const wss = new WebSocket.Server({ port: config.SOCKET_PORT })
var clients = [];

console.log(
  'socket server listening on %d',
  config.SOCKET_PORT,
)

wss.on('connection', (ws) => {

  ws.on('message', (msg) => {
    let msgObj = JSON.parse(msg); 
    if (msgObj.init) {
      let id = uuid4();
      ws.id = id;
      console.log('connected socket id - onmessage: ', ws.id);
      sendMessage(ws, {id, type: 'SET_SOCKETID'});
      clients.push(ws);
    }
  })

  ws.on('close', function() {
    clients = clients.filter(client => client !== ws);
  });
  sendMessage(ws, 'hi! you are connected!');
})

wss.sendToRequester = (socketID, msg) => {
  console.log('SocketID: ', socketID);
  console.log('msg: ', msg);
 
  let client = clients.find(client => client.id === socketID);
  if (client) {
    sendMessage(client, msg);
  }
}

const sendMessage = (ws, msg) => {
  ws.send(JSON.stringify(msg));
}

module.exports = wss;