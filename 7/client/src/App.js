import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/Nav";

import Home from "./pages/Home";
import Saved from "./pages/Saved";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
