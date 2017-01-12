var express = require('express');
var router = express.Router();
var News = require('../models/news');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
/* GET home page. */

	router.get('/', function(req, res, next) {
		News.find({}, function(err, data){
			if(err) {
				console.log(err);
			}
			else{
				return res.render('news', { news: data, title: 'News' });
				
			}
		});
	});

	router.get('/add', function (req, res, next) {
		return res.render('newsForm');
	});
	
	router.post('/', multipartMiddleware, function (req, res) {
		var n = new News(req.body);
		console.log("body" + req.body);
		n.save(function (err, doc) {
			if (err)
			{
				console.log("error");
				return res.render('newsForm', {errors: [{msg: 'Cant register'}]});
			}
			else return res.redirect('news');
			});
	});

module.exports = router;
