import { Button } from 'bootstrap';
import React, { Component } from 'react';

class Counter extends React.Component {
    state = {
        count: 0
    }
    render() { 
        return (<div>
            <span>{this.formatCount()}</span>
            <button>increment</button>
            </div>);
    }

    formatCount(){
        return (this.state.count===0 ? <h1>zero</h1>: this.state.count);
    }
}
 
export default Counter;