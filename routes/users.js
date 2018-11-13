const users = require('express-promise-router')();
const { profile, signUp } = require('../controllers/users');
const signUpBodyValidation = require('../middleware/usersAuth/signBodyValidator');
const accessToken = require('../middleware/usersAuth/accessTokenValidator');

users.route('/').post(signUpBodyValidation, signUp);

users.route('/me').get(accessToken, profile);

module.exports = users;
