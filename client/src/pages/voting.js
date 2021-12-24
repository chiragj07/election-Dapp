import CandidateHolder from '../Components/CandidateHolder';

import React, {useEffect} from 'react'
import { useHistory } from 'react-router';
import Navbar from '../Components/navbar'

const Voting = () => {
    const history = useHistory();
    useEffect(() => {
        if(!localStorage.getItem('voter')){
            history.push('/');
        }
    }, [history])
    return (
        <>
        <Navbar />
        <div>
            <CandidateHolder/>
        </div>
        </>
    )
}

export default Voting
