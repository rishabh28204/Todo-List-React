import React, { Component } from 'react'

export default class todoinput extends Component {


  render() {
    const {item,changehandler,submithandler,editItem}=this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={submithandler}>
            <div className="input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text bg-primary text-white">
                        <i className="fas fa-book my-1"></i>
                    </div>
                </div>
                <input type="text" className='form-control text-capitalize' placeholder='add to do item' value={item} onChange={changehandler}/>
            <button type="submit" 
            className={
                editItem?'btn btn-success':'btn btn-primary'
            }
            
            > {editItem?"Edit Item":"Add Item"}</button>
            </div>
        </form>
      </div>
    )
  }
}
