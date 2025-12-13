import "./App.css";
import { NavLink, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="links">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/register-with-hooks"}>RegisterWithHooks</NavLink>
          <NavLink to={"/register-without-hooks"}>RegisterWithoutHooks</NavLink>
        </div>
      </header>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
