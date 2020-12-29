import React, {useState} from 'react';
import TodoForm from './TodoForm.js';
import Todo from './Todo';

export default function TodoList() {
    
    const [todos, setTodos] = useState([]);

   const addTodo = todo =>{
   if (!todo.text || /^\s*$/.test(todo.text)){
       return
   }
   setTodos([...todos,todo])
   const newTodo = [todo, ...todos]
   setTodos(newTodo)
 
  }
    const removeTodo = id =>{
      const removeArr = [...todos].filter(todo => todo.id !== id)
      setTodos(removeArr)
    }

    const completeTodo =id =>{
        let updatedTodos = todos.map(todo =>{
            if (todo.id === id){
                todo.isComplete = !todo.isComplete;

            }
            return todo;
        })
        setTodos(updatedTodos);
    }
    

    return (
        <div>
          <TodoForm onSubmit = {addTodo}/> 
          <h4> Total number of task: {todos.length}</h4>
          <Todo
          todos = {todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo} />
        </div>
    )
}
