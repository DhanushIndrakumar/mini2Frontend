import {React,useState,useContext} from 'react'
import {MyContext} from "../../App";
import {useNavigate} from "react-router-dom";

function BasicFormTwo() {

    const navigate=useNavigate();
    let{contextState,setContextState}=useContext(MyContext);
    const[inputName,setName]=useState("");
    const[inputId,setId]=useState("");
    function handleName(event){
        const value=event.target.value;
        setName(value);
        setContextState({...contextState,name:value}); 
        //meaning just change the name value and keep the rest as it is
    }
    function handleId(event){
        const value=event.target.value;
        setId(value);
        setContextState({...contextState,id:value});
    }
    function handleSubmit(event){
        event.preventDefault();
        // console.log(inputName);
        // console.log(inputId);
        navigate("/about");
    }



  return (
    <>
     <form onSubmit={handleSubmit}>
        <label>Your Name:
        <input type="text" value={inputName} onChange={handleName}></input>
        </label>
        <br></br>
        <label>Your Id:
        <input type="email" value={inputId} onChange={handleId}></input>
        </label>
        <br></br>
        <button type="submit" >Submit</button>
        <div>
        Example:
        <br></br>
        <p>Name:{contextState.name}</p>
        <p>Id:{contextState.id}</p>

        </div>
    </form>
    </>
  )
}

export default BasicFormTwo;