import React from 'react';
import { connect } from 'react-redux';
import { Query } from 'react-apollo';
import CircularProgress from '@material-ui/core/CircularProgress';
import { RESTAURANT_SEARCH_QUERY } from '../../graphql/queries';
import Body from '../Layouts/Body';

const SearchPage = (props) => {
  const { location } = props;
  return (
  // Variables can be either lat and lon OR address
    <Query
      query={RESTAURANT_SEARCH_QUERY}
      variables={{ address: location || 'Chicago' }}
    >
      {({ loading, error, data = {} }) => {
        if (loading) { return <CircularProgress />; }

        // Make sure we have data
        if (data.search_restaurants
            && data.search_restaurants.results
            && data.search_restaurants.results.length > 0) {
          return (<Body restaurants={data.search_restaurants.results} />);
        }

        // No Data Return
        return <div>No Results</div>;
      }}
    </Query>
  );
};

const mapStateToProps = (state) => ({ location: state.location.location });

export default connect(mapStateToProps)(SearchPage);
