var React = require('react');
var Cell = require('../components/Cell');
import Enemy from './Enemy';

export default class Boss extends Enemy{
  constructor(x,y,bounds, level){
    super(x,y,bounds, level);
    this.health = 100;
    this.attack = 20;
  }

  draw(){
    return(<Cell type='boss' key={this.position.x+this.position.y*this.bounds} />);
  }
}
