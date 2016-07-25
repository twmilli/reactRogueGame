var React = require('react');
var Cell = require('../components/Cell');
import Item from './Item';

export default class Potion extends Item{
  constructor(x,y,bounds){
    super(x,y,bounds);
    this.health=10;
    this.type='potion';
  }

  use(player){
    player.health += this.health;
    if (player.health > player.maxHealth){
      player.health = player.maxHealth;
    }
  }
}
