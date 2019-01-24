import React from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/icons/List';
import FilterList from '@material-ui/icons/FilterList';
import ViewCarousel from '@material-ui/icons/ViewCarousel';

export const Header = () => (
  <div className="search-header">
    <div className="logo"><Link className="link" to="/">Foodsy</Link></div>
    <div className="mid-icons">
      <i className="list-icon"><List /></i>
      <i className="carousel-icon"><ViewCarousel /></i>
    </div>
    <div className="filter-bar">
      <p className="filter-text">Filter</p>
      <i className="filter-list-icon"><FilterList /></i>
    </div>

  </div>
);


export default Header;
