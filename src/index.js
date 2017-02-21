import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Questions from './Questions';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(
  <Questions />,
  document.getElementById('base')
);
