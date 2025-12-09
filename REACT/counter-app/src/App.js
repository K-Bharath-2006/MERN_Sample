import './App.css';
import GrandFather from './GrandFather';
function App() {
  let msg = "Welcome Home Black";
  // let age = 20
  return (
    <div className="App">
      <h1>Welcome to Great Karikalan Magic Show</h1>
      <GrandFather m = {msg} />
    </div>
  );
}

export default App;
