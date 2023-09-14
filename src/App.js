import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { connectToSocket, sendMessage } from './actions/websocketActions';

const App = ({ messages, connectToSocket, sendMessage }) => {
  useEffect(() => {
    connectToSocket();
  }, [connectToSocket]);

  const handleSendMessage = () => {
    const message = 'Hello, WebSocket!';
    sendMessage(message);
  };

  return (
    <div className="App">
      <button onClick={handleSendMessage}>Send Message</button>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    messages: state.websocket.messages,
  };
};

export default connect(mapStateToProps, { connectToSocket, sendMessage })(App);
