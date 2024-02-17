import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Importing the main App component
import './index.css'; // Optional: Importing CSS files

ReactDOM.render(
  <React.StrictMode>
    <App /> {/* Rendering the App component */}
  </React.StrictMode>,
  document.getElementById('root') // Mounting point in the HTML file
);
