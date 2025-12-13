import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from "./Pages/Home";
import RegisterWithHooks from "./Pages/RegisterWithHooks";
import RegisterWithoutHooks from "./Pages/RegisterWithoutHooks";


const routerVariables = createBrowserRouter([
  {
    path:"/",
    element : <App />,
    children : [
      {
        path : "/",
        element : <Home />,
      },
      {
        path : "/register-with-hooks",
        element : <RegisterWithHooks />
      },
      {
        path : "/register-without-hooks",
        element : <RegisterWithoutHooks />
      },
      {
        path:"*",
        element: <h1>Page Not Found ... Please check the url</h1>
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routerVariables} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
