import './App.css';
import Todoinput from './componants/todoinput';
import Todolist1 from './componants/todolist1';
import 'bootstrap/dist/css/bootstrap.min.css';
import {v4 as uuid} from 'uuid'
import React, { Component } from 'react'

export default class App extends Component {
  state={
    items:[],
    id:uuid(),
    item:'',
    editItem:false
  };
  changehandler=(e)=>{
    this.setState({
      item:e.target.value
    });
  };
  submithandler=(e)=>{
      e.preventDefault();
      const newitem={
        id:this.state.id,
        title:this.state.item
      };
      console.log(newitem);
      const Updateditem=[...this.state.items,newitem];

      this.setState({
        items:Updateditem,
        item:'',
        id:uuid(),
        editItem:false
      });

  };
  clearlist=()=>
  {
      this.setState(
        {
          items:[]
        }
      )
  };
  deletehandler=(id)=>{
     const filteredItems=this.state.items.filter(item=>item.id!==id);
     this.setState({
      items:filteredItems
     })
  };

  edithandler=(id)=>{
    const filteredItems=this.state.items.filter(item=>item.id!==id);
    const selectedItem=this.state.items.find(item=>item.id===id);
    console.log(selectedItem);
    this.setState({
     items:filteredItems,
     item:selectedItem.title,
     editItem:true,
     id:id
    })
  };
  render() {
    return (
      <>
      <div className="container">
       <div className="row">
         <div className="col-10 col-md-3 mt-4 mx-auto">
           <h3 className='text-center'>Todo Input</h3>
         </div>
       </div>
      <Todoinput item={this.state.item} changehandler={this.changehandler} submithandler={this.submithandler}
      editItem={this.state.editItem}/>
      <Todolist1 items={this.state.items} clearlist={this.clearlist} deletehandler={this.deletehandler} edithandler={this.edithandler}/>
      </div>
      </>
    )
  }
}

