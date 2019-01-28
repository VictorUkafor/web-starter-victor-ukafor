import React from 'react';
import { Query } from 'react-apollo';
import CircularProgress from '@material-ui/core/CircularProgress';
import { RESTAURANT_QUERY } from '../../graphql/queries';
import Rest from '../Layouts/Rest';

const RestDetails = (props) => {
  const { restId } = props;
  return (
    <Query
      query={RESTAURANT_QUERY}
      variables={{ id: restId }}
    >
      {({ loading, error, data = {} }) => {
        if (loading) { return <CircularProgress />; }

        // Make sure we have data
        if (data.restaurant) {
          return (
            <div className="rest-page">
              <Rest restaurant={data.restaurant} />
            </div>
          );
        }

        // No Data Return
        return <div>No Rest Data</div>;
      }}
    </Query>
  );
};

export default RestDetails;
