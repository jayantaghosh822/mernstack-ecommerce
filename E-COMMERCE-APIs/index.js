var express = require('express');
var app = express();

app.get('/', function (req, res) {
res.send('Hello World');
})
app.listen(8000);

const data_base = require("./config/db");
// data_base.Connect_db();












 