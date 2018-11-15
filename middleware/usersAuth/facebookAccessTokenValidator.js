const axios = require('axios');

module.exports = async function(req, res, next) {
  const token = req.body.accessToken;
  if (!token) return res.status(401).send('Access denied , no token provided');

  try {
    const response = await axios.get('https://graph.facebook.com/v3.2/me', {
      params: {
        fields: 'email, name, id, picture',
        access_token: token
      }
    });
    req.user = response.data;
    next();
  } catch (ex) {
    return res.status(400).send('invalid token');
  }
};
