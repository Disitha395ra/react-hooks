import React from 'react'
import { useState } from 'react'

function UseState() {
    const [ count, setCount ] = useState(0)
  return (
    <div>
      <h1>UseState - Example</h1>
      <p>You clicked { count }</p>
      <button onClick={ () => setCount(count + 1) }>Click me</button>
    </div>
  )
}

export default UseState
