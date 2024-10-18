import React, { useState } from 'react'

function Form() {
    const[data,setData]=useState(0)
    function ggagagsg(){
        setData(data+1)
    }
  return (
    <div>form
        <button onClick={ggagagsg}>click{data}</button>
    </div>
  )
}

export default Form;