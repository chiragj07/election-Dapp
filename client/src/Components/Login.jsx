import React, {useState} from 'react'
import FormInput from './form/formInput'
import {useHistory} from 'react-router-dom';
import {login} from '../redux/voter.action'
import { connect } from 'react-redux';

const Login = ({fetchVoter}) => {
    const history = useHistory();
    const [voterLog, setVoterLog] = useState({
        email:'',
        password:'',
    })
 
    const handleChange = (e) =>{
        const {name,value} = e.target;
        setVoterLog({...voterLog, [name]:value})
    }
    const handleSubmit = async(e) =>{
            e.preventDefault();
            
            const res= await fetch('/login',{
                method:'POST',
                headers :{
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(voterLog)
            })

            const data= await res.json();
            if(data.status === 400){
                const {errors} = data;
            if(errors.email !== ''){
                window.alert(errors.email);
            }
            else if(errors.password !== ''){
                window.alert(errors.password);
            }
            }
            else if(data.status=== 200){
                const newData= {
                    name: data.name, email: data.email
                }
                localStorage.setItem('voter',JSON.stringify(newData));
                fetchVoter(newData);
                window.alert('you are logged in')
                history.push('/')
                
            }

    }

    const {email,password}= voterLog;
    return (
        <div className='reg-from'>
        <form method= 'POST'>
                <FormInput name='email' value={email} lable={email} handleChange={handleChange} />
                <FormInput name='password' type="password" value={password} lable={password} handleChange={handleChange} />
                <button onClick= {handleSubmit}>Login</button>



        </form>
        
    </div>
    )
}
const mapDispatchToProps = dispatch =>{
    return {
        fetchVoter : voter => dispatch(login(voter))
    }
}
export default connect(null, mapDispatchToProps)(Login);
