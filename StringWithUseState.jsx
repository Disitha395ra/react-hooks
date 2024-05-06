import React from 'react'
import { useState } from 'react'

function StringWithUseState() {
    const [ text, setText ] = useState('Hello World!')
  return (
    <div>
      <p>Your Text { text }</p>
      <button onClick={()=> setText(text.split('').reverse().join(''))}>Reverse</button>
      <button onClick={()=> setText(text.toUpperCase())}>toUpperCase</button>
      <button onClick={()=> setText(text.toLowerCase())}>toLowerCase</button>
    </div>
  )
}

export default StringWithUseState
