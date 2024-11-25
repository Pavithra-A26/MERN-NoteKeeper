const express = require ('express');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

const PORT = process.env.PORT;
const MONGODB = process.env.MONGODB;

mongoose.connect(MONGODB).then(()=>{
    console.log("Database connected.....")
})
.catch((error)=>{
    consoe.log("Error in connecting db...",error
        
    )
})

app.listen(PORT,()=>{
    console.log(`Server is runing on port no: ${PORT}`);
})