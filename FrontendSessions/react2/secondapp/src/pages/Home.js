import React, { useState } from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'


function Home() {
  const url=process.env.REACT_APP_API_URL ;
  const[apiState,setApiState]=useState("");
  const apiFunction=async()=>{
    const apiData= await fetch(url,{method: "GET"});
    const data=await apiData.json();
    console.log(data);
    setApiState(data);
  }
 // apiFunction();
 //You can also use useEffect when u don't have the button settings
 // useEffect(()=>{
 //   apiFunction();
 // },[])
  return (
    <>
    <Navbar />
    <div>Home Page</div>
    <div>Welcome to everyone</div>
    <div>
    <p>id:{apiState.id}</p>
    <p>{apiState.punchline}</p>
    <p>{apiState.setup}</p>
    <p>{apiState.type}</p>
    </div>
    <button onClick={apiFunction}>Click me to view the data</button>
    <Footer />
    </>
  )
}

export default Home