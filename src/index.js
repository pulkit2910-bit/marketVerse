import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from './app/store';

import App from './App'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider> // Using Provider every single component of the App will have access to store 
, document.getElementById('root'));