import React from 'react';
import Place from '@material-ui/icons/Place';
import Star from '@material-ui/icons/Star';
import DirectionsWalk from '@material-ui/icons/DirectionsWalk';
import FiberManualRecord from '@material-ui/icons/FiberManualRecord';
import rest from '../../assets/rest.jpg';

export const RestaurantCards = () => (
  <div className="cards">
    <div className="card">
      <div>
        <div className="card-info">
          <i className="locator"><Place /></i>
          <p className="first-p">Title hould go here <br />
            <span className="second-p">Title hould go here</span>
          </p>
          <div className="review-div">
            <i className="star"><Star /></i>
            <p>saying bls hdgttt vh...  <span>+2</span></p>
          </div>
        </div>
        <div className="card-img">
          <img src={rest} alt="" />
        </div>
      </div>
      <div className="after-card">
        <div className="first-div">Now open <i className="dot"><FiberManualRecord /></i> 0.6 miles away</div>
        <div className="second-div">
          <div className="walking">
            <i className="walk"><DirectionsWalk /></i>
            <p className="after-card-icon-title">6min</p>
          </div>
          <div className="rating">
            <i className="rate rate-icon"><Star /></i>
            <p className="after-card-icon-title star-rate"> 3.5/<span className="rate-total">5</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
);


export default RestaurantCards;
