import React, { useState } from "react";
import AddFrom from "./components/AddFrom";
import ListTodos from "./components/ListTodos";
import "bootstrap/dist/css/bootstrap.min.css";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const theme = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={`vh-100  ${darkMode ? "bg-dark" : "bg-light"}`}>
      <div className="container p-5">
        <div className="d-flex justify-content-end p-0 ">
          <a className="fs-5 "></a>
          <button
            onClick={() => theme()}
            className={`rounded-circle p-1 shadow cursor-pointer border-secondary ${
              darkMode ? "bg-white text-dark " : " bg-dark text-white "
            }`}
          >
            {darkMode ? <CiLight /> : <FaMoon />}
          </button>
        </div>
        <h2 className="text-center text-primary">
          REDUX <span className="text-warning">CRUD</span>
        </h2>
        <AddFrom />
        <ListTodos />
      </div>
    </div>
  );
};

export default App;
