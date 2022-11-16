import React from 'react'
import '../styles/App.css';
import {useState} from 'react';
const App = () => {
  const [message , setMessage] = useState('');
  const handleInput = (event) =>{
   // use console.log
   setMessage(event.target.value);
   console.log(event.target.value);
  }

  // do not change id of input elements
  return (
    <div id="main">
      <label htmlFor='text-input'>Text Input:- </label>
      <input id="text-input" type={'text'} onChange={handleInput}/>

      <br/>
      <br/>

      <label htmlFor='num-input'>Number input</label>
      <input id="num-input"  type={'number'} onChange={handleInput}/>
      <br/>
    </div>
  )
}


export default App;
