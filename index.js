const express = require('express');
const routes = require('./routes/urls');
const usermdl = require('./models/usermodel');
const connect = require('./connection');

connect(url = 'mongodb://127.0.0.1:27017/managejs-pro')
app = express()

app.use('/user', routes)

app.listen(8000, ()=>{console.log('start hoo gya he oye...')})