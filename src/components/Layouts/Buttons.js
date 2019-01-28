import React from 'react';
import Place from '@material-ui/icons/Place';
import SearchField from '../../containers/SearchField';

const Buttons = () => (
  <div className="buttons">
    <div className="use-my-location">
      <button
        type="button"
      >Use my location
      </button>
      <i className="my-location-icon"><Place /></i>
    </div>
    <SearchField />
  </div>
);


export default Buttons;
