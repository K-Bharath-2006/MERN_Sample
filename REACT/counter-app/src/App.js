import { useEffect, useState } from "react";
import "./App.css";
import Counter from "./Counter";

function App() {
  let [val, setVal] = useState(0);
  let [data,setData] = useState([]);

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
      let timer = setTimeout(() => {
        setVal(0);
      },2000);
      return() => {
        clearTimeout(timer); // to wait for two seconds to click continuosly so it delete the previous one if it not completed the two seconds
      }
    }
  },[val]);

  useEffect(() => {
    const fetchApi = async ()=> {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const fetchData = await res.json();
        setData(fetchData);
      } catch (error) {
        console.log("Error :",error);
      }
    };
    fetchApi();
  },[]);

  console.log(data);
  return (
    <div className="App">
      <h1>Welcome to Great Karikalan Magic Show</h1>
      <Counter
        val={val}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      ></Counter>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return(
              <tr>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default App;
