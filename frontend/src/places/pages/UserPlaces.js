import React from 'react';
import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: "Empire State Building",
        description: 'One of the most famous skycrapers in the world',
        imageUrl: 'https://images.unsplash.com/photo-1538708027031-6955608d3c26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80',
        address: '20 W 34th St, New York, NY 10001, USA',
        coordinates: ''
    }
]

const UserPlaces = () => {
    return(
        <PlaceList />
    )
} 

export default UserPlaces;