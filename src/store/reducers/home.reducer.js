import * as Actions from "../actions/actionTypes";

const initialState = {
  isHomeActive: true,
  post: null
};

const homeReducer = function (state = initialState, action) {
  switch (action.type) {
    case Actions.SET_HOME_ACTIVE: {
      return {
        ...state,
        isHomeActive: action.isHomeActive
      };
    }
    case Actions.GET_POST: {
      return {
        ...state,
        post: action.post
      };
    }

    default:
      return state;
  }
};

export default homeReducer;
