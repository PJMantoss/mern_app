import React, { useEffect, useState } from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [loadedUsers, setLoadedUsers] = useState();
    const [error, setError] = usesState();

    useEffect(() => {
        const sendRequest = async () => {
            const response = await fetch('http://localhost:5000/api/users');

            const responseData = response.json();
        };

        sendRequest();
    }, [])

//     const USERS = [
//     {
//         id: 'u1',
//         name: 'Snoop Dog',
//         image: 'https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
//         places: 3
//     }
// ]

    return <UsersList users={USERS} />
};

export default Users;