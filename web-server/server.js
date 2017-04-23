var express = require('express');
var port = process.env.port || 3000;
var root = __dirname + '/public/';
var app = express();
var middleWare = require('./middleware.js');

console.log(__dirname);

app.use(middleWare.logger);

// no authentication required        
app.use(express.static(root));

// pages below requre authentication
app.use(middleWare.requestAuthentication);

app.get('/home', function(req, res) {
    
    res.sendFile('home.html', {
        root: root
    });     
});

app.get('/user', function(req, res) {
    
    res.sendFile('user.html', {
        root: root
    });     
});


app.listen(port, function() {
    console.log("Listening to requests at port " + port)
});