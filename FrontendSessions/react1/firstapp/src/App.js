import logo from './logo.svg';
import './App.css';
//import './button.css';
import customCSS from  './button.module.css';
import PComponent from './PComponent';
import React, { useEffect, useState } from 'react';

function App() {

  
  const z=23/3+2;

 // const y=1;//on a click of button update to 10
   const[stateZ,setStateZ]= useState(1);
   const[stateW,setStateW]=useState("a");

  const liData=[1,2,3,4,5]
  let data=liData.map(function (i){
    return <li key={i} >{i}</li>

  })

  const handleClick=()=>{
    setStateZ(stateZ+1);
  }
  const handleClick2=()=>{
    setStateW(stateW+1);
  }

  useEffect(()=>{
    console.log("react is amazing!");

},[stateZ,stateW])//Use effect tracks both the values and acts when theres a change in either of values
//another one
useEffect(()=>{
  console.log("react is amazing!");
  return(()=>{
//componentWillUnmount()
  });
})
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PComponent zvalue={z} yvalue={stateZ} /> 
        {/* sending z value as props */}
        {/* <p>
          {z}
        </p> */}
        
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {stateW}
        <button style={{padding:"20px",borderRadius:"15px",backgroundColor:"cyan"}} onClick={handleClick}>Click me</button>
        <br></br>
        <button className="customCSS.buttonCss" onClick={handleClick2}>Click me 2</button>

      </header>
      <div id="something">
        <ul>
          {data}
        </ul>

      </div>

    </div>
  );
}

export default App;
