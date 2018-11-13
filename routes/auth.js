const auth = require('express-promise-router')();
const signInLocalBodyValidator = require('../middleware/usersAuth/signBodyValidator');
const googleAccessTokenValidator = require('../middleware/usersAuth/googleAccessTokenValidator');
const facebookAccessTokenValidator = require('../middleware/usersAuth/facebookAccessTokenValidator');
const {
  signInLocal,
  sendGoogleUrl,
  signInGoogle,
  sendFacebookUrl,
  signInFacebook
} = require('../controllers/auth');

auth.route('/local').post(signInLocalBodyValidator, signInLocal);

auth
  .route('/google')
  .get(sendGoogleUrl)
  .post(googleAccessTokenValidator, signInGoogle);

auth
  .route('/facebook')
  .get(sendFacebookUrl)
  .post(facebookAccessTokenValidator, signInFacebook);

module.exports = auth;
