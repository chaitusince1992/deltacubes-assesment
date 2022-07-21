var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../dist/deltacubes-assesment')));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Autherization");
    res.header("Content-Type", "application/json");
    next();
})
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../dist/deltacubes-assesment/index.html'));
    // res.sendFile(path.join(__dirname + '/dist/index.html'));
});


var server = app.listen(process.env.PORT || 5000, function () {
    console.log("Listening on port: ", server.address().port);
})
