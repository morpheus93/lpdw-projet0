var express = require('express');
var app = express();

app.use(express.static('public'));

app.listen(8080, function () {
  console.log('Projet2 is active on port 80');
});
