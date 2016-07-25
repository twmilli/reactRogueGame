var React = require('react');
import Item from './Item';

export default class Weapon extends Item {
  constructor(x,y,bounds, weaponObject) {
    super(x,y,bounds);
    this.type = weaponObject.name;
    this.attack = weaponObject.attack;
  }

  use(player){
    var oldWeapon = player.getWeapon();
    player.weapon = this;
    player.addItem(oldWeapon);
  }

  getAttack(){
    return (this.attack);
  }
}
