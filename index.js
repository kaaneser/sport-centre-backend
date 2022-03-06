const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const route = require('./src/route/router');

app.use(express.json());
app.use('/', route);

app.listen(port, () => console.log('App running'));

module.exports = app;