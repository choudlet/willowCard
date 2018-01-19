const express = require('express');

const port = 3500

const app = express();

app.use(express.static('public'));

app.get('/',  (req, res) => {
  res.render('index.html');
});


app.listen(port, function listenHandler() {
  console.info(`Running on ${port}...`);
});