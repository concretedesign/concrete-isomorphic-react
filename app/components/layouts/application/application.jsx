var React = window.React = require('react'); // Also assigned to window for react chrome extension

var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var Header = require('../../partials/header.jsx');
var Footer = require('../../partials/footer.jsx');
var Sidebar = require('../../partials/sidebar.jsx');
var Main = require('../../pages/main.jsx');

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
      <div className={this.state.showSidebar ? 'slide-left' : ''}>
        <h1>Application layout</h1>
      </div>
    );
  }
});

module.exports = Main;