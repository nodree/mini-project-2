import React, { Component } from "react";
import { connect } from "react-redux";
import { getMovieList, getMovie } from "../actions";
import { Link } from "react-router-dom";

import "./movieList.scss";
class MovieList extends Component {
  componentDidMount = async () => {
    this.props.getMovieList();
    this.props.getMovie();
  };
  render() {
    const lists =
      this.props.movies &&
      this.props.movies.map(item => (
        <Link to="/movie">
          <div className="Card" key={item._id}>
            <div className="Card__Poster">
              <img
                className="Grid__Poster"
                src={`https://image.tmdb.org/t/p/original/${item.poster}`}
                alt={item.title}
              />
            </div>
            {/* <span /> */}
            <div className="Card__Title">
              <p className="Grid__Title">{item.title}</p>
            </div>
          </div>
        </Link>
      ));

    return (
      <div>
        <div className="Category">
          <a>
            <h2>All</h2>
          </a>
          <a>
            <h2>Actions</h2>
          </a>
          <a>
            <h2>Adventure</h2>
          </a>
          <a>
            <h2>Animation</h2>
          </a>
          <a>
            <h2>Crime</h2>
          </a>
          <a>
            <h2>Documentary</h2>
          </a>
          <a>
            <h2>Drama</h2>
          </a>
          <a>
            <h2>....</h2>
          </a>
        </div>
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
  movies: state.moviesReducer.items,
  movie: state.movieReducer.items
});

export default connect(mapStateToProps, { getMovieList, getMovie })(MovieList);
