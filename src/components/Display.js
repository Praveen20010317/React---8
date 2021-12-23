import React, { Component } from 'react'
import './App.css'
export default class Display extends Component {
    render() {
        return (
            <div>
            {
                this.props.item1.map((item1, i) => {
                return (
                    <div className="display">
                        <h2 className="title1" id={item1.split(' ')[0]}>{item1.split(' ')[0]}</h2>
                        <p id="desc1">{item1.split(' ')[1]}</p>
                        <button id="delete" onClick={this.props.handleDelete.bind(null,item1)}>Delete</button>
                    </div>
                )})
            }
            </div>
        );  
    }
}
