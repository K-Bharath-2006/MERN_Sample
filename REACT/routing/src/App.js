import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './Common/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet></Outlet>
    </div>
  );
}

export default App;
