//requires
var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
//var moduleName if needed

//variables
var app = express();
var port = 3000

var peopleList = [];//array of people sent from client side.

app.use(express.static('public'));// tells express to use this server path to find images etc.

app.use(bodyParser.urlencoded({extended: true})); // tell express to use body parser for objects

app.get('/', function(res,req){
     res.sendFile(path.resolve('./Public/index.html'));
    }); //index route - I think this is for when a client first lands on a page.

  app.get('/personlist', function(req, res){
      console.log('in personlist route');
     res.send(peopleList); // sends array to client.js when GET is requested
   });

app.post('/personlist', function(req, res) {
     var person = req.body.person;
     console.log('post person route', person);
    peopleList.push(person);
    res.sendStatus(201);
 }); // pushes the new person input object from client into array

 app.listen(port, function() {  //spins up server
    console.log('server is up on', port);
 }) //end spin up