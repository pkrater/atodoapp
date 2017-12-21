import React from 'react';

const TodoItem = (props) => {
    if (props.item.done) {
        return (
          <li
            key = {props.item.id}
            className="done"
            onClick={() => props.finishTodo(props.item)}
          >
          <input type="checkbox" defaultChecked disabled /> {props.item.todo} 
          </li>
        );
      } else {
        return (
          <li
            key={props.item.id}
            className={props.classname}
            onClick={() => props.finishTodo(props.item)}
          >
          <input type="checkbox" />  {props.item.todo} </li>
        );
      }
};

export default TodoItem;