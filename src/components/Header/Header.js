import React from "react";

import './Header.css';


const Header = ({todoList}) =>{

    const doneTodo = todoList.filter(el => el.done).length;
    const todoData = todoList.length - doneTodo ;
    console.log(todoData)
    return(
        <div className="Header">
            <h1>Todo list</h1>
            <h2>more to do {todoData} , done {doneTodo}</h2>
        </div>
    )
}

export default Header;
