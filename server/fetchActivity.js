const axios = require('axios');
const url = 'http://www.boredapi.com/api/activity';

const fetchActivity = (path) => {
  return axios.get(`${url}${path}`)
    .then(res => res.data)
    .catch(error => error);
};

module.exports = fetchActivity;
