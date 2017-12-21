import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoItems from './components/TodoItems';


class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      doneTodos: []
    };
  }

  addTodoItem = item => {
    this.setState(prevstate => {
      return { todos: [item, ...prevstate.todos] };
    });
  };

  finishTodo = item => {
    this.setState(prevstate => {
      if (item.done) {
        return {
          doneTodos: prevstate.doneTodos.filter(todo => todo.id !== item.id)
        };
      } else {
        return {
          todos: prevstate.todos.filter(todo => todo.id !== item.id),
          doneTodos: [item, ...prevstate.doneTodos].map(todo =>
            Object.assign({ done: true }, todo)
          )
        };
      }
    });
  };

  /* deleteTodo = item => {
    console.log(item);
    this.setState(prevstate => {
      return {
        doneTodos: prevstate.doneTodos.filter(todo => todo.id !== item.id)
      };
    });
  };
*/
  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <AddTodo addTodoItem={this.addTodoItem} />
        <TodoItems
          finishTodo={this.finishTodo}
          todos={this.state.todos}
          doneTodos={this.state.doneTodos}
        />
      </div>
    );
  }
}

export default App;
