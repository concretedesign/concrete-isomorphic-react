var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

// Initialize our main component
var About = React.createClass({

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
        <h1>About Page</h1>
      </div>
    );
  }
});

module.exports = About;