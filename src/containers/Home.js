import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "../components/navbar/navbar";
import MovieList from "../components/movieList";
// import Footer from "../components/footer";
import Slider from "../components/slideshowComponent/SlideShow";
import { bindActionCreators } from "redux";

import { getMovieList } from "../actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { page: 1 };
  }
  componentDidMount() {
    this.props.actions.getMovieList(this.state.page, 1);
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <Slider />
        <MovieList />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  listofMovies: state.movies
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      getMovieList
    },
    dispatch
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
