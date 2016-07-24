var React = require('react');
var Cell = require('../components/Cell');
import Enemy from './Enemy';


export default class Player {
  constructor(bounds) {
    this.position={
      x: bounds/2,
      y: bounds/2};
    this.health = 100;
    this.maxHealth = 100;
    this.bounds = bounds;
    this.weapon = 'sword';
    this.attack = 10;
    this.items=[];
    this.experience = 0;
    this.level = 1;
    this.damaged = false;
  }

  getPosition(){
    return this.position;
  }

  draw(){
    return(<Cell type='player' key={this.position.x+this.position.y*this.bounds} />)
  }

  move(dir, board){
    this.position.y += dir.y;
    this.position.x += dir.x;
    if (board[this.position.y][this.position.x].props.type == 'obstacle'){
      this.position.y-=dir.y;
      this.position.x-=dir.x;
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
    const factor = 20;
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
      this.damaged = true;
    }
    else if (obj.isItem()){
      this.items.push(obj);
    }
  }

  update(){
    this.damaged = false
  }

  getDamaged(){
    return this.damaged;
  }

  getAttack(){
    return (this.attack);
  }

  isDead(){
    return (this.health <= 0);
  }
  giveExperience(level){
    const FACTOR = 10;
    this.experience += level * FACTOR;
    if (this.experience > this.getExperienceNeeded()){
      this.experience -= this.getExperienceNeeded();
      this.levelUp();
    }
  }

  levelUp(){
    const FACTOR = 10
    this.level += 1;
    this.attack *= FACTOR;
    this.health += FACTOR;
    this.maxHealth += FACTOR;
  }
}
