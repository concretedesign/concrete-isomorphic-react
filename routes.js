// Lib
var React = window.React = require('react'); // Also assigned to window for react chrome extension
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Route = Router.Route;

// Components
var ApplicationLayout = require('./components/layouts/application/application.jsx');
var IndexPage = require('./components/pages/index/index.jsx');
var AboutPage = require('./components/pages/about/about.jsx');

// Set up URL routing
var NotFound = React.createClass({
  render: function() {
    return <h2>Not found</h2>
  }
});

var routes = (
  <Route name="app" path="/" handler={ApplicationLayout}>
    <DefaultRoute name="index" handler={Index} />
    <Route name="about" path="about" handler={About} />
  </Route>
);

module.exports = routes;
