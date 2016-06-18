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
app.use(bodyParser.json());

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.all('/api/*', function (req, res) {
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


    if(req.query.access_token){
      console.log("Authentification with token : ");
      console.log(req.query.access_token);
      options.headers = {};
      options.headers['Authorization'] = "Bearer "+req.query.access_token;
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
