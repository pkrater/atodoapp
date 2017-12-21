import React, { Component } from 'react';

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

  export default AddTodo;