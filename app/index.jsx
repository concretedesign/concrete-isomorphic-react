var React = require('react');

// Handle the HTML rendering on the server
var Html = React.createClass({
  render: function() {
    return (
      <html>
        <head>
          <title>{ this.props.title }</title>
          <meta name="description" content="concrete-isomorphic-react" />
          <link href='http://fonts.googleapis.com/css?family=Maven+Pro:400,500,700' rel='stylesheet' type='text/css' />
          <link rel="stylesheet" href="/styles/app.css" type="text/css" />
        </head>
        <body dangerouslySetInnerHTML={{__html: this.props.markup}}></body>
        <script src="/js/app.js" type="text/javascript" />
      </html>
    );
  }
});

module.exports = Html;