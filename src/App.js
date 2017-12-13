import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactMotionFlip from 'react-motion-flip';

class AddTodo extends Component {
  constructor(props) {
    super();
    this.addTodoItem = props.addTodoItem.bind(this);
  }

  craftTodo = todo => {
    let id = new Date().getTime();
    return {
      todo,
      id
    };
  };

  onSubmit = e => {
    e.preventDefault();
    this.addTodoItem(this.craftTodo(e.target.elements.addTodo.value));
    e.target.elements.addTodo.value = '';
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input name="addTodo" type="text" />
          <button type="submit">+ add todo</button>
        </form>
      </div>
    );
  }
}

const TodoItems = props => {
  console.log(props);
  return (
    <div>
    <ul className='activeTodos'>
      {props.todos.map(item => (
        <ReactMotionFlip
        //style={{ display: "flex" }}
        //childStyle={{ flexBasis: 100 }}
        springConfig={{stiffness: 260, damping: 5}}
        > 
        <TodoItem
          classname={'active'}
          done={false}
          key={item.id}
          item={item}
          finishTodo={props.finishTodo}
        />
        </ReactMotionFlip>
      ))}
      </ul>
      <ul className='doneTodos'>
      {props.doneTodos.map(item => (
       
        <TodoItem
          classname={'done'}
          done={true}
          item={item}
          key={item.id}
          deleteTodo={props.deleteTodo}
        />
        
      ))}
    </ul>
    </div>
  );
};


const TodoItem = props => {
  console.log(props);
  if (props.done) {
    return (
     
      <li
        key={props.item.id}
        className={props.classname}
        onClick={() => props.deleteTodo(props.item)}
      >
        {props.item.todo}
      </li>
      
    );
  } else {
    return (
     
      <li
        key={props.item.id}
        className={props.classname}
        onClick={() => props.finishTodo(props.item)}
      >
        {props.item.todo}
      </li>
      
    );
  }
};

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
      return {
        todos: prevstate.todos.filter(todo => todo.id !== item.id),
        doneTodos: [item, ...prevstate.doneTodos]
      };
    });
  };

  deleteTodo = item => {
    this.setState(prevstate => {
      return {
        doneTodos: prevstate.doneTodos.filter(todo => todo.id !== item.id)
      };
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <AddTodo addTodoItem={this.addTodoItem} />
        <TodoItems
          finishTodo={this.finishTodo}
          todos={this.state.todos}
          doneTodos={this.state.doneTodos}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}

export default App;
