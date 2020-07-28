import React, {Component} from "react";
import './SearchPanel.css';


export default class SearchPanel extends Component{
        state ={
            val: '',
        }

    onChangeInput = (e) =>{
            const targetValue = e.target.value;
            this.setState({val:targetValue})
            this.props.onChangeState(targetValue)
    }

    render(){

        return(
            <div className="SearchPanel">
                <input
                    onChange={this.onChangeInput}
                />

            </div>
        )
    }

}



