import './bootstrap';
import '../css/app.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store';
import { Provider } from 'react-redux';
import Chat from './Chat';

ReactDOM.render(
  <Provider store={store}>
    <Chat/>
  </Provider>,
  document.getElementById('root')
)