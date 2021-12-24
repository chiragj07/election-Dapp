const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');
const voterSchema = new mongoose.Schema({
    name:{
        type: String,
        minlength:3,
        require:true,
        lowercase:true,
    },
    adhar:{
        type:Number,
        require:true,
        unique: [true,'adhar already registered with other account'],
        validate(val){

            if(val.toString().length !== 12){
                throw new Error ('adhar number is must be of 12 numeric character');
            }
        }
    },
    email:{
        type:String,
        require: true,
        unique:true,
        validate(val){
            if(!validator.isEmail(val)){
                throw new Error('Not a Valid Email');
            }
        }
    },
    password:{
        type: String,
        require: true,
        minlength:[8,'password length must be minimum 8 character'],

    },
    city:{
        type: String,
        require: true,
    },
    isVoted: {
        type: Boolean,
        default: false
    }

})
voterSchema.pre('save', async function(next){

    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();

})
voterSchema.statics.login = async function(email,password){
        const voter= await this.findOne({email});
        if(voter){
            const check = await bcrypt.compare(password, voter.password);
            if(check){
                return voter;
            }
            else{
                throw new Error('invalid password');
            }
        }
        else{
            throw new Error('invalid email');
        }


}

const Voter = mongoose.model('voter', voterSchema);

module.exports = Voter;