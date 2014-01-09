var handler = function(req, res) {

    var request = url.parse(req.url, true);
    var action = request.pathname;
     
    if (action == '/jquery.js') {
        var img = fs.readFileSync('./jquery.js');
        res.writeHead(200, {'Content-Type': 'text/javascript' });
        res.end(img, 'binary');
    }
    else if (action == '/index.js') {
        var img = fs.readFileSync('./index.js');
        res.writeHead(200, {'Content-Type': 'text/javascript' });
        res.end(img, 'binary');
    }
    else if (action == '/index.css') {
        var img = fs.readFileSync('./index.css');
        res.writeHead(200, {'Content-Type': 'text/css' });
        res.end(img, 'binary');
    }
    else { 
        fs.readFile('./index.html', function (err, data) {
            if(err){
                throw err;
            }
            res.writeHead(200);
            res.end(data);
        });    
    }
}
var app = require('http').createServer(handler);
var fs = require('fs');
var url = require('url');

var port = process.env.PORT || 3000;
 
app.listen(port);