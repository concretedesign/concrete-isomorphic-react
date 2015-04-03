// Lib
var Hapi = require('hapi');
var Tv = require('tv');
var colors = require('colors');
var React = require('react');
var Router = require('react-router');
require('node-jsx').install({extension: '.jsx'});

var config = require('./config');
var routes = require('./routes.jsx');
var routeHandler = require('./server.jsx');

var server = new Hapi.Server();
server.connection({
  host: config.server.host,
  port: config.server.port,
  routes: { cors: true }
});

server.route({
  method: 'GET',
  path: '/js/{param*}',
  handler: {
    directory: {
      path: './public/js',
      listing: true,
      index: true
    }
  }
});

server.route({
  method: 'GET',
  path: '/img/{param*}',
  handler: {
    directory: {
      path: './public/img',
      listing: true,
      index: true
    }
  }
});

server.route({
  method: 'GET',
  path: '/styles/{param*}',
  handler: {
    directory: {
      path: './public/styles',
      listing: true,
      index: true
    }
  }
});

server.route({
  method: 'GET',
  path: '/admin/{param*}',
  handler: {
    directory: {
      path: './public/admin',
      listing: true,
      index: true
    }
  }
});


server.route({
  method:  "*",
  path:    "/{params*}",
  handler: routeHandler
});

// Register Tv, which displays a log at localhost:3000/debug/console
server.register(Tv, function (err) {
  if (!err) {
    server.start(function () {
      console.log(colors.white('---------------------------------------------------'));
      console.log(colors.green('Server running at: ' + server.info.uri));
      console.log(colors.white('---------------------------------------------------'));
    });
  }
});
