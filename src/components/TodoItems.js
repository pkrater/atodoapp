import React from 'react';
import TodoItem from './TodoItem';
import ReactMotionFlip from 'react-motion-flip';

const TodoItems = (props) => {
    let allTodos = [...props.todos, ...props.doneTodos];
    return (
      <div>
        <ul className="activeTodos">
          {allTodos.map(item => (
            <ReactMotionFlip
              style={{ display: "flex" }}
              //childStyle={{ flexBasis: 100 }}
              springConfig={{ stiffness: 260, damping: 5 }}
            >
              <TodoItem
                className={'active'}
                key={item.id}
                item={item}
                finishTodo={props.finishTodo}
              />
            </ReactMotionFlip>
          ))}
        </ul>
      </div>
    );
};

export default TodoItems;