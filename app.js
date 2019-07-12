const express = require("express");
const path = require("path");
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

//config
app.use(bodyParser.json());

//DB
mongoose.connect('mongodb://localhost/1955_api');
require("./server/config/mongoose");

//Routes
require("./server/config/routes")(app);

app.listen(8000, ()=>{
    console.log(`Listening on PORT: 8000!`);
});