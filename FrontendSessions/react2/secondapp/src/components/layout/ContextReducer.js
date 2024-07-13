import React, { useReducer ,createContext} from 'react'

export const MyContext1=createContext();


function reducer(state,action){
    switch(action.type){
        case "Increment":
            return {count:state.count+1};
        case "Decrement":
            return {count:state.count-1};
        default:
            console.log("some issues");
    }

}
//why we keep certain things outside the main funcion is to reduce the re-rendering part
const initialState={count:0};

function ContextReducer(props) {
    const[countState,dispatch]=useReducer(reducer,initialState);
  return (
    <>
    <MyContext1.Provider value={[countState,dispatch]}>
        {props.children}
    </MyContext1.Provider>
    </>
  )
}

export default ContextReducer