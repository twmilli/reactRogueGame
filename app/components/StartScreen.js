var React = require('react');

var StartScreen = React.createClass({
  contextTypes:{
    router: React.PropTypes.object.isRequired
  },

  start: function(e){
    this.context.router.push({
      pathname: '/game'
    });
  },
  render: function(){
    return(
      <div className='start-screen'>
        <h1 className='title'>Rogu</h1>
        <button onClick={this.start}>Start</button>
      </div>
    )
  }
});

module.exports = StartScreen;
