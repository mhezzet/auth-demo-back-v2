const _ = require('lodash');
const User = require('../models/User');
const genGoogleUrl = require('../helpers/google-util');
const gentFacebookUrl = require('../helpers/facebook-util');
const googleUrl = genGoogleUrl();
const facebookUrl = gentFacebookUrl();

/**
|--------------------------------------------------
| Local auth
|--------------------------------------------------
*/

async function signInLocal(req, res) {
  const { email, password } = req.body;

  const user = await User.findOne({ 'local.email': email });
  if (!user) return res.status(400).send('invalid email or password');

  const validPassword = await user.validPassword(password);
  if (!validPassword) return res.status(400).send('invalid email or password');

  const token = user.genToken();

  res
    .header('x-auth-token', token)
    .send(_.pick(user.local, ['email', 'picture']));
}

/**
|--------------------------------------------------
| Google auth
|--------------------------------------------------
*/

function sendGoogleUrl(req, res) {
  res.send(googleUrl);
}

async function signInGoogle(req, res) {
  const { id, email, picture } = req.user;
  let user = await User.findOne({ 'google.id': id });
  if (user)
    return res
      .header('x-auth-token', user.genToken())
      .send(_.pick(user.google, ['email', 'picture']));

  user = new User({
    method: 'google',
    google: { id, email, picture }
  });
  await user.save();
  const token = user.genToken();

  res
    .header('x-auth-token', token)
    .send(_.pick(user.google, ['email', 'picture']));
}

/**
|--------------------------------------------------
| Facebook auth
|--------------------------------------------------
*/

async function sendFacebookUrl(req, res) {
  res.send(facebookUrl);
}

async function signInFacebook(req, res) {
  const { email, id, picture } = req.user;

  let user = await User.findOne({ 'facebook.id': id });
  if (user)
    return res
      .header('x-auth-token', user.genToken())
      .send(_.pick(user.facebook, ['email', 'picture']));

  user = new User({
    method: 'facebook',
    facebook: {
      id,
      email,
      picture: picture.data.url
    }
  });

  await user.save();
  const token = user.genToken();

  res
    .header('x-auth-token', token)
    .send(_.pick(user.facebook, ['email', 'picture']));
}

module.exports = {
  signInLocal,
  sendGoogleUrl,
  signInGoogle,
  sendFacebookUrl,
  signInFacebook
};
