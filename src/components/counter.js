import React from 'react'
import { connect } from 'react-redux'
import * as actionTypes from '../actions/actionTypes'

function counter(props) {
    
    return (
        <div>
            <h1>Counter </h1>
            <br />
            <button onClick={() => props.dispatch({ type: actionTypes.DECREMENT })}>-</button>
            <b style={{ fontSize: 40 }}>{props.counter}</b>
            <button onClick={() => props.dispatch({ type: actionTypes.INCREMENT })}>+</button>
        </div>
    )
}

const mapped = connect((state) => ({ counter: state }));

export default mapped(counter);
