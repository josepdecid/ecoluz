import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import '../i18n.config';
import App from './components/App';
import './index.css';
import { store } from './redux/reducers/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
