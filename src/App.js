import React from "react";
import { Router, Route, browserHistory, IndexRoute } from "react-router";

import Layout from "./components/Layout.js";

import Splash from "./pages/Splash.js";
import Home from "./pages/Home.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" exact component={Splash} />
        <Route path="/home" component={Layout}>
          <IndexRoute component={Home} />
        </Route>
      </Router>
    );
  }
}

export default App;
