import React, { useCallback, useReducer } from 'react';
import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators';

import './NewPlace.css'

const formReducer = (state, action) => {
    switch(action.type){
        case 'INPUT_CHANGE':
            return {};
        default:
            return state;
    }
}

const NewPlace = () => {
    useReducer(formReducer);
    const titleInputHandler = useCallback((id, value, isValid) => {}, []);

    const descriptionInputHandler = useCallback((id, value, isValid) => {}, []);

    return <form className="place-form">
        <Input 
            id="title"
            element="input" 
            type="text" 
            label="Title" 
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid title."
            onInput={titleInputHandler}
        />
        <Input 
            id="description"
            element="textarea"
            label="description" 
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter a valid description (at least 5 characters)."
            onInput={descriptionInputHandler}
        />
    </form>
}

export default NewPlace;