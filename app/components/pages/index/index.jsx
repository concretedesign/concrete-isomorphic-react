var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var jade = require('react-jade');

var template = jade.compileFile(__dirname + '/index.jade');

var Index = React.createClass({

  render: function () {
    return template({Link: Link});
  }
});

module.exports = Index;