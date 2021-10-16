import React, { useState, useContext } from 'react';
import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook'; 
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElements/Card';
import { AuthContext } from '../../shared/context/auth-context';

import './Auth.css'

const Auth = () => {
    const auth = useContext(AuthContext);

    const [isLoginMode, setIsLoginMode] = useState(true);

//Use the following methods from the useForm custom Hook
    const [formState, inputHandler, setFormData] = useForm(
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
//Handles switching from LOGIN form to SIGN UP form
    const switchModeHandler = () => {
        if(!isLoginMode){
            setFormData({
                ...formState.inputs,
                name: undefined
            }, 
            formState.inputs.email.isValid && formState.inputs.password.isValid
            );
        }else{
            setFormData({
                ...formState.inputs,
                name: {
                    value: '',
                    isValid: false
                }
            }, false)
        }
        setIsLoginMode(prevMode => !prevMode)
    };

    const authSubmitHandler = e => {
        e.preventDefault();
        //console.log(formState.inputs); 
        fetch('http://localhost:5000/api/users/signup') //HTTP Request to the backend
        auth.login();
    }

    return (
        <Card className="authentication">
            <h2>Login Required</h2>
            <hr />
            <form onSubmit={authSubmitHandler}>
                {!isLoginMode && (
                    <Input 
                        id="name" 
                        element="input" 
                        type="text" 
                        label="Name" 
                        validators={[VALIDATOR_REQUIRE()]}
                        errorText="Please enter your name."
                        onInput={inputHandler}
                    />
                )}
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
                    {isLoginMode ? "LOGIN" : "SIGN UP"}
                </Button>
            </form>
            <Button inverse onClick={switchModeHandler}>
                SWITCH TO {isLoginMode ? "SIGN UP" : "LOGIN"}
            </Button>
        </Card>
    );
}

export default Auth;