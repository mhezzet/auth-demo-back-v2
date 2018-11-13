const User = require('../models/User');
const genGoogleUrl = require('../helpers/google-util');
const OauthUrl = genGoogleUrl();

async function signInLocal(req, res) {
  const { email, password } = req.body;

  const user = await User.findOne({ 'local.email': email });
  if (!user) return res.status(400).send('invalid email or password');

  const validPassword = await user.validPassword(password);
  if (!validPassword) return res.status(400).send('invalid email or password');

  const token = user.genToken();

  res.send(token);
}

function sendGoogleUrl(req, res) {
  res.send(OauthUrl);
}

async function signInGoogle(req, res) {
  const { id, email, picture } = req.user;

  let user = await User.findOne({ 'google.id': id });
  if (user) return res.send(user.genToken());

  user = new User({
    method: 'google',
    google: { id, email, picture }
  });
  await user.save();
  res.send(user.genToken());
}

module.exports = {
  signInLocal,
  sendGoogleUrl,
  signInGoogle
};
