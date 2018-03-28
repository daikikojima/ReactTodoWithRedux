import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddTodo from './AddTodo';
import List from './List'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
    this.addTodo = this.addTodo.bind(this)
  }

  addTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Todo Apps</h1>
        </header>
        <List props = {this.state} />
        <AddTodo props = {this.state} addTodo={this.addTodo.bind(this)} />
      </div>
    );
  }
}

export default App;
