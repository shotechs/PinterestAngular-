var express = require('express'); 
var fs = require('fs'); 
var request = require('request'); 
var cheerio = require('cheerio'); 
var router = express.Router(); 
var Item = require('./models/Item.model'); 

router.post('/scrape', function (req, res) { 
var url = req.body.url;

if(url.indexOf('pinterest') > -1)
 { request(url, function(error, resp, body) 
 	{ console.log(url); 
if(error) { 
	console.log('error scraping'); 
} 

if(!error){
var pin = {}; 
var $ = cheerio.load(body);
//var title = $('a').first(); 
//var $title = $(title).attr('href');
var title = $('title').get(0);
var $title = $(title).text(); 
//var img = $('div img').get(1); 
var img = $('div img').first();
var $img = $(img).attr('src'); 
var $desc = $(img).attr("alt"); 
var pin = {
	title: $title,
	img: $img, 
	desc: $desc, 
	url: url 
} 
console.log("scraped: ", pin); 
res.json(pin); 
}
});
}else{
console.log("cannot locate scraper");
} })


module.exports = router;