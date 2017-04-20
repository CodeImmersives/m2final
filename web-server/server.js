var express = require('express');
var port = 3000;
var root = __dirname + '/public/';
var app = express();

console.log(__dirname);

var middleWare = {
    requestAuthentication: function(req, res, next) {
        console.log('Authentication request!')
        next();
    },
    logger: function(req, res, next) {
        var dt = new Date().toString();
        console.log("Request: " + + ' ' + dt + req.method + ' ' + req.originalUrl);
        next();
    },
}

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