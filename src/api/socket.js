var socket_server = process.env.REACT_APP_SOCKET_SERVER_URL
var smsSocket = null;

function getSocket() {
  if (smsSocket) {
    return smsSocket
  }
  smsSocket = new WebSocket(socket_server);
  smsSocket.onopen = (e) => {
    smsSocket.send(JSON.stringify({
      msg: 'request connect',
      init: true
    }));
  }

  return smsSocket;
};

export default getSocket;

export const getSocketID = () => {
  console.log('socketID: ', smsSocket.id);
  if (smsSocket) {
    return smsSocket.id;
  } else {
    return null;
  }
}