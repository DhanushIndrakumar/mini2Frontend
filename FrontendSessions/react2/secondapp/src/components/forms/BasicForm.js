import {React,useState} from 'react'

function BasicForm() {
    
    const[name,setName]=useState(""); //Note the name used here must be same in the values of the forms
    const[inputError,setInputError]=useState(null); 
    const[email,setEmail]=useState("");
    const[selectedOption,setSelectedOption]=useState("option1");

    const handleChange=(event)=>{
        const value=event.target.value;
        setName(value);
        if(value.length<0){
           //console.log("Input must be atleast 5 characters long") 
           setInputError("Input must be atleast 5 characters long");
        }else{
            setInputError(null);
        }
        
    }

    const handleSubmit=(e)=>{
        e.preventDefault();//event not to reload
        if(name.length<5){
            //console.log("Input must be atleast 5 characters long") 
            setInputError("Input must be atleast 5 characters long");
        }else{
            setInputError(null);
        }
        console.log(`Name:${name}`);
        console.log(`Email:${email}`);
        console.log(`option:${selectedOption}`);
    }
   
  return (
    <form onSubmit={handleSubmit}>
        <label>Name:
        <input type="text" value={name} onChange={handleChange}></input>
        </label>
        {/* {inputError!=null ? <div style={{color:"red"}}>Input error</div> : null} */}
        {inputError && <div style={{color:"red"}}>Input error</div>}
        <br></br>
        <label>Email:
        <input type="email" value={email} onChange={(event)=>{setEmail(event.target.value)}}></input>
        </label>
        <br></br>
        <label>
            Select an Option:
            <select value={selectedOption} onChange={(event)=>{setSelectedOption(event.target.value)}}>
                <option value="option1" selected>Option1</option>
                <option value="option2">Option2</option>
                <option value="option3">Option3</option>
                <option value="option4">Option4</option>
            </select>
        </label>
        <br></br>
        {/* <div>
            <p>Name:{name}</p>
            <p>Email:{email}</p>
            <p>Selected Option:{selectedOption}</p>
        </div> */}
        <br></br>
        <button type="submit" >Submit</button>
        {/* displaying the values */}
        

    </form>
  )
}

export default BasicForm