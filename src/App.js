import React, { Component } from 'react';
import './App.css';
import { Providers } from './store';
import Outer from './components/outer';

class App extends Component {
  render() {
    return (
      <Providers>
        <Outer />
      </Providers>
    );
  }
}

export default App;
