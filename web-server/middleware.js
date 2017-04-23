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

module.exports = middleWare;