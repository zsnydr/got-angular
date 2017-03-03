const http = require('http');

const getData = (options, cb) => {
  http.get(options, (response) => {
    let body = '';
    response.on('data', (chunk) => {
      body += chunk;
    });
    response.on('end', () => {
      body = JSON.parse(body);
      cb(body);
    });
  });
};

module.exports = (app) => {
  app.get('/pokemon', (req, res) => {
    const options = {
      host: 'pokeapi.co',
      path: '/api/v2/pokemon/'
    };
    getData(options, (body) => {
      res.json(body.results);
    });
  });

  app.get('/pokemon/:name', (req, res) => {
    const options = {
      host: 'pokeapi.co',
      path: `/api/v2/pokemon/${req.params.name}/`
    };
    getData(options, (body) => {
      res.json(body);
    });
  });
};
