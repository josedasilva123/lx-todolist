import { useState } from "react";
import TodoPage from "./pages/TodoPage";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [filter, setFilter] = useState(""); /* Qual filtro está selecionado */

  const filteredTodoList = todoList.filter(todo => {
    return filter === "" ? true : todo.category === filter 
  })
  console.log(filteredTodoList);
  /* tenrário funciona tanto no Javascript quanto no JSX */

  const addTodoToTodoList = (todo) => {
    const newTodo = { ...todo, id: uuidv4()};
    setTodoList([...todoList, newTodo]);
  } 

  const removeTodoFromTodoList = (todoId) => {
    /* tudo menos o item a ser removido */
    if(confirm("Você realmente deseja excluir essa nota")){
      const newTodoList = todoList.filter(todo => todo.id !== todoId);
      setTodoList(newTodoList);
    }    
  }
   
  return (
    <div className="App">
     <TodoPage filteredTodoList={filteredTodoList} addTodoToTodoList={addTodoToTodoList} removeTodoFromTodoList={removeTodoFromTodoList} setFilter={setFilter} />
    </div>
  )
}

export default App
