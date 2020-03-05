import React, { Component } from "react";
import { connect } from "react-redux";
import { getMovieList } from "../actions";
import { Link } from "react-router-dom";

import "./movieList.scss";
class MovieList extends Component {
  componentDidMount = async () => {
    this.props.getMovieList();
  };
  render() {
    const lists =
      this.props.movies &&
      this.props.movies.map(item => (
        <div className="Card" key={item._id}>
          <img
            className="Grid__Poster"
            src={`https://image.tmdb.org/t/p/original/${item.poster}`}
            alt={item.title}
          />
          {/* <span /> */}
          <p className="Grid__Title">{item.title}</p>
        </div>
      ));
    // const lists = getMovieList.map(item => <li key={item.id}>{item.title}</li>);
    return (
      <div>
        <div className="Grid">{lists}</div>
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

const mapStateToProps = state => ({
  movies: state.moviesReducer.items
});

export default connect(
  mapStateToProps,
  { getMovieList }
  // mapDispatchtoProps
)(MovieList);
