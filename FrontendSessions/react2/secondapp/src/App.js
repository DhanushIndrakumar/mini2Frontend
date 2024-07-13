import logo from './logo.svg';
import './App.css';
import { createContext, useState } from'react';
import Home from './pages/Home';
import About from './pages/About';
import NewForm from './pages/NewForm';
import Uncontrolled from './pages/Uncontrolled';
import ReducerHook from './pages/ReducerHookOne.tsx';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import ContextReducer from './components/layout/ContextReducer.js';
import NewReducer from './pages/NewReducer.js';
import CallbackMemo from './pages/CallbackMemo.js';
//Context should always be created at the top level meaing in app.js
export const MyContext =createContext();

function App() {


  //conditional rendering
 // const[route,setRoute]=useState("home");

 const[contextState,setContextState]=useState({
  name:"",
  id:""
 });
  


  return (
    // <div className="App">
    //   {/* //{route==="home"? <Home />:<About />} */}
    //   <Home />
    //   <About />
    // </div>
    //routing
    <ContextReducer>
    <MyContext.Provider value={{contextState,setContextState}}>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/newForm" element={<NewForm/>} />
        <Route path="/uncontrolledForm" element={<Uncontrolled/>} />
        <Route path="/reducer" element={<ReducerHook/>} />
        <Route path="/newReducer" element={<NewReducer/>} />
        <Route path="/callbackMemo" element={<CallbackMemo/>} />
      </Routes>
    </Router>
    </MyContext.Provider>
    </ContextReducer>
  );
}

export default App;
