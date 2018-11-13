const axios = require('axios');

module.exports = async function(req, res, next) {
  const token = req.header('Authorization');
  if (!token) return res.status(401).send('Access denied , no token provided');

  try {
    const response = await axios.get(
      'https://www.googleapis.com/userinfo/v2/me',
      {
        headers: {
          Authorization: token
        }
      }
    );

    req.user = response.data;
    next();
  } catch (ex) {
    return res.status(400).send('invalid token');
  }
};
