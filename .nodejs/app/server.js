var express = require('express');
var path = require('path');
var fs = require('fs');
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

app.post('/update-profile', function (req, res) {
  var userObj = req.body;

  MongoClient.connect("mongodb://mongoadmin:secret@mongodb-server", function (err, client) {
    if (err) throw err;

    var db = client.db('Bank');
    userObj['account'] = 1;
    
    var myquery = { account: 1 };
    var newvalues = { $set: userObj };
    
    db.collection("customers").updateOne(myquery, newvalues, {upsert: true}, function(err, res) {
      if (err) throw err;
      client.close();
    });

  });
  // Send response
  res.send(userObj);
});

app.get('/get-profile', function (req, res) {
  var response = {};
  var MongoClient = require('mongodb').MongoClient,
  f = require('util').format,
  fs = require('fs');
  // Read the certificate authority
  var ca = [fs.readFileSync("/etc/ssl/mongodb.pem")];
  var key = [fs.readFileSync("/etc/ssl/mongodb-cert.key")];
  var cert = [fs.readFileSync("/etc/ssl/mongodb-cert.crt")];

  
  // Connect to the db
  MongoClient.connect("mongodb://mongoadmin:secret@mongodb-server/?ssl=true", {
  server: {
    sslValidate: false,
    //checkServerIdentity:false,
    sslCa: ca,
    sslKey: key,
    ssCert: cert
  }
}
  , function (err, client) {
    if (err) throw err;

    var db = client.db('Bank');

    var myquery = { account: 1 };
    
    db.collection("customers").findOne(myquery, function (err, result) {
      if (err) throw err;
      response = result;
      client.close();
      
      // Send response
      res.send(response ? response : {});
    });
  });
});

app.listen(3000, function () {
  console.log("app listening on port 3000!");
});
