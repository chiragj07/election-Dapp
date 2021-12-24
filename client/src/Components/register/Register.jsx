import React,{useState} from 'react'
import FormInput from '../form/formInput'
import {useHistory} from 'react-router-dom'
const Register = () => {
    const history = useHistory();
    const [voterReg, setVoterReg] = useState({
        name:'',
        email:'',
        adhar:'',
        password:'',
    })
    const handleChange = (e) =>{
        const {name,value} = e.target;
        setVoterReg({...voterReg, [name]:value})
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const res = await fetch('/register', {
            method :'POST',
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(voterReg)
            
        })
        const data =await res.json();
        console.log(data);
        if(data.status === 400){
            const {errors} = data;
            if(errors.email !== ''){
                window.alert(errors.email);
            }
            else if(errors.adhar !== ''){
                window.alert(errors.adhar);
            }
            else if(errors.password !== ''){
                window.alert(errors.password);
            }
        }
        if(data.status === 200){
            console.log('ho gaisih')
            history.push('/login')
        }
    }

    const {email,name,adhar,password}= voterReg;

    return (
        <div className='reg-from'>
            <form method= 'POST'>
                    <FormInput name='name' type="text" value={name} lable={name} handleChange={handleChange} />
                    <FormInput name='email' type="text" value={email} lable={email} handleChange={handleChange} />
                    <FormInput name='adhar' type="text" value={adhar} lable="AdharNumber" handleChange={handleChange} />
                    <FormInput name='password' type="password" value={password} lable={password} handleChange={handleChange} />

                    <button onClick={handleSubmit}> Register</button>



            </form>
            
        </div>
    )
}
export default Register
