
import React,{useEffect} from 'react'
import vote from '../images/vote.jpg'
import Login from '../Components/Login'
import { Link } from 'react-router-dom'
import Navbar from '../Components/navbar'

import './login.css'
const LoginPage = ({history}) => {
    useEffect(() => {
        if(localStorage.getItem('voter')){
            history.push('/');
        }
    }, [history])
    return (
        <> 
        <Navbar></Navbar>
        <div className='main-log'>
            <div className='ph'>
                   <img src={vote} alt="" height='400px' width='400px' /> 
            </div>
            

            <div>
            <Login/>
                <h3>Don't have an account ? 
                    <Link to={'/register'}> register with adhar number</Link>
                </h3>
            </div>
        </div>
        </>
    )
}

export default LoginPage
