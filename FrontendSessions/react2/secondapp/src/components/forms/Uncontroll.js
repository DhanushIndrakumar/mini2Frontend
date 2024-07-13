import {React,useRef} from 'react'

function Uncontrol() {

  const name=useRef();
  const email=useRef();
  const selectedOption=useRef();
  const handleSubmit=(event)=>{
    event.preventDefault();
    console.log(name.current.value);
    console.log(email.current.value);
    console.log(selectedOption.current.value);  


  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:
      <input ref={name} type="text"></input>
      </label>
      <br>
      </br>
      <label>Email:
        <input ref={email}type="email"></input>
      </label>
      <label>
            Select an Option:
            <select ref= {selectedOption} >
                <option value="option1" selected>Option1</option>
                <option value="option2">Option2</option>
                <option value="option3">Option3</option>
                <option value="option4">Option4</option>
            </select>
        </label>
        <button type="submit">Submit</button>
        <br></br>
        {/* <div>
          <div>Name: {name.current.value}</div>
          <div>Email: {email.current.value}</div>
          <div>Selected Option: {selectedOption.current.value}</div>
        </div> */}
    </form>
  )
}

export default Uncontrol