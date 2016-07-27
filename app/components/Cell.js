var React = require('react');

var Cell = React.createClass({
  shouldComponentUpdate: function(nextProps){
    return (this.props.type !== nextProps.type);
  },

  render: function(){
    return(
      <div className = {this.props.type + ' ' + this.props.character} onClick={this.props.onClick}></div>
    )
  }


});

module.exports = Cell;
