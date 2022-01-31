import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// for redux
import store from "./store/store";
import { Provider } from "react-redux";

// Global Variables
window.companyName = "ComEmp";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

