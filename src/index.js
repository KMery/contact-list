import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Userlist from './Components/Userlist';

ReactDOM.render(
  <React.StrictMode>
    <Userlist />
  </React.StrictMode>,
  document.getElementById('root')
);
