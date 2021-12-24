const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app= express();
dotenv.config({path: './config.env'});
const authRouter = require('./router/authRoutes');

const DB = process.env.DB;
const PORT= process.env.PORT;
app.use(express.json());
mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> console.log('connected to database succesfully'))
.catch((err)=> console.log(err.message));
app.listen(PORT,()=> console.log(`connection done to port number ${PORT}`));

app.use(authRouter);

