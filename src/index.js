import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'fontsource-roboto';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
