import React, { useEffect } from 'react'
import Register from '../Components/register/Register'
import vote from '../images/vote.jpg'
import {Link,useHistory} from 'react-router-dom'
import './register.css'
import Navbar from '../Components/navbar'

const RegisterPage = () => {
    const history = useHistory();
    useEffect(() => {
        if(localStorage.getItem('voter')){
            history.push('/');
        }
    }, [history])
    return (
        <>
        <Navbar></Navbar>
        <div className = 'mainreg'>
            <div className='ph'>
                   <img src={vote} alt="" height='400px' width='400px' /> 
            </div>
            <div>
            <Register/>
            <h3>Already have an account? 
                <Link to= {'/login'}>sign-in with email address</Link>
            </h3>
            </div>
        </div>
        </>
    )
}

export default RegisterPage
