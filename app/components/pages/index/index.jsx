var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Prismic = require('prismic.io').Prismic;

// Initialize our main component
var Index = React.createClass({

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
    Prismic.Api('https://lesbonneschoses.prismic.io/api', function (err, Api) {
      // You can use the Api object inside this block
      console.log("References: ", Api.data.refs);
    });
    return (
      <div className={this.state.showSidebar ? 'slide-left' : ''}>
        <h1>Index Page</h1>
      </div>
    );
  }
});

module.exports = Index;