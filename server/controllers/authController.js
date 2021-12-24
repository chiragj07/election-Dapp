const Voter = require('../model/voterModel');
const jwt = require('jsonwebtoken');
const handleErrors =(err)=>{
    const errors = {
        email: '',
        password:'',
        adhar:''
    }
    if(err.message.includes('dup key') && err.message.includes('email')){
        errors.email='email already registered'

    }
    else if(err.message.includes('email')){
        errors.email='invalid email'
    }
    if(err.message.includes('dup key') && err.message.includes('adhar')){
        errors.adhar= 'adhar already registered with another account'
    }
    else if(err.message.includes('adhar')){
        errors.adhar= 'adhar number is must be of 12 numeric character'
    }
    if(err.message.includes('password')){
        errors.password='invalid password selection'
    }
    
    
    return errors;


}

module.exports.auth_login_post = async(req,res)=>{
    const {email,password} = req.body;
    try{
         const voter = await Voter.login(email,password);
         console.log(voter);
         res.status(200);
         res.json({name:voter.name,email: voter.email, status:200 })   
    }catch(err){
        const errors = handleErrors(err);
        res.status(400);
        res.json({errors,status:400});
    }

}
module.exports.auth_register_post = async (req,res)=>{
    const {name, email,adhar,password} = req.body;
    console.log(req.body);
    try{
        
        const voter = await Voter.create({name,email,adhar,password});
        res.status(200);
        res.json({name, status: 200})


    }catch(err){
       console.log(err.message);
       const errors = handleErrors(err);
       res.status(400);
       res.json({errors,status:400});
    }
}