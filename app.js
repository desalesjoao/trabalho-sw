//importa o modulo 'express' , que é um framework web para o node.js
var express = require('express');

var consign = require('consign');


var app = express();


app.set('view engine' , 'ejs');


app.set('views' , './src/views');


consign()
   .include('src/routes')
   .then('scr/models')
   .then('scr/controlles')
   .into(app);


