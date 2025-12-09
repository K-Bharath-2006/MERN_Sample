import './App.css';
import Component1 from './Component1';
import Com,{ Component2 } from './Component2'; 
import Com2,{Component3} from './Component3';
function App() {
  let msg = "Welcome Home Black";
  let age = 20
  return (
    <div className="App">
      <h1>Welcome to React Learning</h1>
      <Component1 q = {msg} val = {age}></Component1>
      <Component2></Component2>
      <Com></Com>
      <Component3></Component3>
      <Com2 ></Com2>
    </div>
  );
}

export default App;
