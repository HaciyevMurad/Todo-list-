import React from "react";
import './TodoListItem.css';

    const TodoListItem = ({
            label,
            important,
            done ,
            onDeleteItem ,
            onToggleDone ,
            onToggleImportant
        }) => {

        let classNames = '';

        if(done) {
            classNames += ' done'
        }

        if(important){
            classNames += ' important';
        }

        return(
            <div className="TodoListItem">
                <span className={classNames}
                    onClick={onToggleDone}
                >
                    {label}
                </span>
                <div>
                    <button
                        className="btn btn-outline-danger"
                        onClick={onDeleteItem}

                    >
                        <i className="fa fa-trash-o" />
                    </button>

                    <button
                        className="btn btn-outline-success"
                        onClick={onToggleImportant}
                    >
                        <i className="fa fa-exclamation" />
                    </button>
                </div>
            </div>
        )


}

export default TodoListItem;

