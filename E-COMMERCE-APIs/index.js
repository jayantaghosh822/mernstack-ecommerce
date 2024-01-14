// var express = require('express');
// var app = express();

// app.get('/', function (req, res) {
// res.send('Hello World');
// })
// app.listen(8000);

// import express from 'express';
// import connect_db from './config/db';
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: false
  }));
const cors = require('cors');
app.listen(8000);

// const data_base = require("./config/db");
// data_base.Connect_db();
 const authRoutes = require("./routes/authRoute");
 const categoryRoutes = require("./routes/categoryRoutes");
 const productRoutes = require("./routes/productRoute");
// app.post('/api/v1/auth/register', (req, res) => { 
//     console.log(req);
// }); 
app.use("/api/v1/auth/",authRoutes.router);
app.use("/api/v1/auth/",categoryRoutes.router);
app.use("/api/v1/auth/",productRoutes.router);












 