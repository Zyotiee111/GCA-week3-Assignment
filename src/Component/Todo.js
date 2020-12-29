import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import {Button} from '@material-ui/core'


export default function Todo({todos, completeTodo,removeTodo}) {
    
    return todos.map((todo,index)=>(
        <div className= {todo.isComplete ? 'todo-row complete':'todo-row'}
        key = {index}>
            
            <div key = {todo.id} onClick = {() => completeTodo(todo.id)}>
            <p> Task :{todo.text} <br></br> Due Date : {todo.date}</p> 
            </div>

            <Button variant="contained" color="default" onClick={()=> removeTodo(todo.id)}> 
             <DeleteIcon/>
             </Button>

        </div>
        
    ))
        
}
 