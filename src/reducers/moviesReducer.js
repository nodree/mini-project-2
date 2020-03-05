import { GET_MOVIES_SUCCESS } from "../actions/";

// const initialState = {};

// export default function moviesReducer(state = initialState, action) {
//   switch (action.type) {
//     case GET_MOVIES_SUCCESS:
//       return {
//         ...state,
//         items: action.payload.movies
//       };

//     default:
//       return state;
//   }
// }

export default (state = [], action) => {
  switch (action.type) {
    case GET_MOVIES_SUCCESS:
      return { ...state, items: action.payload };
    default:
      return state;
  }
};
