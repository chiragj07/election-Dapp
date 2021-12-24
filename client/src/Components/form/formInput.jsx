import React from 'react'
import './form.css'

const FormInput = (props) => {
    const {name, label,type, handleChange} = props;
    return (
        <div className='formcont'>
           <label htmlFor={label}>{name.toUpperCase()}</label> 
           <input type={type} name= {name} onChange ={handleChange} placeholder={name} id={label} /> 
        </div>
    )
}

export default FormInput
