const config = require('config');
const { stringify } = require('query-string');

function facebookURL() {
  let params = {
    response_type: 'token',
    display: 'popup',
    client_id: config.get('FACEBOOK_CLIENT_ID'),
    redirect_uri: config.get('FACEBOOK_REDIRECT')
  };

  params = stringify(params);
  const url = `https://www.facebook.com/v3.2/dialog/oauth?${params}`;

  return url;
}

module.exports = facebookURL;
