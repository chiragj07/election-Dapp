import React from 'react'
import './candidate.css'
const Candidate = ({props,castVote}) => {
    // console.log(props);
    // console.log(`for id = ${props.id} name is ${props.name}`)
    const voteDo = ()=>{
        //console.log(props.id);
        castVote(props.id);

    }
    return (
        <div className= "candidate-container">
           <h2>Name: {props.name} </h2>
           <h3>Total Votes: {props.voteCount}</h3>
           <button onClick = {voteDo}> <b> vote for {props.name} </b></button>
        </div>
    )
}

export default Candidate
