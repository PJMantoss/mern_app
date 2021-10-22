import React, { useEffect, useState } from 'react';
import UsersList from '../components/UsersList';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';

const Users = () => {
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [loadedUsers, setLoadedUsers] = useState();

    useEffect(() => {
        const fetchUsers = async () => {
            
            try{
                const responseData = await sendRequest('http://localhost:5000/api/users');

                setLoadedUsers(responseData.users);

            }catch(err){
                
            }
        };

        fetchUsers();
    }, [sendRequest])

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
            {!isLoading && loadedUsers && <UsersList items={loadedUsers} />}
        </React.Fragment>
    )
};

export default Users;