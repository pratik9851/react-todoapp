
import './App.css';
import Todo from './component/Todo';
import Todoclass from './component/Todoclass';

/*function App() {
  return (
    <div className="App">
      <Todo/>
    </div>
  );
}*/

import React, { Component } from 'react'


export default class App extends Component {
  render() {
    return (
      <div className='App'>
         
         <Todoclass/>
      </div>
    )
  }
}

