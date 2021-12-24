
import {Link} from 'react-router-dom'
import React, {useState, useEffect } from 'react'
import './home.css'
import vote from '../images/vote.jpg'
import Navbar from '../Components/navbar'

const Home = () => {
    const [user, setUser] = useState('');
    useEffect(()=>{
        if(localStorage.getItem('voter')){
            setUser(JSON.parse(localStorage.getItem('voter')))
        }
        else{ setUser('')
    }
    },[user])
    return (
        <div>
            <Navbar></Navbar>
            <div className='maincontainer'>
                <div className='ph'>
                   <img src={vote} alt="" height='400px' width='400px' /> 
                </div>
                <div className='ext'>
                    <div className='details'>
                    <h4>Now Vote your Candidate <br /> From anywhere in the world <br />Because Your Vote Matters</h4>
                    </div>
                    {
                        user === ''? 
                <div className='auth'> 
                <Link to={'/login'}><button className='butt'>Sign-In</button></Link>
                <Link to={'/register'}><button className='butt'>Register</button></Link>
                </div>:
                <div className='auth'>
                <Link to= {'/instructions'}><button className='butt'> Give Your Vote</button></Link>
                </div>
                 
                    }
                
                </div>
            </div>


        </div>
    )
}

export default Home
