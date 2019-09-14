const express = require('express');

const app = express();

app.use(express.static('public'));

app.use('/scripts', express.static(`${__dirname}/node_modules`));

app.use((req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});



module.exports = app;
