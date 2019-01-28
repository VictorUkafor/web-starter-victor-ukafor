import geolocation from 'geolocation';
import cities from 'cities';
import * as types from './actionTypes';


export const searchLocation = (value, callback) => (dispatch) => {
  dispatch({
    type: types.SEARCH_LOCATION,
    payload: value,
  });
  callback();
};

export const getMyLocation = (callback) => (dispatch) => {
  geolocation.getCurrentPosition((err, position) => {
    if (err) throw err;
    const { coords: { latitude, longitude } } = position;
    const city = cities.gps_lookup(latitude, longitude);

    dispatch({
      type: types.SEARCH_LOCATION,
      payload: city.state,
    });
    callback();
  });
};
