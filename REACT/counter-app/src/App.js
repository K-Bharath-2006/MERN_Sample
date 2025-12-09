import { useState } from 'react';
import './App.css';


function App() {
  let [val,setVal] = useState(0);

  const handleIncrement = () =>{
    setVal(val+1)
  }
  const handleDecrement = () =>{
    setVal(val-1)
  }
  return (
    <div className="App">
      <h1>Welcome to Great Karikalan Magic Show</h1>
      <div className='counter'> 
        <h1>{val}</h1>
        <button className='inc' onClick={handleIncrement}>Increment</button>
        <button className='dec' onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
}
export default App;
