import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert(" Dark mode enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(" Light mode enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar title="Texutils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
          <Route exact path="/about"
            element = {<About mode={mode}/>}/> 
          <Route exact path="/"
            element = {<Textform showAlert={showAlert} heading=" Try TextUtils- Word Counter, Character Counter, Remove extra spaces" mode={mode}/>}/>
          </Routes> 
        </div>
      </Router> 
    </> 
  );
}

export default App;
