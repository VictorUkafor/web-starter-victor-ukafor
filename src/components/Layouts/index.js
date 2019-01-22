import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import RestaurantCards from './RestaurantCards';
import '../../styles/search.css';

export const Home = () => (
  <Grid fluid>
    <Row>
      <Col xs={12} sm={3} md={3} lg={3}>
        <RestaurantCards />
      </Col>
      <Col hidden-xs sm={9} md={9} lg={9}>
        Hello, world!
      </Col>
    </Row>
  </Grid>
);


export default Home;
