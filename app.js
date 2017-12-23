var express = require('express');

var app = express();
var port = process.env.port || 8080;

app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', function(req, res) {
    res.send('Hello world!');
});

app.get('/books', function(req, res) {
    res.send('Hello books!');
});

app.listen(port, function(err) {
    console.log('running server on port ' + port);
});