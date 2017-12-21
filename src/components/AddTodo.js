import React, { Component } from 'react';

class AddTodo extends Component {
    constructor(props) {
      super();
      this.addTodoItem = props.addTodoItem.bind(this);
    }
  
    craftTodo = todo => {
      let createDate = new Date();
      let id = createDate.getTime();
      return {
        todo,
        id,
        createDate,

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
          <form className="AddTodo" onSubmit={this.onSubmit}>
            <input className="AddTodo-field" name="addTodo" type="text" />
            <button className="AddTodo-button" type="submit">+</button>
          </form>
        </div>
      );
    }
  }

  export default AddTodo;