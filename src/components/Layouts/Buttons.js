import React from 'react';
import Search from '@material-ui/icons/Search';

const Buttons = () => (
  <div className="buttons">
    <div className="searchTextbox">
      <input type="text" name="searchTextbox" placeholder="Search food in your area . . ." />
      <i className="search-icon"><Search /></i>
    </div>
  </div>
);


export default Buttons;
