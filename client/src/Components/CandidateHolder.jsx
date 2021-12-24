import React,{useState,useEffect}  from 'react'
import Web3 from 'web3';
import {useHistory} from 'react-router-dom'
import Candidate from './Candidate'
import {Election} from '../contracts/electiobAbi';
import './holder.css'


const CandidateHolder = () => {
const history = useHistory()
const [voterMail, setVoterMail] = useState('');  
const [account, setAccount] = useState()  
const [electioSystem, setElectioSystem] = useState()
const [candidateCount, setCandidateCount] = useState()
const [candidates, setCandidates] = useState([])
const [voted, setVoted] = useState(0)
const localWeb3= async ()=>{
  if(window.ethereum){
    window.web3= new Web3(window.ethereum);
    await window.ethereum.enable();
  }else if(window.web3){
    window.web3= new Web3(window.web3.currentProvider);
  }else{
    window.alert('install metasmask extention to make it blockchain browser');
  }
}




useEffect(() => {

  const localBlockChainData = async ()=>{
    const web3 = window.web3;
    
    const accounts = await web3.eth.getAccounts();
    
    const account = accounts[0];
    setAccount(account)
    
    const netData =Election ;
  const abiAdrress= '0xf00ae04b094F689a8d6540b4B822FcC11F8BbFb5' ;
  const electionContract = new web3.eth.Contract(netData,abiAdrress);
  setElectioSystem(electionContract);
  
  const res = await electionContract.methods.candidateCount().call();
  setCandidateCount(res);
  console.log(candidateCount)
  let condo = [];
  const c1= await electionContract.methods.candidate(1).call();
  const name1= c1.name;
  const id1= c1.id;
  const votes1=c1.voteCount;
  const r1 = {name: name1,id:id1,voteCount:votes1};
  const c2= await electionContract.methods.candidate(2).call();
  const name2= c2.name;
  const id2= c2.id;
  const votes2=c2.voteCount;
  const r2 = {name: name2,id:id2,voteCount:votes2};
  condo.push(r1);
  condo.push(r2);
  setCandidates(condo);
  }

      localWeb3();
      localBlockChainData();
      if(localStorage.getItem('voter')){
        const mail = JSON.parse(localStorage.getItem('voter'));
        setVoterMail(mail.email)
      }
  }
, [voted, candidateCount])


const castVote = async(id) => {
  
  console.log(candidates[id-1])
  console.log(id);
  setVoted(id);
  
  if  (window.confirm(`you want to vote for ${candidates[id-1].name}`) )
{
  try{
  const vote = await electioSystem.methods.vote(id,voterMail).send({from : account}).on('transactionhash',()=> console.log('voted succcesfully'));
  console.log(vote)
  window.alert('voted succesfully');
  history.push('/voting')
}
  catch(err) {
    window.alert('you have already voted')
  history.push('/voting')
    

  } }else{
    history.push('/voting')
  }

}

    return (
        <div className='holder'>
            
            {candidates.map(candidate => <Candidate key={candidate.id} props={candidate} castVote={castVote} />)}
        </div>
    )
}

export default CandidateHolder
