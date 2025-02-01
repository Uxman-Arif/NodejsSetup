const mongoose = require('mongoose');

const usermodeschema = new mongoose.Schema({
    name:{
        type: String,
    },
    cost:{
        type: String,
    }
}, {timestamps:true})

const user = mongoose.model('user', usermodeschema)

module.exports = user