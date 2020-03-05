import axios from "axios";
// import { GET_LIST, GET_DETAIL } from "./types";
const baseUrl = "http://notflixtv.herokuapp.com/api/v1/movies";
const page = 1;
// export const getMovieList = () => async dispatch => {
//   try {
//     const res = await fetch(`${baseUrl}/?page=1&limit=10`);
//     const data = await res.json();
//     console.log(data);
//     dispatch({
//       type: "GET_LIST",
//       payload: data
//     });
//   } catch (error) {
//     console.log(error);
//     dispatch({
//       type: "ERROR",
//       payload: error
//     });
//   }
// };

// export function getMovieList() {
//   return dispatch =>
//     axios.get(`${baseUrl}/?page=1&limit=10`).then(response => {
//       console.log(response);
//       console.log(response.data.data.docs);
//     });
// }

// export const getMovieList = (page, limit) => {
//   const DOMAIN_INITIAL = `${baseUrl}?page=${page}&limit=${limit}`;
//   const DOMAIN_PAGE = `${baseUrl}?page=${page}&limit=${limit}`;
//   return async dispatch => {
//     try {
//       const list = !page
//         ? await axios.get(DOMAIN_INITIAL)
//         : await axios.get(DOMAIN_PAGE);
//       if (list) {
//         dispatch({
//           type: GET_LIST,
//           payload: {
//             list: list.data,
//             totalResults: list.data.totalResults,
//             loading: false,
//             // each initial fetch must force pagination to page 1
//             forcePage: !page ? 0 : page - 1
//           }
//         });
//       }
//       console.log(list);
//     } catch (err) {
//       console.log(err);
//     }
//   };
// };
// export const getMovieDetail = imdbID => {
//   return async dispatch => {
//     try {
//       const movies = await axios.get(`${baseUrl}&i=${imdbID}`);
//       movies &&
//         dispatch({
//           type: GET_DETAIL,
//           payload: {
//             movies: movies.data,
//             loading: false
//           }
//         });
//     } catch (err) {
//       console.log(err);
//     }
//   };
// };

export const GET_MOVIES_SUCCESS = "GET_MOVIES_SUCCESS";
export const GET_MOVIE = "GET_MOVIE";

// export const fetchMoviesSuccess = movies => ({
//   type: GET_MOVIES_SUCCESS,
//   payload: { movies }
// });

// export function getMovieList(url) {
//   return dispatch => {
//     return axios.get(`${baseUrl}?page=1&limit=10`).then(res => {
//       dispatch(fetchMoviesSuccess(res.data));
//       console.log(res.data);
//       return res.data;
//     });
//   };
// }

export const getMovieList = () => async dispatch => {
  const response = await axios.get(`${baseUrl}?page=${page}&limit=20`);
  console.log("movies", response);
  dispatch({
    type: GET_MOVIES_SUCCESS,
    payload: response.data.data.docs // << api parent child
  });
};

export const getMovie = () => async dispatch => {
  const response = await axios.get(`${baseUrl}/5e60017db632290017bbcd45`);
  console.log("movie", response);
  dispatch({
    type: GET_MOVIE,
    payload: response.data.data.docs // << api parent child
  });
};
