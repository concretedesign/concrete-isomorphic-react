'use strict';

var Hapi = require('hapi');
var Tv = require('tv');
var colors = require('colors');

var React = require('react');
var Router = require('react-router');

var config = require('./config');

var server = new Hapi.Server();
server.connection({
  host: config.server.host,
  port: config.server.port,
  routes: { cors: true }
});

server.route({
  method:  "*",
  path:    "/{params*}",
  handler: function (request, reply) {
    reply.file("static" + request.path);
  }
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
