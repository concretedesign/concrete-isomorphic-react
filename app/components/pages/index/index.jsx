var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

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
        <h1>Index Page</h1>
      </div>
    );
  }
});

module.exports = Main;