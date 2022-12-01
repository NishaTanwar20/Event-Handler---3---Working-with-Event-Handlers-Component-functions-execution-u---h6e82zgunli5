import React from 'react'
import '../styles/App.css';

const App = () => {
    let prevVal = "";
    let prevNum ="";
    const handleInput = (event) =>{
      // console.log(typeof event.target.value)
    if(event.target.id === 'num-input'){
        // prevNum;
        prevNum = prevNum+event.target.value;
        console.log(prevNum);
    }
    if(event.target.id === 'text-input'){
        // prevVal ="";
        prevVal = prevVal+event.target.value;
        console.log(prevVal);
    }
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
