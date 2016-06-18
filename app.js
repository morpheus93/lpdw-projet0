var express = require('express');
var app = express();
var fs = require('fs');
var request = require('request');
var bodyParser = require('body-parser');

//edit the api location here
var apiIndex = "http://colab.laouiti.me/app_dev.php";

app.use(express.static('public'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.all('/api/*', function (req, res) {
  console.log(req.body);
  var reqPath = req.url.replace("/api","");
  console.log("-- API Call --");
  console.log(req.method+" on "+apiIndex+reqPath);

  //replace the calling uri
  //req.headers.host = apiIndex+reqPath;


  var options = {
    url : apiIndex+reqPath,
    method: req.method,
    formData: req.body
  }

  request(options,function(req,response,body){
    console.log("-> Status "+response.statusCode);
    console.log("--------------");
    console.log("Form-data");
    console.log(options.formData);
    res.status(response.statusCode).send(body);
  })
});

app.listen(8080, function () {
  console.log('Projet2 is active on port 8080');
});

var d = "http://127.0.0.1/lpdw-projet2-api/web/app_dev.php/projects"
