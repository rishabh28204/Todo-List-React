import React, { Component } from 'react';
import Todoitem from './todoitem';
export default class todolist1 extends Component {
  render() {
    const {items,clearlist,deletehandler,edithandler}=this.props;
    return (
      <>
      <ul className="list-group my-5">
        <h3 className="text-center text-capitalize">Todo List</h3>
        {
            items.map(item=>{
                return(
                    <Todoitem key={item.id} title={item.title}
                    deletehandler={()=>deletehandler(item.id)}
                    edithandler={()=>edithandler(item.id)}
                    />
                )
            })
        }
        <button type="submit" className="btn btn-danger text-capitalize mt-5 mx-auto" onClick={clearlist}>Clear List</button>
      </ul>
      </>
    )
  }
}
