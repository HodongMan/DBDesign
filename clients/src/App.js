import React, { Component } from 'react';
import {Item} from './Components'

import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="container">
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
      </div>
    );
  }
}

export default App;
