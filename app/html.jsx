var React = require('react');

// Handle the HTML rendering on the server
var Html = React.createClass({
  render: function() {
    return (
      <html>
        <head>
          <title>{ this.props.title }</title>
          <link rel="stylesheet" href="/styles/app.css" type="text/css" />
        </head>
        <body dangerouslySetInnerHTML={{__html: this.props.markup}}></body>

        <script src="/js/app.js" type="text/javascript" />
      </html>
    );
  }
});

module.exports = Html;