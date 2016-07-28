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
    var boss=null;
    if (this.props.totalBoss > 0){
      boss = (
      <div className="label">
        <div className="boss"></div>{this.props.bossKilled}/{this.props.totalBoss}
      </div>
    );
    }

    return(
      <div className='game-display'>
        <div className='label'>Level: {this.props.level}</div>
        <div className='label'>
          <div className='key'></div>
          {this.props.keysFound}/{this.props.totalKeys}
        </div>
        <div className='label'>
          <div className='enemy'></div> {this.props.enemiesKilled}/{this.props.totalEnemies}
        </div>
          {boss}
      </div>
    )
  }
})

module.exports = GameDisplay;
