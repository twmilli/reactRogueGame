var React = require('react');
var Progress = require('react-progressbar');

var PlayerDisplay = React.createClass({
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
      <div className='player-display'>
        <div className='name'>
          <div className="player">
          </div>
          {this.props.name}</div>
        <div className='label'>Weapon: {this.props.weapon}</div>
        <div className='label'>Level: {this.props.level}</div>
        <div className='bar'>Health: <Progress completed={(this.props.health/this.props.maxHealth)*100} /></div>
        <div className='bar'>
          XP:<Progress completed={(this.props.exp/this.props.expNeeded)*100} />
        </div>
      </div>
    )
  }
});

module.exports = PlayerDisplay;
