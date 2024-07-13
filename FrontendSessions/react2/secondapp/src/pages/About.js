import {React,useContext} from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { MyContext } from '../App'
import { MyContext1 } from '../components/layout/ContextReducer'

function About() {
  //let{contextState,setContextState}=useContext(MyContext);
  let{contextState}=useContext(MyContext);
  const[countState,dispatch]=useContext(MyContext1);

  return (
    <>
    <Navbar />
    <div>About page</div>
    <div>
      <p>The context data:</p>
      <p>{contextState.name}</p>
      <p>{contextState.id}</p>
      <p>{countState.count}</p>
    </div>
    <Footer />
    </>
  )
}

export default About