import React, { Component } from 'react';
import './App.css';
import AddTodo from '../containers/AddTodo';
import List from '../containers/List'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Todo Apps</h1>
        </header>
        <List/>
        <AddTodo />
      </div>
    );
  }
}

export default App;
