import React from 'react';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient } from '../../shared/hooks/http-hook';

import './PlaceForm.css'

const NewPlace = () => {

    const { isLoading, error, sendRequest, clearError } = useHttpClient();

    const [formState, inputHandler] = useForm(
        {
            title: {
                value: "",
                isValid: false
            },
            description: {
                value: "",
                isValid: false
            },
            address: {
                value: "",
                isValid: false
            }
        },
        false
    )

    const placeSubmitHandler = e => {
        e.preventDefault();
        sendRequest(
            'http://localhost:5000/api/places',
            'POST',
            JSON.stringify({})
        ); //Send these info to the backend
    }

    return <form className="place-form" onSubmit={placeSubmitHandler}>
        <Input 
            id="title"
            element="input" 
            type="text" 
            label="Title" 
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid title."
            onInput={inputHandler}
        />
        <Input 
            id="description"
            element="textarea"
            label="Description" 
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter a valid description (at least 5 characters)."
            onInput={inputHandler}
        />
        <Input 
            id="address"
            element="input"
            label="Address" 
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid address."
            onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
            ADD PLACE
        </Button>
    </form>
}

export default NewPlace;