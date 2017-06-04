import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import Routes from './Routes';
import registerServiceWorker from './registerServiceWorker';


import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import './App.css';
import './style.css';


ReactDOM.render((
    <BrowserRouter>
        <Routes />
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
