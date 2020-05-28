var express = require('express');
var app = express();
var uuid = require('uuid').v4();
const port = 3000;

var server = app.listen(port, function () {
    console.log(`Express server has started uuid=${uuid} on port : ${port}`);
});

app.get('/', function (req, res) {
    res.send(`Server uuid=${uuid} Responsed`);
});