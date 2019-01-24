import React from 'react';
import noImage from '../../assets/no-image.png';

export const Rest = (props) => {
  const { restaurant } = props;
  const { title, images, description, address, phone,
    hours, cuisine, rating, website } = restaurant;

  let image = noImage;
  if(images) {
    image = images[0];
  }

  console.log(restaurant);
  return(
    <div className="single-rest">
      <h1 className="rest-title">{title}</h1>
      <hr className="rest-hr" />
      <img className="rest-image" src={image} alt="" />
      <hr className="rest-hr" />
      <p className="prop">Description: <br />
        <span className="prop-span">{description || 'Not specified'}</span>
      </p>
      <hr className="rest-hr" />
      <p className="prop">Cuisine: <br />
        <span className="prop-span">{cuisine || 'Not specified'}</span>
      </p>
      <hr className="rest-hr" />
      <p className="prop">Address: <br />
        <span className="prop-span">{address || 'Not specified'}</span>
      </p>
      <hr className="rest-hr" />
      <p className="prop">Hours: <br />
        <span className="prop-span">{hours || 'Not specified'}</span>
      </p>
      <hr className="rest-hr" />
      <p className="prop">Phone: <br />
        <span className="prop-span">{phone || 'No phone'}</span>
      </p>
      <hr className="rest-hr" />
      <p className="prop">Website: <br />
        <span className="prop-span">{website || 'No website'}</span>
      </p>
      <hr className="rest-hr" />
      <p className="prop">Rating: <br />
        <span className="prop-span">{rating || 'No rating'}</span>
      </p>
    </div>
  );
};


export default Rest;
