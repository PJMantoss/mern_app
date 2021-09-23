import React from 'react';
import Input from '../../shared/components/FormElements/Input';

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