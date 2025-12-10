import { useEffect, useState } from "react";
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

  // useEffect(() => {
  //   console.log("useEffect -Run Once");
  // },[]);
  // useEffect(() => {
  //   console.log("useEffect - with array");
  // },[val]);
  // useEffect(() => {
  //   console.log("useEffect - without array");
  // },);

  useEffect(() => {
    if(val < 0){
      setTimeout(() => {
        setVal(0);
      },2000);
    }
  },[val]);
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
