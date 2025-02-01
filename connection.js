const mongoose = require('mongoose');

function connectbuild(url){
    return mongoose.connect(url);
};

module.exports = connectbuild;