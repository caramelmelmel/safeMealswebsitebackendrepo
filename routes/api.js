require('dotenv').config();
const express = require('express');
const app = express();
const router = express.Router();
const path = require('path')
const port = process.env.PORT || 3000;
//safety to throw the env variables
const Pool = require('pg').Pool;
const isProduction = process.env.NODE_ENV=='production';
const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`
const pool = new Pool({
    connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
    ssl: isProduction
})
//const Partner = require('../models').Partner;

//create route to register the user 
router.post('/signuppartner',(req,res)=>{
    console.log(req.body);
    if(!req.body.username){
        res.status(400).send({msg:'Please pass username'})
    }
    else if(!req.body.email){
        res.status(400).send({msg:'please pass email'})
    }
    else if(!req.body.contact){
        res.status(400).send({msg:'please pass contact'})
    }
    else if(!req.body.area_code){
        res.status(400).send({msg:'please pass area code'})
    }
    else if(!req.body.email&&!req.body.area_code&&req.body.contact&&req.body.username){
        res.status(400).send({msg:'Please fill in all details except website'})
    }

    //on success
    //extract the data sent over
    else{ 
    if(!req.body.website){
        pool.query('INSERT INTO partner(partner_name,partner_email,partner_contact,area_code) VALUES ($1, $2, $3, $4)',
        [req.body.username,req.body.email, req.body.contact,req.body.area_code],(error,results)=>{
            if (error){
                throw error
            }
            response.status(201).send(`Partner added with ID: ${results.insertID}`)
        })
    }
}
})

app.listen(port,()=>{
    console.log(`App running on port ${port}`)
})
