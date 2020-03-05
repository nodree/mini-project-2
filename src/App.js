import React, { Component } from "react";
import Home from "./containers/Home";
import Movie from "./containers/Movie";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route path="/" exact component={Home} />
          <Route path="/movie" component={Movie} />
        </BrowserRouter>
      </div>
    );
  }
}
// const mapStateToProps = (state, ownProps)

export default App;
