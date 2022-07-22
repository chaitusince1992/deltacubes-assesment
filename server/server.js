var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, '../dist/deltacubes-assesment')));
app.use((req, res) => {
    res.sendFile(path.join(__dirname, '../dist/deltacubes-assesment/index.html'));
});

var server = app.listen(process.env.PORT || 5000, function () {
    console.log("Listening on port: ", server.address().port);
})
