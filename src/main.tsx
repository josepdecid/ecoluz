import '../i18n.config'
import './index.css'

import App from './App'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { loadSavedSettings } from './actions/settingsActions'
import rootReducer from './reducers/rootReducer'

const store = createStore(rootReducer)
store.dispatch(loadSavedSettings())

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)
