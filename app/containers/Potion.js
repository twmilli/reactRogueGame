var React = require('react');
var Cell = require('../components/Cell');

var Potion = function(x,y, bounds){
  this.position={
    x: x,
    y: y
  }
  this.bounds = bounds;
  this.health = 10;
}

Potion.prototype.draw = function(){
  return(<Cell type='potion' key={this.position.x+this.position.y*this.bounds} />);
}

Potion.prototype.getPosition = function(){
  return(this.position);
}

Potion.prototype.toString = function(){
  return('Potion');
}

Potion.prototype.isItem = function(){
  return true;
}

Potion.prototype.onCollision = function(){

}



module.exports = Potion;
