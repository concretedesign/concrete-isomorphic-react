// Lib
var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

// // Components
// var Header = require('../../partials/header.jsx');
// var Footer = require('../../partials/footer.jsx');
// var Sidebar = require('../../partials/sidebar.jsx');

var title = "Title that should be changed";

// Initialize our main component
var Main = React.createClass({

  getInitialState: function() {
    return {
      showSidebar: false
    };
  },

  toggleSidebar: function () {
    this.setState({
      showSidebar: !this.state.showSidebar
    });
  },

  render: function () {
    return (
      <DocumentTitle title={ title }>
        <div className="main-container">
          <RouteHandler />
        </div>
      </DocumentTitle>
    );
  }
});

module.exports = Main;