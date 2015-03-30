var React = require('react');

var Collections = require('./collections/collections.jsx');

var CollectionsSidebar = React.createClass({

  getInitialState: function () {
    return { collections: [] };
  },

  render: function () {
    return (
      <div className="collections-sidebar">
        <h1>Delete</h1>
        <Collections />
      </div>
    );
  }
});

module.exports = CollectionsSidebar;

