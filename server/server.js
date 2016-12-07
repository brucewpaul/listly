var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var React = require('react')
var Router = require('react-router')

mongoose.connect('mongodb://localhost/listly');

var listController = require ('./lists/listController.js');
var userController = require ('./lists/userController.js');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// app.use(express.static(__dirname + '/../client'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'client')));

app.get('/api/lists', listController.getAll);

app.get('/api/lists/user/:id', listController.getUser);

app.get('/api/list/:id', listController.getOne);

app.put('/api/list/:id', listController.updateOne);

app.post('/api/lists', listController.save);

app.put('/api/user', userController.updateOne);

app.get('/api/user/:id', userController.getOne);

app.post('/api/user/:id/stars/:star', userController.addStar);

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'client', 'index.html'));
});

app.get('/', function(req, res){
  res.send(200);
});

app.listen(3000);