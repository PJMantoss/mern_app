import React, { useEffect, useState } from 'react';
import UsersList from '../components/UsersList';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';

const Users = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [loadedUsers, setLoadedUsers] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        const sendRequest = async () => {
            setIsLoading(true);

            try{
                const response = await fetch('http://localhost:5000/api/users');

                const responseData = response.json();

                if(!response.ok){
                    throw new Error(responseData.message);
                }

                setLoadedUsers(responseData.users);
            }catch(err){
                setError(err.message);
            }

            setIsLoading(false);
        };

        sendRequest();
    }, [])

    const errorHandler = () => {
        setError(null);
    }

//     const USERS = [
//     {
//         id: 'u1',
//         name: 'Snoop Dog',
//         image: 'https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
//         places: 3
//     }
// ]

    return(
        <React.Fragment>
            <ErrorModal error={error} onClear={errorHandler} />
            {isLoading && (
                <div className="center">
                    <LoadingSpinner />
                </div>
            )}
            <UsersList items={loadedUsers} />
        </React.Fragment>
    )
};

export default Users;