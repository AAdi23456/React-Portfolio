import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main";

/**
 * This is a React function that renders a website with a preloader and various components.
 * @returns The `App` component is being returned, which contains a `Router` component, a `Preloader`
 * component, a `div` element with a class of "App" and an id of either "no-scroll" or "scroll"
 * depending on the value of the `load` state, and three other components (`Navbar`, `Main`, and
 * `Footer`).
 */
function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <Main />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
