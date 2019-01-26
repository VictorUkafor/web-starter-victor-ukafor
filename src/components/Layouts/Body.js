import React from 'react';
import RestaurantCard from './RestaurantCard';
import Header from './Header';
import MapContainer from './Map';

const Body = (props) => {
  const { restaurants } = props;
  return (
    <div className="search-page">
      <div className="restaurants-section">
        <Header />
        {restaurants.map((restaurant, index) => {
          return <RestaurantCard key={index} restaurant={restaurant} />;
        })}
      </div>
      <div className="map-section">
        <MapContainer restaurants={restaurants} />
      </div>
    </div>
  );
};


export default Body;
