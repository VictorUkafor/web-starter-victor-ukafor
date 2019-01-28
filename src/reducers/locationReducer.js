import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState, action) => {
  switch (action.type) {
  case types.SEARCH_LOCATION:
    return {
      ...state,
      location: action.payload,
    };
  default:
    return state;
  }
};
