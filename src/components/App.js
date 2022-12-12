import React from 'react'
import '../styles/App.css';

const App = () => {
    var text = "";
    var number = "";
    const handleInput = (event) =>{
    if(event.target.type === "text"){
       text = text+event.target.value;
        console.log(event.target.value);
    }
    if(event.target.id === 'number'){
        number = number+event.target.value;
        console.log(num);
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
