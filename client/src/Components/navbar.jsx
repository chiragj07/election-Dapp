import React, { useEffect, useState } from 'react'
import {Link, useHistory} from 'react-router-dom';
import { connect } from 'react-redux';
import './navbar.css'
const Navbar = () => {
    const history = useHistory();
    const [currVoter, setCurrVoter] = useState('')
    useEffect(() => {
        if(localStorage.getItem('voter')){
            const data= JSON.parse(localStorage.getItem('voter'));
            setCurrVoter(data.name);
        }
    }, [currVoter])
    const Logout = ()=>{
        localStorage.removeItem('voter');
        setCurrVoter('')
        history.push('/');

    }
    return (
        <div className='main-nav'>
            <div className='text'><h1>ELECTION COMMISION</h1></div>
            <div className='signreg'>
                {
                    currVoter === ''?
                <div>
                <Link to= {'/login'}><button>Sign-In</button></Link>
                <Link to={'/register'}><button>Register</button></Link>
                </div> :
                <div className='swad'> 
                    <h2>
                       hello, {currVoter}
                    </h2>
                    <button onClick= {Logout}>Log-Out</button>
                </div>
                }   
            </div>
            
        </div>
    )
}
const mapStateToProp = state =>{
    console.log(state);
    return {
        currVoter: state.voter.name
    }
}

export default connect(mapStateToProp)(Navbar)
