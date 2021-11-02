import React, { useEffect, useState } from 'react';
import PlaceList from '../components/PlaceList';
import { useParams } from 'react-router-dom';
import { useHttpClient } from '../../shared/hooks/http-hook';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';

// const DUMMY_PLACES = [
//     {
//         id: 'p1',
//         title: "Empire State Building",
//         description: 'One of the most famous skycrapers in the world',
//         imageUrl: 'https://images.unsplash.com/photo-1538708027031-6955608d3c26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80',
//         address: '20 W 34th St, New York, NY 10001, USA',
//         location: {
//             lat: 40.7484405,
//             lng: -73.9878584
//         },
//         creator: 'u1'
//     },

//     {
//         id: 'p2',
//         title: "Empire State Building",
//         description: 'One of the most famous skycrapers in the world',
//         imageUrl: 'https://images.unsplash.com/photo-1538708027031-6955608d3c26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80',
//         address: '20 W 34th St, New York, NY 10001, USA',
//         location: {
//             lat: 40.7484405,
//             lng: -73.9878584
//         },
//         creator: 'u2'
//     }
// ]

const UserPlaces = () => {
    const [loadedPlaces, setLoadedPlaces] = useState();
    const { isLoading, error, sendRequest, clearError } = useHttpClient();

    const userId = useParams().userId;

    useEffect(() => {
        const fetchPlaces = async () => {
            try{
                const responseData = await sendRequest(
                    `http://localhost:5000/api/places/user/${userId}`
                );
                setLoadedPlaces(responseData.places)
            }catch(err){}
        };

        fetchPlaces();
    }, [sendRequest]);

    //const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);

    const placeDeletedHandler = (deletedPlaceId) => {
        setLoadedPlaces(prevPlaces => prevPlaces.filter(
            place => place !== deletedPlaceId
            )
        )
    };
    
    return(
        <React.Fragment>
            <ErrorModal error={error} onClear={clearError} />
            {isLoading && (
                <div className="center">
                    <LoadingSpinner />
                </div>
            )}
            {!isLoading && loadedPlaces && <PlaceList items={loadedPlaces} onDelete={placeDeletedHandler} />}
        </React.Fragment>
    )
} 

export default UserPlaces;