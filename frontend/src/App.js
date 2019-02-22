import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ShowPage from "./ShowPage";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <header>
            <h1>ACME Inc</h1>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
            </nav>
          </header>
          <main>
            <Route exact path="/" component={ShowPage} />
            <Route exact path="/:slug" component={ShowPage} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
