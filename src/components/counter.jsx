import { Button } from 'bootstrap';
import React, { Component } from 'react';

class Counter extends React.Component {
    state = {
        count: 0
    }

    style = {
        fontSize : 10,
        fontWeight : 'Bold'
    }
    render() { 
        return (<div>
            <span style={this.style} className='badge badge-primary m-2'>{this.formatCount()}</span>
            <button className='btn btn-secondary btn-sm'>increment</button>
            </div>);
    }

    formatCount(){
        return (this.state.count===0 ? "Zero": this.state.count);
    }
}
 
export default Counter;