import React from 'react';
import RestaurantCard from './RestaurantCard';
import Map from './Map';
import '../../styles/restaurant-card.css';
import '../../styles/map.css';

export const Home = (props) => {
  const { restaurants } = props;
  return (
    <div className="search-page">
      <div className="restaurants-section">
        {restaurants.map((restaurant) => {
          return <RestaurantCard restaurant={restaurant} />;
        })}
      </div>
      <div className="map-section"><Map /></div>
    </div>
  );
};


export default Home;
