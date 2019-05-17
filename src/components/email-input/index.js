import React from 'react'
import './styles.css'

export default function EmailInput(props){
    return (
        <input 
          type = "text"
          value = {props.value}
          placeholder = {props.placeholder}
          className = "__email-input"
          onChange = {props.handleChange}
        />
    )
}