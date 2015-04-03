var React = require('react');
var jade = require('react-jade');

var template = jade.compileFile(__dirname + '/about.jade');

var About = React.createClass({

  render: function () {
    return template({local: 'values'});
  }
});

module.exports = About;