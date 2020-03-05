import React, { Component } from "react";
import "./movieDetail.css";
const poster =
  "https://image.tmdb.org/t/p/original/lmZFxXgJE3vgrciwuDib0N8CfQo.jpg";

class MovieDetail extends Component {
  render() {
    return (
      <div className={MovieDetail}>
        <div className="Backdrop">
          <img src={poster} alt="as" />
        </div>
        <div className="Container">
          <h1>Avengers</h1>
          <p>
            After Thanos, an intergalactic warlord, disintegrates half of the
            universe, the Avengers must reunite and assemble again to
            reinvigorate their trounced allies and restore balance.
          </p>
          <button>Watch Trailer</button>
          <button>Add to Watchlist</button>
          <div className="Overview">
            <a>
              <h2>Overview</h2>
            </a>
            <a>
              <h2>Characters</h2>
            </a>
            <a>
              <h2>Review</h2>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetail;
