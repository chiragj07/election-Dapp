import React, {useEffect} from 'react'
import Navbar from '../../Components/navbar'
import { Link,useHistory } from 'react-router-dom'
import './instruction.css'
const Instructions = () => {
    const history = useHistory();
    useEffect(() => {
        if(!localStorage.getItem('voter')){
            history.push('/');
        }
    }, [history])
    return (
        <>
        <Navbar></Navbar>
        <div className='instructions-div'>
            
            <h2>Follow the given Instructions while giving vote</h2>

             <ul>
                 <li>you can give vote only once as registered adhar card will be marked as voted</li>
                 <li>choose your candidate wisely</li>
                 <li>on the voting page you will find the candidates participating in the election</li>
                 <li>choose your candidate and press on vote button. it will further ask you to confirm if you want to vote for selected candidate.</li>
                 <li>only after your confirmation, it will proceed further</li>
                 <li>after confirming, wait for few time and it will show if your vote has been recoderd or not</li>
                 <li>This application is based on blockchain. so no one can track whom you have voted for.</li>
                 <li>No one can change your vote once you voted. hacking this system is next to impossible.</li>
             </ul>
            
            <Link to={'/voting'}><button>proceed to vote</button></Link>
        
        </div>
        </>
    )
}

export default Instructions
