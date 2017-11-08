var express = require('express'); 
var path = require( 'path' ); 
var request = require( 'request' ); 
var cheerio = require( 'cheerio' ); 
//var fs = require('fs'); 
var app = express(); 
var port = 8080; 
var mongoose = require('mongoose'); 
//var _ = require('lodash'); 
var bodyParser = require('body-parser'); 
var routes = require('./routes');


mongoose.connect('mongodb://localhost/pintProj');



app.set('views', path.join(__dirname, 'views' )); 
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html' ); 

app.use(bodyParser.json()); 
app.use(express.static(path.join(__dirname, 'public' ))); 

app.use('/api', routes);





app.listen(port, function () {
	console.log('running server on port' + port);
}); 
