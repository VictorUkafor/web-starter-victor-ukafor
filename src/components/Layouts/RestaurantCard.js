import React from 'react';
import Place from '@material-ui/icons/Place';
import Star from '@material-ui/icons/Star';
import DirectionsWalk from '@material-ui/icons/DirectionsWalk';
import FiberManualRecord from '@material-ui/icons/FiberManualRecord';
import noImage from '../../assets/no-image.png';

export const RestaurantCard = (props) => {
  const { restaurant } = props;
  const { title, cuisine,
    open_closed: openClosed, reviews, images, distance, rating } = restaurant;

  const miles = Math.round(distance * 10) / 10;

  let walkingTime = distance * 15;
  walkingTime = Math.round(walkingTime * 10) / 10;

  let review = 'Reviews from people';
  let reviewCount = '';
  if(reviews && reviews.length > 0) {
    review = reviews[0];
    reviewCount = '+' + reviews.length;
  }

  return (
    <div className="cards">
      <div className="card">
        <div>
          <div className="card-info">
            <i className="locator"><Place /></i>
            <p className="first-p"> {title || 'Title of restaurant'}<br />
              <span className="second-p">{cuisine || 'Cuisine of restaurant' }</span>
            </p>
            <div className="review-div">
              <i className="star"><Star /></i>
              <p>{review} ... <span>{reviewCount}</span></p>
            </div>
          </div>
          <div className="card-img">
            <img src={images[0] || noImage} alt="" />
          </div>
        </div>
        <div className="after-card">
          <div className="first-div">{openClosed || 'status unknown'} <i className="dot"><FiberManualRecord /></i>{miles || 'unknown'} miles away</div>
          <div className="second-div">
            <div className="walking">
              <i className="walk"><DirectionsWalk /></i>
              <p className="after-card-icon-title">{walkingTime || 'unknown'}</p>
            </div>
            <div className="rating">
              <i className="rate rate-icon"><Star /></i>
              <p className="after-card-icon-title star-rate"> {rating || 'unknown'}/<span className="rate-total">5</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default RestaurantCard;
