import { Button } from 'bootstrap';
import React, { Component } from 'react';

class Counter extends React.Component {
    state = {
        count: 7
    }

    render() { 
        
            let classes="badge m-2 badge-";
            classes += this.state.count===0? "warning":"primary";
            return (<div>
                <span className={classes}>
                 {this.formatCount()}</span>
            <button className='btn btn-secondary btn-sm'>increment</button>
            </div>);
    }

    formatCount(){
        return (this.state.count===0 ? "Zero": this.state.count);
    }
}
 
export default Counter;