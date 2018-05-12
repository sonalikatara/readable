import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers'
import './index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import {fetchAllPosts} from './actions/PostActions'
import {fetchAllCategories} from './actions/CategoryActions'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)

store.dispatch(fetchAllPosts())
store.dispatch(fetchAllCategories())

//console.log("store = " + JSON.stringify(store))

ReactDOM.render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
    document.getElementById('root')
)
registerServiceWorker()
