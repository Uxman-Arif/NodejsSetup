const usermodel = require('../models/usermodel');

async function firstview(req, res){
    console.log('This is the first function');
    return res.json({msg:'yes running!'})
};

async function secondfunc(req, res) {
    console.log('This is second function.');
    return res.json({msg:'The post function that name is second function.'})
}

module.exports = {
    first: firstview,
    second: secondfunc,
}