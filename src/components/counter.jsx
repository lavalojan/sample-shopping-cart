import { Button } from 'bootstrap';
import React, { Component } from 'react';

class Counter extends React.Component {
    state = {
        count: 0,
        tags : ["tag1", "tag2", "tag3"]
    }

    constructor(){
        super();
        this.handleIncrement=this.handleIncrement.bind(this);
    }

    render() { 
        
            return (<div>
                <span className={this.getBadgeClasses()}>
                 {this.formatCount()}</span>
            <button className='btn btn-secondary btn-sm' onClick={this.handleIncrement}>increment</button>
            <ul>{this.state.tags.map(tag => <li key={tag}>tag</li>)}</ul>

            </div>);
    }

    handleIncrement(){
        this.setState({count: this.state.count+1});
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        return (this.state.count===0 ? "Zero": this.state.count);
    }
}
 
export default Counter;