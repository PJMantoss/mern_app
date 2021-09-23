import React from 'react';
import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_REQUIRE, VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from '../../shared/util/validators'; 

function Auth(props) {
    return (
        <form>
            <Input 
                id="name"
                element="input" 
                type="text" 
                label="Name" 
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter your name."
                onInput={inputHandler}
            />
        </form>
    );
}

export default Auth;