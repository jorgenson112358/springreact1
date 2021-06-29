var http = require('http');
var url = require('url');
const portNumber = 8090;

http.createServer(function(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    if (req.url === '/books') {
        getBooks(res);
    }
    else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('hello world');
        res.end();    
    }

    
}).listen(portNumber);
console.log('starting on port ' + portNumber.toString());


function getBooks(res) {
     var data = [
        {
            'author': 'Neil Gaiman',
            'title': 'American Gods'
        },
        {
            'author': 'N.K. Jemisin',
            'title': 'The Fifth Season'
        },
        {
            'author': 'Alexandre Dumas',
            'title': 'The Three Musketeers'
        },
        {
            'title': 'The Fellowship of the Ring',
            'author': 'J.R.R. Tolkien'
        }
    ];

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(data));
    res.end();
}
