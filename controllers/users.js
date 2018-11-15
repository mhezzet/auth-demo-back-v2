const User = require('../models/User');
const _ = require('lodash');

async function signUp(req, res) {
  const { email, password } = req.body;

  let user = await User.findOne({ 'local.email': email });
  if (user) return res.status(400).send('email is already exist');

  user = new User({
    method: 'local',
    local: {
      email,
      password
    }
  });
  await user.save();

  const token = user.genToken();

  res
    .header('x-auth-token', token)
    .send(_.pick(user.local, ['email', 'picture']));
}

async function profile(req, res) {
  const user = await User.findById(req.user._id).select('-local.password');

  res.send(user);
}

module.exports = {
  signUp,
  profile
};
