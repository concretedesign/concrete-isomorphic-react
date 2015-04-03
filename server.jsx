'use strict';

var React         = require('react');
var Router        = require('react-router');

var routes = require('./routes.jsx');
var Index = require('./app/index.jsx');

module.exports = function (request, reply) {
  Router.run(routes, request.url.path, function (Handler, state) {

    var title  = 'Places';
    var markup = React.renderToString(<Handler />);
    var index   = React.renderToStaticMarkup(<Index title={title} markup={markup} />);

    // TODO: send 404 status code
    // (see: https://github.com/gpbl/isomorphic-react-template/issues/3)
    reply.response('<!DOCTYPE html>' + index);
    //res(title);
  });
}