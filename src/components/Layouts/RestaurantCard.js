import React from 'react';
import Place from '@material-ui/icons/Place';
import Star from '@material-ui/icons/Star';
import { Link } from 'react-router-dom';
import DirectionsWalk from '@material-ui/icons/DirectionsWalk';
import FiberManualRecord from '@material-ui/icons/FiberManualRecord';
import noImage from '../../assets/no-image.png';

const RestaurantCard = (props) => {
  const { restaurant: { title, cuisine, id, open_closed: openClosed,
    reviews, images, distance, rating } } = props;

  const miles = Math.round(distance * 10) / 10;

  let image = noImage;
  if(images) { image = images[0]; }

  let walkingTime = distance * 15;
  walkingTime = Math.round(walkingTime * 10) / 10;

  let review = 'Reviews from customers';
  let reviewCount = '';
  if(reviews && reviews.length === 1) {
    review = reviews[0];
  } else if(reviews && reviews.length > 1) {
    review = reviews[0];
    reviewCount = '+' + (reviews.length - 1);
  }

  return (
    <div className="cards">
      <div className="card">
        <div className="main-card">
          <div className="card-info">
            <Link className="link" to={`/rest/${id}`}>
              <i className="locator"><Place /></i>
              <p className="card-title"> {title || 'Title of restaurant'}<br />
                <span className="rest-cuisine">{cuisine || 'Cuisine of restaurant' }</span>
              </p>
            </Link>
            <div className="reviews">
              <i className="star"><Star /></i>
              <p>{review} ... <span>{reviewCount}</span></p>
            </div>
          </div>
          <div className="card-image" style={{backgroundImage: `url(${image})`}} />
        </div>
        <div className="after-card">
          <div className="close-mile">{openClosed || 'status unknown'}
            <i className="separating-dot"><FiberManualRecord /></i>
            {miles || 'unknown'} miles away
          </div>
          <div className="walking-star">
            <div className="walking">
              <i className="walk"><DirectionsWalk /></i>
              <p className="after-card-icon-title">{walkingTime || 'unknown'}min</p>
            </div>
            <div className="rating">
              <i className="rate rate-icon"><Star /></i>
              <p className="after-card-icon-title"> {rating || 'unknown'}/<span className="rate-total">5</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default RestaurantCard;
