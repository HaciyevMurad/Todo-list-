import React, {Component} from "react";

import './ActiveBlock.css';

export default class ActiveBlock extends Component{



   render(){
      const buttons = [
           {name: 'all' , label: 'All'},
           {name: 'active' , label: 'Active'},
           {name: 'done' , label: 'Done'},
       ];
       const  {filter,onChangeFilter} = this.props


       const button = buttons.map(({name , label }) => {
           const isActive = filter === name
           const clazz = isActive ? "btn-info" : "btn-outline-secondary"
           return (

               <button
                   key={name}
                   className={`btn ${clazz}`}
                   onClick={()=>onChangeFilter(name)}
               >
                   {label}
               </button>
           )
       })

       return(


           <div className="btn-group ActiveBlock">
               {button}
           </div>
       )
   }
}
