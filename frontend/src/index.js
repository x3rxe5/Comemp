import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Global Variables
window.companyName = "ComEmp";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

