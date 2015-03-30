var React = window.React = require('react'); // Also assigned to window for react chrome extension

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Route = Router.Route;

var Main = require('./components/main.jsx');
var Vocabularies = require('./components/vocabularies/vocabularies.jsx');
var Collections = require('./components/collections/collections.jsx');
var CollectionTypes = require('./components/collections/collectionTypes.jsx');
var Types  = require('./components/types/types.jsx');

// Set up URL routing
var NotFound = React.createClass({
  render: function() {
    return <h2>Not found</h2>
  }
});

var routes = (
  <Route name="app" path="/" handler={Main}>
    <NotFoundRoute handler={NotFound} />
    <Route name="types" path="/types" handler={Types}>
      <Route name="type" path=":type" handler={Types} />
    </Route>
    <Route name="vocabularies" handler={Vocabularies} />
    <Route name="collections" path="/collections" handler={Collections} />
    <Route name="collection" path="/collections/:collection" handler={CollectionTypes} />
    <DefaultRoute handler={Types} />
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});

module.exports = Main;
