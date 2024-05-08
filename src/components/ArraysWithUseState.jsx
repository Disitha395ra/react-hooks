import React from 'react'
import { useState } from 'react'

function ArraysWithUseState() {
    const [ items, setItems ] = useState(['Apple', 'Banana', 'Cherry']);  
    //const addItem = () => setItems([...items, 'orange']);
    const removeItem = (index) => {
        setItems(items.filter((_, i) => i !== index));
    };
    const updateItem = (index) => {
        const newItems = [...items];
        newItems[index] = 'Pineapple';
        setItems(newItems);
    };

    return (
    <div>
      <h1>Arrays with useState Example</h1>
      <ul>
        {items.map((item, index) => (
            <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Remove</button>
            <button onClick={() => updateItem(index)}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ArraysWithUseState
