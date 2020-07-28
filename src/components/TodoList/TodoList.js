import React from "react";
import TodoListItem from "../TodoListItem";
import './TodoList.css';


const TodoList = ({todoList,onDeleteItem, onToggleDone , onToggleImportant}) =>{

    const el = todoList.map(todo =>{
        const {id, ...todoLabel} =  todo;

        return(
            <li key={id} className="list-group-item">
               <TodoListItem
                   {...todoLabel}
                   onDeleteItem={()=>onDeleteItem(id)}
                   onToggleDone={()=> onToggleDone(id)}
                   onToggleImportant={()=> onToggleImportant(id)}
               />
            </li>
        )
    })
    return(

        <ul className="list-group">
            {el}
        </ul>
    )
}

export default TodoList;
