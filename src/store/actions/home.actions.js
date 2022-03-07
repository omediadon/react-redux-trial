import * as Actions from "./actionTypes";
import homeServices from "../../services/home.services";

export const setHomeActive = (value) => {
  return (dispatch) => {
    dispatch({ type: Actions.SET_HOME_ACTIVE, isHomeActive: value });
  };
};

export const getPost = () => {
  return (dispatch) => {
    homeServices.getPost().then((data) =>
      dispatch({
        type: Actions.GET_POST,
        post: data
      })
    );
  };
};
