var express = require('express');
var router = express.Router();
var User = require('../models/users');

  router.get('/', function (req, res) {
    res.render('register', {});
  });

  router.post('/', function (req, res) {
    req.checkBody('password', 'Password is required').notEmpty();
    var errors = req.validationErrors();
    if (errors) {
      //res.json(errors);
      res.render('login', {errors: errors});
    } else {
      (new User(req.body)).save(function (err, doc) {
        if (err) return res.render('login', {errors: [{msg: 'Cant register'}]});         
      });
      res.render('login', {});
    }    
  });
module.exports = router;