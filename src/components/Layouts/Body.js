import React from 'react';
import RestaurantCard from './RestaurantCard';
import Header from './Header';
import Map from './Map';

export const Body = (props) => {
  const { restaurants } = props;
  return (
    <div className="search-page">
      <div className="restaurants-section">
        <Header />
        {restaurants.map((restaurant) => {
          return <RestaurantCard restaurant={restaurant} />;
        })}
      </div>
      <div className="map-section"><Map /></div>
    </div>
  );
};


export default Body;
