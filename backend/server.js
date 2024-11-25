const express = require ('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyparser = require('body-parser');
require('dotenv').config();

const app = express();

//Middleware
app.use(cors());
app.use(bodyparser.json());

const PORT = process.env.PORT;
const MONGODB = process.env.MONGODB;


// DataBase connection
mongoose.connect(MONGODB).then(()=>{
    console.log("Database connected.....")
})
.catch((error)=>{
    consoe.log("Error in connecting db...",error
        
    )
})

//Routes

const AuthRoutes = require('./Routes/AuthRoutes');
const NoteRoutes = require('./Routes/NoteRoutes');

app.use('/auth',AuthRoutes);
app.use('/note',NoteRoutes);


//server
app.listen(PORT,()=>{
    console.log(`Server is runing on port no: ${PORT}`);
})