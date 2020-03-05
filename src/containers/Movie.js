import React, { Component } from "react";
import { connect } from "react-redux";
import { getMovie } from "../actions";
import Navbar from "../components/navbar/navbar";
import MovieDetail from "../components/movieDetail";
import "../style/movie.scss";
// const poster =
//   "https://image.tmdb.org/t/p/original/AuGiPiGMYMkSosOJ3BQjDEAiwtO.jpg";
class Movie extends Component {
  // constructor() {
  //   super();
  //   this.state = { movie: { getMovie } };
  // }

  componentDidMount = async () => {
    this.props.getMovie();
  };

  render() {
    return (
      <div className="Movie">
        <Navbar />
        <MovieDetail />
      </div>
    );
  }
}

// const mapDispatchtoProps = dispatch => {
//   return dispatch({
//     type: "GET_MOVIES_SUCCESS",
//     payload: ""
//   });
// };

const mapStateToProps = state => {
  return {
    movie: state.movieReducer.items
  };
};

export default connect(
  mapStateToProps,
  { getMovie }
  // mapDispatchtoProps
)(Movie);
