import React, { useState } from "react";
import TodoCreateForm from "../../components/TodoCreateForm";
import TodoList from "../../components/TodoList";

export const TodoPage = ({ filteredTodoList, addTodoToTodoList, removeTodoFromTodoList, setFilter }) => {

   return (
      <div>
         {/* JSX */}
         <TodoCreateForm addTodoToTodoList={addTodoToTodoList} />
         <ul>
            <button onClick={() => setFilter("")}>Todos</button>
            <button onClick={() => setFilter("educacao")}>Educação</button>
            <button onClick={() => setFilter("trabalho")}>Trabalho</button>
         </ul>
         <TodoList filteredTodoList={filteredTodoList} removeTodoFromTodoList={removeTodoFromTodoList} />
      </div>
   );
};
