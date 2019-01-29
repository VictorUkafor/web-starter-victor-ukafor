import React from 'react';
import SearchField from '../../containers/SearchField';
import MyLocation from '../../containers/MyLocation';

const Buttons = () => (
  <div className="buttons">
    <MyLocation />
    <SearchField />
    <div className="auth-buttons">
      <button className="log-in" type="button">Log In</button>
      <button className="sign-up" type="button">Sign Up</button>
    </div>
  </div>
);


export default Buttons;
