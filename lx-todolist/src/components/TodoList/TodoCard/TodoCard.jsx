import React from "react";

export const TodoCard = ({todo, removeTodoFromTodoList}) => {
   return (
      <li>
         <h3>{todo.title}</h3>
         <p>{todo.content}</p>
         <span>{todo.category}</span>
         <button onClick={() => removeTodoFromTodoList(todo.id)}>Remover todo</button>
      </li>
   );
};
