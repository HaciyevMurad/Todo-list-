import React, {Component} from 'react';
import Header from "../Header";
import SearchPanel from "../SearchPanel";
import TodoList from "../TodoList";
import AddNewTask from "../AddNewTask";
import ActiveBlock from "../ActiveBlock";

import './App.css';


  export default class App extends Component {
        idMax = 100;
      state = {
          todoList : [
              {label: 'Позвонить маме', important: false, done: false, id: 1},
              {label: 'Позвонить клиенту', important: false, done: false, id: 2},
              {label: 'Купить продукты', important: false, done: false, id: 3},
          ],
          trim: '',
          filter: 'all'
      }

      onDeleteItem = (id) =>{
          this.setState(({todoList}) =>{
              const idx = todoList.findIndex(element => element.id === id);
              const newArray = [...todoList.slice(0, idx), ...todoList.slice(idx + 1)];
                return{
                    todoList: newArray
                };
          });
      };

      onAddItem = (label) => {
        this.setState(({todoList})=>{
            const oldItem = [...todoList];
            const newItem = {
                label,
                important: false,
                done: false,
                id: this.idMax++
            };

            const newArr = [...oldItem, newItem];
            return{
                todoList: newArr
            }
        })
      }

      onToggleDone = (id) => {
         this.setState(({todoList})=>{
             return{
                 todoList: this.onToggleProps(todoList, id,'done')
             };
         });
      };

      onToggleImportant = (id) =>{
          this.setState(({todoList}) =>{
              return{
                  todoList: this.onToggleProps(todoList,id, 'important')
              };
          });
      };

      onToggleProps = (arr,id,props) =>{
              const idx = arr.findIndex(el => el.id === id);
              const oldItem = arr[idx];
              const newItem = {
                  ...oldItem,
                  [props]: !oldItem[props]
              };
              return [...arr.slice(0, idx) ,newItem, ...arr.slice(idx + 1) ];

      };

      search = (arr, trim) =>{
         return arr.filter(el => el.label.indexOf(trim) > -1)
      };

      onChangeState = (trim) =>{
          this.setState({trim})
      };

      filter = (items, filter) =>{

          switch(filter){
                case 'all':
                    return items;
                case 'active':
                    return items.filter(el => !el.done);
                case 'done':
                  return items.filter(el => el.done);
                default:
                  return items;
            }
      }

      onChangeFilter = (name) =>{
          this.setState({filter:name})
      }

      render() {
          const {todoList,trim,filter} = this.state;
          const visibleItem = this.filter(this.search(todoList,trim),filter)
          console.log(visibleItem)
          return (
              <div className="App">
                  <Header  todoList={todoList}/>
                  <div className="d-flex justify-content-between">
                      <SearchPanel onChangeState={this.onChangeState} />
                      <ActiveBlock
                          onChangeFilter={this.onChangeFilter}
                          filter={filter}
                      />
                  </div>

                  <TodoList
                      todoList={visibleItem}
                      onDeleteItem={this.onDeleteItem}
                      onToggleDone={this.onToggleDone}
                      onToggleImportant={this.onToggleImportant}
                  />
                  <AddNewTask  onAddItem={this.onAddItem}/>
              </div>
          );
      }

  }

