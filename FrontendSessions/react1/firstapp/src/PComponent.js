import React from 'react'

function PComponent(props) {

    const x=10;
  return (
    <div>
        <p>
          Edit <code>src/App.js</code> and save to reload.{x}
        </p>
        <p>
            Hello world {props.zvalue} hii {props.yvalue}
        </p>
    </div>
  )
}

export default PComponent