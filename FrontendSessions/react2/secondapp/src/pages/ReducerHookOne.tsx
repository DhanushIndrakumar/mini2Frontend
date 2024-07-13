import React, { useReducer } from 'react';

interface State {
  count: number;
  error: string | null;
}

interface Action {
  type: "increment" | "decrement";
}
//UseReducer can update multiple states
function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'increment':{
      const newCount=state.count + 1;
      const hasError=newCount>5;
      return { ...state, count: hasError?  state.count :newCount,
                         error: hasError? 'Maximum reached':null 
      };
    }
    case 'decrement':{
      const newCount=state.count-1;
      const hasError=newCount<0;
      return { ...state, count:hasError? state.count:newCount,
                         error:hasError? 'Minimum reached': null };
    }
    default:
      return state;
  }
  
}

function ReducerHookOne() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    error: null,
  });

  return (
    <>
      <div>Count: {state.count}</div>
      {state.error && <div>{state.error}</div>}
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </>
  );
}

export default ReducerHookOne;
