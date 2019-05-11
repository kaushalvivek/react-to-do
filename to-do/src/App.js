import React, { Component } from 'react';
import './App.css';
import ToDoList from './Components/ToDoList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToDoList />
      </div>
    );
  }
}

export default App;
