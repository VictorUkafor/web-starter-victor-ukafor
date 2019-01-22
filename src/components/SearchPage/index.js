import React, { Component } from 'react';
import { Query } from 'react-apollo';
import CircularProgress from '@material-ui/core/CircularProgress';
import { RESTAURANT_SEARCH_QUERY } from '../../graphql/queries';
import Home from '../Layouts';

class SearchPage extends Component {
  render() {
    return (
      // Variables can be either lat and lon OR address
      <Query
        query={RESTAURANT_SEARCH_QUERY}
        variables={{ address: 'Chicago' }}
      >
        {({ loading, error, data = {} }) => {
          if (loading) { return <CircularProgress />; }

          // Make sure we have data
          if (data.search_restaurants
            && data.search_restaurants.results
            && data.search_restaurants.results.length > 0) {
            return (<Home restaurants={data.search_restaurants.results} />);
          }

          // No Data Return
          return <div>No Results</div>;
        }}
      </Query>
    );
  }
}

export default SearchPage;
