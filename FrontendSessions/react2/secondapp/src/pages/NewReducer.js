import React,{useContext} from 'react'
import { MyContext1 } from '../components/layout/ContextReducer'

function NewReducer() {
    const[countState,dispatch]=useContext(MyContext1)
  return (
    <>
    <p>Welcome to new reducer hook</p>
    <p>You clicked {countState.count} times</p>
    <button onClick={()=>{dispatch({type:"Increment"})}}>Increment</button>
    <button onClick={()=>{dispatch({type:"Decrement"})}}>Decrement</button>

    </>
    
  )
}

export default NewReducer