import React from 'react';
import ReactDom from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {store} from './store';



ReactDom.render(
  <React.StrictMode>
  <Provider store={store}>
    <App/>
  </Provider>
  </React.StrictMode>
, document.getElementById("root"));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


/** 
 * StrictMode is a tool for highlighting potential problems in an application. Like Fragment, StrictMode does not render any visible UI. It activates additional checks and warnings for its descendants.

Note:

Strict mode checks are run in development mode only; they do not impact the production build.

*/