var React = require('react');
var Cell = require('../components/Cell');

export default class Enemy{
  constructor(x,y,bounds, level){
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
    this.attack = 8;
    this.health = 25;
    this.level = level || 1;
  }

  draw(){
    return(<Cell type='enemy' key={this.position.x+this.position.y*this.bounds} />);
  }

  getPosition(){
    return(this.position);
  }

  update(board){
    var interval = 100;
    var delta = Date.now() - this.time;
    if (delta < interval){
      return;
    }
    this.position.y += this.dir;
    var type = board[this.position.y][this.position.x].props.type;
    if (type !='empty' && type != 'player'){
      this.position.y -= this.dir;
    }
    this.accum++;
    if (this.accum == this.end){
      this.accum=0;
      this.dir = this.dir*-1;
    }

    this.time=Date.now();
  }

  onCollision(obj){
    if (obj.constructor.name == "Player"){
      this.health -= obj.getAttack();
    }
  }

  isItem(){
    return false;
  }

  getAttack(){
    return (this.attack*this.level);
  }

  getLevel(){
    return (this.level);
  }

  isDead(){
    return (this.health <= 0);
  }
}
