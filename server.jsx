// Lib
var Hapi = require('hapi');
var Tv = require('tv');
var colors = require('colors');
var React = require('react');
var Router = require('react-router');

// Components
var Html = require('./app/html.jsx')

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
    Router.run(routes, req.url, function (Handler, state) {
      var title  = 'Places';
      var markup = React.renderToString(<Handler />);
      var html   = React.renderToStaticMarkup(<Html title={title} markup={markup} />);

      // TODO: send 404 status code
      // (see: https://github.com/gpbl/isomorphic-react-template/issues/3)
      // return ('<!DOCTYPE html>' + html);
      //res(title);
      reply.file('<!DOCTYPE html>' + html);
    });
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
