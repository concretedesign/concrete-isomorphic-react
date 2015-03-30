var React = window.React = require('react'); // Also assigned to window for react chrome extension

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Route = Router.Route;

var Main = require('./components/main.jsx');

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


// var TypeController = require('./controllers/typeController');
// var CollectionController = require('./controllers/collectionController');

// module.exports = [
//   { method: 'POST',    path: '/api/types',                  handler: TypeController.insert           },  // Create a new instance of the model and persist it into the data source
//   { method: 'GET',     path: '/api/types',                  handler: TypeController.find             },  // Find all instances of the model matched by filter from the data source
//   { method: 'GET',     path: '/api/types/count',            handler: TypeController.count            },  // Count instances of the model matched by where from the data source
//   { method: 'GET',     path: '/api/types/labels',           handler: TypeController.labels           },  // Find all labels of the model matched by where from the data source
//   { method: 'GET',     path: '/api/types/labels/{type}',    handler: TypeController.findByType       },  // Find all types of the model matched by where from the data source
//   { method: 'PUT',     path: '/api/types/{id}',             handler: TypeController.update           },  // Update attributes for a model instance and persist it into the data source
//   { method: 'GET',     path: '/api/types/{id}',             handler: TypeController.findByID         },  // Find a model instance by id from the data source
//   { method: 'DELETE',  path: '/api/types/{id}',             handler: TypeController.deleteById       },  // Delete a model instance by id from the data source

//   { method: 'POST',    path: '/api/collections',            handler: CollectionController.insert     },  // Create a new instance of the model and persist it into the data source
//   { method: 'GET',     path: '/api/collections',            handler: CollectionController.find       },  // Find all instances of the model matched by filter from the data source
//   { method: 'PUT',     path: '/api/collections/{id}',       handler: CollectionController.update     },  // Update attributes for a model instance and persist it into the data source
//   { method: 'GET',     path: '/api/collections/{id}',       handler: CollectionController.findByID   },  // Find a model instance by id from the data source
//   { method: 'DELETE',  path: '/api/collections/{id}',       handler: CollectionController.deleteById },  // Delete a model instance by id from the data source
//   { method: 'GET',     path: '/api/collections/count',      handler: CollectionController.count      },  // Count instances of the model matched by where from the data source
//   { method: 'GET',     path: '/api/collections/{id}/types', handler: CollectionController.findTypes  },   // Queries types of collection.

//   // Routes for static files & components
//   { method: 'GET',     path: '/{param*}',                   handler: { directory: { path: './public/', listing: true, index: true }}},
//   { method: 'GET',     path: '/js/{param*}',                handler: { directory: { path: './public/js', listing: false, index: false }}},
//   { method: 'GET',     path: '/img/{param*}',               handler: { directory: { path: './public/img', listing: false, index: false }}},
//   { method: 'GET',     path: '/styles/{param*}',            handler: { directory: { path: './public/styles', listing: false, index: false }}}
// ];