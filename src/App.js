import React from "react";
import Navigation from "react-key-navigation";

import Home from "./pages/Home.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Navigation>
        <Home />
      </Navigation>
    );
  }
}

export default App;
