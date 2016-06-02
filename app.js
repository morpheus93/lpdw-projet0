var express = require('express');
var app = express();
var fs = require('fs');
var request = require('request');
var bodyParser = require('body-parser');

//edit the api location here
var apiIndex = "http://127.0.0.1/lpdw-projet2-api/web/app_dev.php";

app.use(express.static('public'));
app.use(bodyParser.json());

app.all('/api/*', function (req, res) {
  console.log(req);
  var reqPath = req.url.replace("/api","");
  request({
    // will be ignored
    method: req.method,
    uri: apiIndex+reqPath,
    headers : req.headers
  },function(req,f,body){
    res.json(JSON.parse(body));
  })
});

app.listen(8080, function () {
  console.log('Projet2 is active on port 8080');
});

var d = "http://127.0.0.1/lpdw-projet2-api/web/app_dev.php/projects"
