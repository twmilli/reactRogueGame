var React = require('react');
var Cell = require('../components/Cell');
import Enemy from './Enemy';


export default class Player {
  constructor(bounds) {
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

  getPosition(){
    return this.position;
  }

  draw(){
    return(<Cell type='player' key={this.position.x+this.position.y*this.bounds} />)
  }

  moveUp(){
    this.position.y -= 1;
    if (this.position.y < 0){
      this.position.y = 0;
    }
  }

  moveDown(){
    this.position.y += 1;
    if (this.position.y >= this.bounds){
      this.position.y = this.bounds -1;
    }
  }
  moveRight(){
    this.position.x += 1;
    if (this.position.x >= this.bounds){
      this.position.x = this.bounds-1;
    }
  }

  moveLeft(){
    this.position.x -= 1;
    if (this.position.x < 0){
      this.position.x = 0;
    }
  }

  getItems(){
    return (this.items);
  }

  getHealth(){
    return (this.health);
  }

  getWeapon(){
    return (this.weapon);
  }

  getExperience(){
    return (this.experience);
  }

  getExperienceNeeded(){
    const factor = 10;
    return (this.level * factor);
  }

  getLevel(){
    return (this.level);
  }

  getMaxHealth(){
    return (this.maxHealth);
  }

  isItem(){
    return false;
  }

  onCollision(obj){
    if(obj.constructor.name == "Enemy"){
      this.health -= obj.getAttack();
    }
    else if (obj.constructor.name == "Potion"){
      this.items.push(obj);
    }
  }

  getAttack(){
    return (this.attack);
  }
}
