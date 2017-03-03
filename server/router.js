const http = require('http');

module.exports = (app) => {
  app.get('/pokemon', (req, res) => {
    const options = {
      host: 'pokeapi.co',
      path: '/api/v2/pokemon/'
    };

    http.get(options, (response) => {
      let body = '';
      response.on('data', (chunk) => {
        body += chunk;
      });
      response.on('end', () => {
        body = JSON.parse(body);
        res.json(body.results);
      });
    });
  });
};
