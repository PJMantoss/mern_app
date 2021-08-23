import React from 'react';
import { useParams } from 'react-router-dom';

const UpdatePlace = () => {
    const placeId = useParams().placeId;
    return(<h2>Update Place</h2>)
};

export default UpdatePlace;