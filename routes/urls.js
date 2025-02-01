const express = require('express');
const user = require('../controllers/index');
const routes = express.Router()


// routes.get('/', user.first)
// routes.post('/', user.second)

routes.route('/').get(user.first).post(user.second)
module.exports = routes;
