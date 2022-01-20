
import './App.css';
import Todo from './component/Todo';
import Todoclass from './component/Todoclass';
import { Provider } from 'react-redux';
import {store} from "./redux/store"

/*function App() {
  return (
    <div className="App">
      <Todo/>
    </div>
  );
}*/

import React, { Component } from 'react'
import Todoredux from './component/Todoredux';


export default class App extends Component {
  render() {
    return (
      <div className='App'>
         <Provider store={store}>
         <Todoredux/>
         
         </Provider>
      </div>
    )
  }
}

