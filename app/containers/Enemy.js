var React = require('react');
var Cell = require('../components/Cell');

var Enemy = function(x,y, bounds){
  this.position={
    x: x,
    y: y
  }
  this.bounds = bounds;
  this.accum = 0;
  this.end = 5;
  this.dir = 1;
  this.speed = 1;
  this.time = Date.now();
  this.attack = 1;
}

Enemy.prototype.draw = function(){
  return(<Cell type='enemy' key={this.position.x+this.position.y*this.bounds} />);
}

Enemy.prototype.getPosition = function(){
  return(this.position);
}

Enemy.prototype.update = function(){
  var interval = 100;
  var delta = Date.now() - this.time;
  if (delta < interval){
    return;
  }
  this.position.y += this.dir;
  this.accum++;
  if (this.accum == this.end){
    this.accum=0;
    this.dir = this.dir*-1;
  }
  if (this.y > this.bounds){
    this.y = this.bounds - 1;
  }
  if (this.position.y < 0){
    this.y=0;
  }
  this.time=Date.now();
}

Enemy.prototype.onCollision = function(obj){
  if (obj.constructor.name == "Player"){
    this.health -= obj.getAttack();
  }
}

Enemy.prototype.isItem = function(){
  return false;
}

Enemy.prototype.getAttack = function(){
  return (this.attack);
}

module.exports = Enemy;
