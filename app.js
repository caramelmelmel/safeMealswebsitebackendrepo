//THIS FILE IS TO STATE ONLY ONE ENDPOINT
const express = require('express');
const app = express();
const port = 3000;

app.get('/partner',(req,res)=>{
    if(err){
        
    }
    console.log('partner is registered in the database');
    res.send("{reg_status:true}");
});

