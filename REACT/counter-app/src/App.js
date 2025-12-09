import { useState } from "react";
import "./App.css";
import Counter from "./Counter";

function App() {
  let [val, setVal] = useState(0);

  const handleIncrement = () => {
    setVal(val + 1);
  };
  const handleDecrement = () => {
    setVal(val - 1);
  };
  return (
    <div className="App">
      <h1>Welcome to Great Karikalan Magic Show</h1>
      <Counter
        val={val}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      ></Counter>
    </div>
  );
}
export default App;
