import React, { useState } from "react";

export const TodoCreateForm = ({addTodoToTodoList}) => {
   /* reflexo exato do estado */
   const [formData, setFormData] = useState({
      title: "",
      content: "",
      category: "educacao",
   });

   const submit = (event) => {
      event.preventDefault();

      if(formData.title !== "" && formData.content !== ""){
         addTodoToTodoList(formData);
      } else {
         alert("Você precisa preencher os campos para enviar o formulário.")
      }     
      
      setFormData({
         title: "",
         content: "",
         category: "educacao",  
      })
   }

   return (
      <form onSubmit={submit} noValidate>
         <input type="text" value={formData.title} onChange={(event) => setFormData({ ...formData, title: event.target.value })} />
         <input type="text" value={formData.content} onChange={(event) => setFormData({ ...formData, content: event.target.value })} />
         <select value={formData.category} onChange={(event) => setFormData({ ...formData, category: event.target.value })}>
            <option value="educacao">Educação</option>
            <option value="trabalho">Trabalho</option>
         </select>
         <button type="submit">Adicionar nota</button>
      </form>
   );
};
