const auth = require('express-promise-router')();
const signInLocalBodyValidator = require('../middleware/usersAuth/signBodyValidator');
const googleAccessTokenValidator = require('../middleware/usersAuth/googleAccessTokenValidator');
const {
  signInLocal,
  sendGoogleUrl,
  signInGoogle
} = require('../controllers/auth');

auth.route('/local').post(signInLocalBodyValidator, signInLocal);

auth
  .route('/google')
  .get(sendGoogleUrl)
  .post(googleAccessTokenValidator, signInGoogle);

module.exports = auth;
