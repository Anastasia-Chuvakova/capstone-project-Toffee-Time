import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import SessionsTimer from "./components/SessionsTimer";
import EndRecord from "../pages/EndRecord";
import Header from "./components/Header";
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/sessionstimer/" component={SessionsTimer} />
            <Route path="/sessionstimer/:id" component={SessionsTimer} />
            <Route path="endrecord" component={EndRecord} exact />
          </Switch>
        </Router>
      </div>
    );
  }
}
