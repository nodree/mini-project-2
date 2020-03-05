import { GET_MOVIE } from "../actions/";

export default (state = [], action) => {
  switch (action.type) {
    case GET_MOVIE:
      return { ...state, items: action.payload };

    default:
      return state;
  }
};
