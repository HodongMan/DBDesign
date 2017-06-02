import React, { Component } from 'react';
import { Nav, ItemCategoryList, ItemAD, Footer} from './Components'
import {ItemListMainContainer} from './Containers';

import 'jquery';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import './App.css';
import logo from './logo.svg';


class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <ItemListMainContainer />
        <Footer/>
      </div>
    );
  }
}

export default App;
