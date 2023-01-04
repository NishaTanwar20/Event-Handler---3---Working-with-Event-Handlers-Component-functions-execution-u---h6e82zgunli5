import React, {useStste} from 'react'
import '../styles/App.css';

const App = () => {
  const [textInput, setTextInput] = useState('');
  const [numInput, setNumInput] = useState('');

  // Define the handleInput function
  const handleInput = (event) => {
    const { value, id } = event.target;

    // Update the appropriate state variable and log the input value
    if (id === 'text-input') {
      setTextInput(value);
      console.log(`Input in #text-input is ${value}`);
    } else if (id === 'num-input') {
      setNumInput(value);
      console.log(`Input in #num-input is ${value}`);
    }
  }

  // do not change id of input elements
  return (
    <div id="main">
      <label htmlFor='text-input'>Text Input:- </label>
      <input id="text-input" type="text" onChange={handleInput} value={textInput} />

      <label htmlFor='num-input'>Number input</label>
      <input id="num-input" type="number" onChange={handleInput} value={numInput} />
      
    </div>
  )
}


export default App;
