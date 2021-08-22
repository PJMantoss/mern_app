import React, { useReducer } from "react";
import { validate } from "../../util/validators";

import './Input.css';

const inputReducer = (state, action) => {
    switch(action.type){
        case 'CHANGE':
            return {
                ...state,
                value: action.val,
                isValid: validate(action.val, action.validators)
            };
        default:
            return state;
    }
}

const Input = props => {
    const [inputState, dispatch] = useReducer(inputReducer, {value: "", isValid: false});

    const changeHandler = e => {
        dispatch({ 
            type: "CHANGE", 
            val: e.target.value,
            validators: props.validators 
        });
    }

    const touchHandler = () => {
        dispatch({
            type: "TOUCH"
        })
    }

    const element = props.element === 'input' ? (
        <input 
            id={props.id} 
            type={props.type} 
            placeholder={props.placeholder} 
            onChange={changeHandler}
            onBlur={touchHandler}
            value={inputState.value}
        />
        ) : (
            <textarea 
                id={props.id} 
                rows={props.rows || 3} 
                onChange={changeHandler}
                onBlur={touchHandler}
                value={inputState.value}
            />
            );

    return(
        <div className={`form-control ${!inputState.isValid && "form-control--invalid"}`}>
            <label htmlFor={props.id}>{props.label}</label>
            {element}
            {!inputState.isValid && <p>{props.errorText}</p>}
        </div>
    )
}

export default Input;