import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import regattaApp from '../reducers'

let store = createStore(regattaApp)

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(    <Provider store={store}>
                        <App />
                      </Provider>, div);
});