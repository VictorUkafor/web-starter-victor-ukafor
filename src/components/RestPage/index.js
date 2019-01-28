import React from 'react';
import RestDetails from './RestDetails';

const RestPage = (props) => {
  const { match: { params: { id } } } = props;
  return (
    <div>
      {/* This is the rest page: { id } */}

      <RestDetails restId={id} />
    </div>
  );
};

export default RestPage;
