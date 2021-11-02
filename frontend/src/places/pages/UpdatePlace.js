import React, { useEffect, useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import Card from '../../shared/components/UIElements/Card';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';

import './PlaceForm.css'

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
//         title: "Emp. State Building",
//         description: 'One of the most famous skycrapers in the world',
//         imageUrl: 'https://images.unsplash.com/photo-1538708027031-6955608d3c26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80',
//         address: '20 W 34th St, New York, NY 10001, USA',
//         location: {
//             lat: 40.7484405,
//             lng: -73.9878584
//         },
//         creator: 'u2'
//     }
// ];

const UpdatePlace = () => {
    const auth = useContext(AuthContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [loadedPlaces, setLoadedPlaces] = useState();
    const placeId = useParams().placeId;
    const history = useHistory();

    const [formState, inputHandler, setFormData] = useForm(
        {
            title: {
                value: '',
                isValid: false
            },
            description: {
                value: '',
                isValid: false
            }
        },
        false
    );

    useEffect(() => {
        const fetchRequest = async () => {
            try{
                const responseData = await sendRequest(
                    `http://localhost:5000/api/places/${placeId}`
                )
                setLoadedPlaces(responseData.place);

                setFormData({
                    title: {
                        value: responseData.place.title,
                        isValid: true
                    },
                    description: {
                        value: responseData.place.description,
                        isValid: true
                    }
                }, true);
            }catch(err){}
        }
        fetchRequest();
    }, [sendRequest, placeId, setFormData])

    // const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId)

    const placeUpdateSubmitHandler = async e => {
        e.preventDefault();
        try{
            await sendRequest(
                `http://localhost:5000/api/places/${placeId}`,
                'PATCH',
                JSON.stringify({
                    title: formState.inputs.title.value,
                    description: formState.inputs.description.value
                }),
                { 'Content-Type': 'application/json' }
            );
            history.push('/' + auth.userId + '/places');
        }catch(err){} //Send these info to the backend
    }

    if(isLoading){
        return(
            <div className="center">
                <Card>
                    <LoadingSpinner />
                </Card>
            </div>
        )
    }

    if(!loadedPlaces && !error){
        return(
            <div className="center">
                <Card>
                    <h2>Could Not Find Place.</h2>
                </Card>
            </div>
        )
    }

    return(
        <React.Fragment>
            <ErrorModal error={error} onClear={clearError} />
            {!isLoading && loadedPlaces && (<form className="place-form" onSubmit={placeUpdateSubmitHandler}>
                <Input 
                    id="title"
                    element="input" 
                    type="text" 
                    label="Title" 
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid title."
                    onInput={inputHandler}
                    initialValue={loadedPlaces.title}
                    initialValid={true}
                />
                <Input 
                    id="description"
                    element="textarea"
                    label="Description" 
                    validators={[VALIDATOR_MINLENGTH(5)]}
                    errorText="Please enter a valid description (at least 5 characters)."
                    onInput={inputHandler}
                    initialValue={loadedPlaces.description}
                    initialValid={true}
                />
                <Button type="submit" disabled={!formState.isValid}>
                    UPDATE PLACE
                </Button>
            </form>)}
        </React.Fragment>
    );
};

export default UpdatePlace;