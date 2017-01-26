var express = require('express');
var router = express.Router();
var User = require('../models/users');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


  router.get('/', function (req, res) {
    res.render('login', {});
  });

  passport.use(new LocalStrategy(
    function(email, password, done) {
      User.findOne({ email: email }, function (err, user) {
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'Fail.' });
        }
        if (user.password !== password) {          
          return done(null, false, { message: 'Fail.' });
        }
        return done(null, user);
      });
    }
  ));

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  router.post('/',
   passport.authenticate('local', 
    { successRedirect: '/news', failureRedirect: '/login', flash: true  }
   ),
   function (req, res) {
    res.redirect('/news');
  });

  router.get('/logout', function(req, res){
    req.logout();    
    res.redirect('/login');
  });
module.exports = router;