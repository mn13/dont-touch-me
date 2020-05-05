import React from 'react';
import ReactDOM from 'react-dom';
import Buttons from './Button';
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(
  <React.StrictMode>
    <Buttons count={5} />
  </React.StrictMode>,
  document.getElementById('root')
);