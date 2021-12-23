import './App.css';
import React, { Component } from 'react'
import Display from './Display';

export default class Create extends Component {
  constructor() {
    super();
    this.state = {title: '', desc: '', item1: [] }
  }
  handleDelete(itemToBeDeleted) {
    var newItems = this.state.item1.filter((_item) =>{
      return _item != itemToBeDeleted
    });
    this.setState({item1 : newItems})
  }
  handleSubmit(event) {
    event.preventDefault();
    var tit = this.state.title;
    var desc = this.state.desc;
    var newItem1 = this.state.item1.concat(tit +" "+desc );
    this.setState({item1: newItem1});
    console.log(newItem1)
  }
  handleChangeTitle(event) {
    var tit = event.target.value;
    this.setState({title: tit})
  }
  handleChangeDesc(event) {
    var de = event.target.value;
    this.setState({desc: de});
  }
  render() {
    return (
      <div>
        <div id="header" >Keeper</div>
        <div id="create">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input type="text" placeholder="Title" id="title" onChange={this.handleChangeTitle.bind(this)} value={this.state.title}></input>
            <input type="text" placeholder="Take a note..." id="desc" onChange={this.handleChangeDesc.bind(this)} value={this.state.desc}></input>
            <button id="addNotes">Add</button>
          </form>
        </div>
        <Display handleDelete={this.handleDelete.bind(this)}
          item1={this.state.item1}/>
      </div>
    )
  }
}
