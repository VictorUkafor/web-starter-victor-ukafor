import React from 'react';
import GoogleMapReact from 'google-map-react';
import {} from 'dotenv/config';

const AnyReactComponent = ({ text }) => <div className="map-title">{text}</div>;

const MapContainer = (props) => {
  const { restaurants } = props;
  const average = Math.round(restaurants.length / 2);
  return (
  // Important! Always set the container height explicitly
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
        defaultCenter={{lat: restaurants[average - 1].lat, lng: restaurants[average - 1].lon }}
        defaultZoom={15}
      >

        {restaurants.map((restaurant, index) => {
          return (
            <AnyReactComponent
              key={index}
              lat={restaurant.lat}
              lng={restaurant.lon}
              text={restaurant.title}
            />
          );
        })}

      </GoogleMapReact>
    </div>
  );
};

export default MapContainer;
