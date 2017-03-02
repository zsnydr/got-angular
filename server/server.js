const path = require('path');
const express = require('express');
const parser = require('body-parser');
const router = require('./router');

const app = express();
const expressRouter = express.Router();

app.use(express.static(path.join(__dirname, '../public')));
app.use(parser.json());

app.use('/api', expressRouter);
router(expressRouter);

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
  console.log(`listening on port: ${app.get('port')}`);
});

module.exports.app = app;
