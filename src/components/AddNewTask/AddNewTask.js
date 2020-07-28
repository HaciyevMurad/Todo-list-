import React, {Component} from "react";

import './AddNewTask.css';


export default class AddNewTask extends Component {
    state ={
        label : ''
    }
    onChange = (e) =>{
       this.setState({
           label: e.target.value
       })
    }


    onSubmit = (e) =>{
         e.preventDefault();
        this.props.onAddItem(this.state.label)
        this.setState({
            label: ''
        })

    }

    render(){
        // const {onAddItem} = this.props

        return(
            <form className="AddNewTask" onSubmit={this.onSubmit}>
                <input onChange={this.onChange} value={this.state.label} />
                <button
                    className="btn btn-outline-secondary"


                >
                    Add New Task
                </button>
            </form>
        )
    }
}
