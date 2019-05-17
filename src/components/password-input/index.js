import React from 'react';
import "./styles.css";
import { strengthColour, strengthIndicator } from './strength'

export default function PasswordInput(props){
    const count = strengthIndicator(props.value);
    const colour = strengthColour(count);
    console.log(count);
    return(
        <input
          type="password"
          placeholder = {props.placeholder}
          onChange = { props.handleChange }
          value = {props.value}
          className = "__password-input"
          style = {{
              border: `1px solid ${colour}`
          }}
        />
    )
}