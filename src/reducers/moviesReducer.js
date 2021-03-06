import { GET_MOVIES_SUCCESS } from "../actions/";

export default (state = [], action) => {
  switch (action.type) {
    case GET_MOVIES_SUCCESS:
      return { ...state, items: action.payload };

    default:
      return state;
  }
};
