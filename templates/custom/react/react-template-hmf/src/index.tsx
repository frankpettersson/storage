import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './setup/serviceWorker';
ReactDOM.render(<App />, document.querySelector('#root'));
serviceWorker.register();
