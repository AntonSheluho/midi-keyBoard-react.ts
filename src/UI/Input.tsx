import React, { Component } from 'react'

type Props = {
    type: string,
    id: string,
    value?: string,
    placeholder?: string,
    required?: boolean,
    pattern?: string,
    title?: string,
    autocomplete?: string
}


const Input = (props: Props) => {

    return (
        <input 
            type={props.type} 
            id={props.id} 
            value={props.value} 
            placeholder={props.placeholder} 
            required={props.required}
            pattern={props.pattern}
            title={props.title}
            autoComplete={props.autocomplete}
            className='formFactor'
        />
    )
}

export default Input


