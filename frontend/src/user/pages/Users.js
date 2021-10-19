import React, { useEffect } from 'react';
import UsersList from '../components/UsersList';

const Users = () => {

    useEffect(() => {
        fetch('http://localhost:5000/api/users')
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