import React, { Component } from 'react';
import Counter from './counter';

class Counters extends React.Component{

    state= {
        counters:
            [{id:0,value:0},
                {id:0,value:5},
                {id:0,value:0},
                {id:0,value:0}
            ]
    };
    
    render(){
        return (
            <div>
                {this.state.counters.map(counter => (
                <Counter key={counter.id} value={counter.value}/>
                ))}
            </div>
        )
    }
}

export default Counters;