import React, { Component } from 'react';
import './App.css';
// import axios from 'axios';
import {Switch, Router} from 'react-router-dom';

import TitleBar from './components/TitleBar';
import Main from './components/Main.js';

const apiKey = 'MDo2NGY4MDgzMi04OWQ3LTExZTctOWM0OS1mN2VkOWI0NDI4MjU6a09uZFhqQU9DZ2YweDBiZGFoZ1JOSlVFT0o3SmVGeTB1b3kx';

class App extends Component {

  render() {
    return (
      <div className="App">
        <TitleBar />
        <Main />
      </div>
    );
  }
}

export default App;
