const express = require('express');
const usermodel = require('../models/usermodel');
const routes = express.Router()

routes.route('/')
    .get(async (req, res)=>{
    const newuser = await usermodel.create({
        name:'Usman Nakyalvi',
        cost:'pk',
    })
    console.log(newuser)
    return res.status(201).json({msg:'connection success!'})
})

module.exports = routes