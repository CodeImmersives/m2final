var express = require('express');
var port = process.env.PORT || 3000;
var websiteRoot = __dirname + '/public/';
var bodyParser = require('body-parser');

var app = express();
var middleWare = require('./middleware.js');
var qaItemController = require('./qaItemController.js');


app.use(middleWare.logger);
app.use(bodyParser.json());  // helps to process post data

// webserver root
app.get('/', function(req, res) {
    res.sendFile(websiteRoot + 'index.html');    
});

// public website
app.use(express.static(websiteRoot));


// RESTful web services

// Read
app.get('/qas', function(req, res) {
    var qaItems;
    
    if (req.query && req.query.category) {
        qaItems = qaItemController.getCategory(req.query.category);
    } else  {
        qaItems = qaItemController.getAll();
    }                 
    res.json(qaItems);  
});

// Create 
app.post('/qas', function(req, res) {
    var qaItem = qaItemController.qaItemCreate(req.body);
    res.json(qaItem);
});



app.listen(port, function() {
    console.log("Listening to requests at port " + port)
});


// TODO: authentication
// app.use(middleWare.requestAuthentication);