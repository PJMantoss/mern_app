import React from 'react';
import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_REQUIRE } from '../../shared/util/validators';

import './NewPlace.css'

const NewPlace = () => {
    const titleInputHandler = (id, value, isValid) => {}

    return <form className="place-form">
        <Input 
            element="input" 
            type="text" 
            label="Title" 
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid title."
            onInput={titleInputHandler}
        />
    </form>
}

export default NewPlace;