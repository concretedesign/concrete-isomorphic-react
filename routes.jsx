// Lib
var React = require('react'); // Also assigned to window for react chrome extension
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Route = Router.Route;

// Components
var ApplicationLayout = require('./app/components/layouts/application/application.jsx');
var IndexPage = require('./app/components/pages/index/index.jsx');
var AboutPage = require('./app/components/pages/about/about.jsx');

// Set up URL routing
var NotFound = React.createClass({
  render: function() {
    return <h2>Not found</h2>
  }
});

var routes = (
  <Route name="app" path="/" handler={ApplicationLayout}>
    <DefaultRoute name="index" handler={IndexPage} />
    <Route name="about" path="about" handler={AboutPage} />
  </Route>
);

module.exports = routes;
