const express = require('express');
const app =express();
const morgan =require('morgan');
const mongoose=require('mongoose');
mongoose.set('strictQuery', true);
const notesRoutes=require('./api/routes/notes');
const axios = require('axios').default;
const cors = require('cors')

app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(express.json());


mongoose.connect('mongodb://127.0.0.1:27017/NoteDB',{
   useNewUrlParser: true,
   useUnifiedTopology: true,
 })

 mongoose.connection.on('connected',()=>{
  console.log('MomgpDB connected!');
});

app.use('/Notes',notesRoutes);

app.use((req,res,next)=>{
    const error =new Error ('Not Found');
    error.status =404;
    next(error);
  });
  
  app.use((error,req,res,next)=> {
  
     res.status(error.status || 500);
     res.json({
        error:{
           message:error.message
        }
     })
  });
  
  
  module.exports= app;