var React = require('react');
var Cell = require('../components/Cell');
var Enemy = require('./Enemy');

var Player = function(bounds){
  this.position={
    x: 0,
    y: 0};
  this.health = 100;
  this.maxHealth = 100;
  this.bounds = bounds;
  this.weapon = 'sword';
  this.attack = 10;
  this.items=[];
  this.experience = 5;
  this.level = 1;
}

Player.prototype.getPosition = function(){
  return({
    x: this.position.x,
    y: this.position.y
  });
}

Player.prototype.draw = function(){
  return(<Cell type='player' key={this.position.x+this.position.y*this.bounds} />)
}

Player.prototype.moveUp= function(keyCode){
  this.position.y -= 1;
  if (this.position.y < 0){
    this.position.y = 0;
  }
}
Player.prototype.moveDown= function(keyCode){
  this.position.y += 1;
  if (this.position.y >= this.bounds){
    this.position.y = this.bounds -1;
  }
}
Player.prototype.moveRight= function(keyCode){
  this.position.x += 1;
  if (this.position.x >= this.bounds){
    this.position.x = this.bounds-1;
  }
}
Player.prototype.moveLeft= function(keyCode){
  this.position.x -= 1;
  if (this.position.x < 0){
    this.position.x = 0;
  }
}

Player.prototype.getItems = function(){
  return (this.items);
}

Player.prototype.getHealth = function(){
  return (this.health);
}

Player.prototype.getWeapon = function(){
  return (this.weapon);
}

Player.prototype.getExperience = function(){
  return (this.experience);
}

Player.prototype.getExperienceNeeded = function(){
  const factor = 10;
  return (this.level * factor);
}

Player.prototype.getLevel = function(){
  return (this.level);
}

Player.prototype.getMaxHealth = function(){
  return (this.maxHealth);
}

Player.prototype.isItem = function(){
  return false;
}

Player.prototype.onCollision = function(obj){
    if(obj.constructor.name == "Enemy"){
      this.health -= obj.getAttack();
    }
    else if (obj.constructor.name == "Potion"){
      this.items.push(obj);
    }
}

Player.prototype.getAttack = function(){
  return (this.attack);
}

module.exports = Player;
