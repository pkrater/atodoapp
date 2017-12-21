import React, { Component } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoItems from './components/TodoItems';
class App extends Component {
 
  state = {}; 

  componentWillMount(){
    const storedState = JSON.parse(localStorage.getItem('storedTodos'));
    storedState ? 
    this.setState(()=>storedState )
    :
    this.setState(()=> ( {
      todos: [],
      doneTodos: []
    }
  ))
  };
    
  componentDidUpdate(){
    localStorage.setItem('storedTodos' , JSON.stringify(this.state)  );
  }
  addTodoItem = item => {
    this.setState( prevstate => ( { todos: [item, ...prevstate.todos] } ));
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
        <header className="App-header">the todo list</header>
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
