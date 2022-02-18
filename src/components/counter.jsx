import { Button } from 'bootstrap';
import React, { Component } from 'react';

class Counter extends React.Component {
    state = {
        count: 0
    }

    constructor(){
        super();
        this.handleIncrement=this.handleIncrement.bind(this);
        this.handleDecrement=this.handleDecrement.bind(this);
    }

    render() { 
        
            return (<div>
                <span className={this.getBadgeClasses()}>
                 {this.formatCount()}</span>
            <button className='btn btn-secondary btn-sm' onClick={this.handleIncrement}>increment</button>
            <button className='btn btn-secondary btn-sm' onClick={this.handleDecrement}>decrement</button>

            </div>);
    }

    handleIncrement(){
        this.setState({count: this.state.count+1});
    }

    handleDecrement(){
        this.setState({count: this.state.count-1});
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        let inc="";
        inc+= this.state.count >0 ? "primary" : "danger";
        classes += this.state.count === 0 ? "warning" : inc;
        return classes;
    }

    formatCount(){
        return (this.state.count===0 ? "Zero": this.state.count);
    }
}
 
export default Counter;