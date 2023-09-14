import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import App from './App';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initialState = {
  websocket: {
    messages: ['Message 1', 'Message 2'],
  },
};
const store = mockStore(initialState);

test('renders App component', () => {
  const { getByText, getByTestId } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const button = getByText('Send Message');
  expect(button).toBeInTheDocument();

});
