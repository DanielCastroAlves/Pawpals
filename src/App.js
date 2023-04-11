import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./assets/scss/pawpals.scss";
import About from "./page/About";
import Home from "./page/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        {/* outras rotas aqui */}
      </Switch>
    </Router>
  );
}

export default App;
