import React, { Component } from "react";
import Home from "./containers/Home";
import { BrowserRouter, Route } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route path="/" exact component={Home} />
        </BrowserRouter>
      </div>
    );
  }
}
// const mapStateToProps = (state, ownProps)

export default App;
