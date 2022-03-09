var http = require('http');

var url = require('url');


http.createServer(function (req, res) {

    var route = req.url

    if (route === '/') {
        res.end('This is from backend my brother')
    }


    console.log("Port is 5000 now")
}).listen(5000)