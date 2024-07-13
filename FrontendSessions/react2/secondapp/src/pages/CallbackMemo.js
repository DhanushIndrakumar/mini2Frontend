import React,{useCallback, useState,useEffect,useMemo} from 'react'

function CallbackMemo() {
    const[count,setCount]=useState(0);
    const expensiveValue=useMemo(()=>{
        let result=0;
        for(let i=0;i<100000;i++){
            result+=i;
        }
        return result;
    },[])//this expression will be recomputed only once
    
    //UseCallback is used to reduce the number of re-creation of funcions
    const handleClick=useCallback(()=>{
        setCount(count+1);
    },[count])
    // const trial=useEffect(()=>{
    //     setCount(count+1);

    // },[count])
    //when there is a change in the count then only re-render it
    const handleNothing=()=>{
        console.log("nothing");
    }
  return (
    <>
    <div>CallbackMemo</div>
    <p>Value:{expensiveValue}</p>
    <button onClick={handleClick}>click me</button>
    <p>{count}</p>
    </>
  )
}

export default CallbackMemo