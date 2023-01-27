import React from "react";
import TodoCard from "./TodoCard";

export const TodoList = ({filteredTodoList, removeTodoFromTodoList}) => {
   return (
      <ul>
         {filteredTodoList.length > 0 ? (
            <>
               {filteredTodoList.map((todo, index) => (
                  <TodoCard key={index} todo={todo} removeTodoFromTodoList={removeTodoFromTodoList} />
               ))}
            </>
         ) : (
            <p aria-label="alert">Nenhuma anotação foi cadastrada até o momento</p>
         )}
      </ul>
   );
};
