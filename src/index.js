import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import regattaApp from './reducers'
import App from './components/App'
import registerServiceWorker from './components/registerServiceWorker'

let store = createStore(regattaApp)


render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
registerServiceWorker();
