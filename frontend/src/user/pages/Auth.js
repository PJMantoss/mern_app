import React from 'react';
import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_REQUIRE, VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook'; 

function Auth(props) {

    const [formState, inputHandler] = useForm(
        {
            name: {
                value: "",
                isValid: false
            },
            email: {
                value: "",
                isValid: false
            },
            password: {
                value: "",
                isValid: false
            }
        },
        false
    )

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