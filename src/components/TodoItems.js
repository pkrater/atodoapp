import React from 'react';
import TodoItem from './TodoItem';
import ReactMotionFlip from 'react-motion-flip';

const TodoItems = (props) => {
    let allTodos = [...props.todos, ...props.doneTodos];
    return (
      <div>
        <ul className="activeTodos">
        <ReactMotionFlip
        style={{ display: "flex", flexDirection: "column" }}
        childStyle={{ flexBasis: 35 }}
        springConfig={{ stiffness: 160, damping: 10 }}
      >
          {allTodos.map(item => (
            
              <TodoItem
                className={'active'}
                key={item.id}
                item={item}
                finishTodo={props.finishTodo}
              />
            
          ))}
          </ReactMotionFlip>
        </ul>
      </div>
    );
};

export default TodoItems;