import io from 'socket.io-client';

const socket = io('http://localhost:3001'); // Replace with your WebSocket server URL

export const connectToSocket = () => {
  return (dispatch) => {
    socket.on('connect', () => {
      console.log('Connected to WebSocket');
    });

    socket.on('message', (data) => {
      dispatch(receiveMessage(data));
    });
  };
};

export const sendMessage = (message) => {
  socket.emit('message', message);
};

export const receiveMessage = (message) => {
  return {
    type: 'RECEIVE_MESSAGE',
    payload: message,
  };
};
