import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
