import React, { useState } from 'react';
import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook'; 
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElements/Card';

import './Auth.css'

const Auth = () => {
    const [isLoginMode, setIsLoginMode] = useState(true);

    const [formState, inputHandler] = useForm(
        {
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

    const switchModeHandler = () => {
        setIsLoginMode(prevMode => !prevMode)
    };

    const loginSubmitHandler = e => {
        e.preventDefault();
        console.log(formState.inputs); //Send these info to the backend
    }

    return (
        <Card className="authentication">
            <h2>Login Required</h2>
            <hr />
            <form onSubmit={loginSubmitHandler}>
                <Input 
                    id="email"
                    element="input" 
                    type="email" 
                    label="E-Mail" 
                    validators={[VALIDATOR_EMAIL()]}
                    errorText="Please enter a valid e-mail."
                    onInput={inputHandler}
                />

                <Input 
                    id="password"
                    element="input" 
                    type="password" 
                    label="Password" 
                    validators={[VALIDATOR_MINLENGTH(6)]}
                    errorText="Password should be at least 6 characters long."
                    onInput={inputHandler}
                />

                <Button type="submit" disabled={!formState.isValid}>
                    LOGIN
                </Button>
            </form>
            <Button  onClick={switchModeHandler}>
                SWITCH TO SIGN UP
            </Button>
        </Card>
    );
}

export default Auth;