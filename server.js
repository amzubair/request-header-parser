var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

app.get('/api/whoami', function(req, res) {
  
    
    res.json({
        ipaddress: req.connection.remoteAddress,
        language:  req.headers["accept-language"].split(',')[0],
        software: req.headers["user-agent"].split(/[()]+/).filter(function(e) { return e; })[1]
    })
    
})

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});



app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function () {
  console.log('Example app listening on port:' + port);
});