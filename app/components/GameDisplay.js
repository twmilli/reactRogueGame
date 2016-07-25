var React = require('react');

var GameDisplay = React.createClass({
  shouldComponentUpdate: function(nextProps){
    for (var prop in this.props){
      if (this.props[prop] != nextProps[prop]){
        return true;
      }
    }
    return false;
  },

  render: function(){
    return(
      <div className='game-display'>
        <div className='label'>Level: {this.props.level}</div>
        <div className='key'></div> {this.props.keysFound}/{this.props.totalKeys}
        <div className='enemy'></div> {this.props.enemiesKilled}/{this.props.totalEnemies}
      </div>
    )
  }
})

module.exports = GameDisplay;
