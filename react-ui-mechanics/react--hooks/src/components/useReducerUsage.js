import React from "react";

//https://reactjs.org/docs/hooks-reference.html#usereducer

function reducer(state, action) {
    if (action === 'increment') {
        return state + 1
    } else if (action === 'decrement') {
        return state - 1
    } else if (action === 'reset') {
        return 0
    } else {
        throw new Error()
    }
}

export function CounterWorkReducer() {
    const [count, dispatch] = React.useReducer(
        reducer,
        0
    )

    return (
        <React.Fragment>
            <h1>{count}</h1>
            <button onClick={() => dispatch('increment')}>
                +
            </button>
            <button onClick={() => dispatch('decrement')}>
                -
            </button>
            <button onClick={() => dispatch('reset')}>
                Reset
            </button>
        </React.Fragment>
    );
}
