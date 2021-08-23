import React, { useParams } from 'react';

const UpdatePlace = () => {
    const placeId = useParams().placeId;
    return(<h2>Update Place</h2>)
};

export default UpdatePlace;