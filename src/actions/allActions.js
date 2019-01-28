import geolocation from 'geolocation';
import cities from 'cities';
import {} from 'dotenv/config';
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
    const city = cities.gps_lookup(position.coords.latitude, position.coords.longitude);

    dispatch({
      type: types.SEARCH_LOCATION,
      payload: city.state,
    });
    callback();
  });
};
