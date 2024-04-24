import React, { useReducer } from 'react';

function UseReducerHook() {

    // Reducer function
const reducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 };
      case 'DECREMENT':
        return { count: state.count - 1 };
      default:
        return state;
    }
  };
    // Initializing state with an object { count: 0 }
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
      <div>
        <p>Count: {state.count}</p>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      </div>
    );
  };
  

export default UseReducerHook