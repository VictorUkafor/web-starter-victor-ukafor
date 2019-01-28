import * as types from './actionTypes';

export const searchLocation = (value, callback) => (dispatch) => {
  dispatch({
    type: types.SEARCH_LOCATION,
    payload: value,
  });
  callback();
};
