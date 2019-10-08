import React, { Component } from 'react';
import './App.css';
import Rect from './Rect';

class App extends Component{
  render(){
    return (
      <div>
        <h1>React</h1>
        <Rect x="100" y="100" w="100" h="100" r="25" c="cyan" />
        <Rect x="150" y="150" w="100" h="100" r= "10" c="magenta" />
      </div>
    );
  }
}

export default App;
