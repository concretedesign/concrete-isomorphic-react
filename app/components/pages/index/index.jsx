var React = require('react');
var jade = require('react-jade');

var template = jade.compileFile(__dirname + '/index.jade');

var Index = React.createClass({

  render: function () {
    return template({local: 'values'});
  }
});

module.exports = Index;