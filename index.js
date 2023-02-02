const express = require('express');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false)
const app = express();
require('dotenv').config();
const cors = require('cors');
const mainRoute = require('./src/Routes/mainRoute');

// middleware
app.use(cors({origin: "*"}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(process.env.PORT, (err, success)=>{
    if(err){
        console.log("err running server");
        return
    }
    console.log("Server is running on port", process.env.PORT);
} )

mongoose.connect(process.env.DB, (err, success)=>{
    if(err){
        return console.log("DB connection failed...");
    }
    console.log("DB connected...");
})

app.use('/api/v1/', mainRoute);
