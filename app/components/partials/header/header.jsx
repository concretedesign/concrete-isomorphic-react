var React = require('react');
var Link = require('react-router').Link;

var Header = React.createClass({
  componentDidMount: function () {
    debugger;
    prismic.Api('https://lesbonneschoses.prismic.io/api', function (err, Api) {
      // You can use the Api object inside this block
      console.log("References: ", Api.data.refs);
    });
  },

  render: function () {
    console.log('foo')
    return (
      <div className='header-container'>
        <header>
          <div className='branding'>
            <img src="/img/typewriter.svg" />
          </div>
          <nav>
            <ul>
              <li><Link to="types">Types</Link></li>
              <li><Link to="collections">Collections</Link></li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
});

module.exports = Header;
