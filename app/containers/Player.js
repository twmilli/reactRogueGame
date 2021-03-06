var React = require('react');
var Cell = require('../components/Cell');
import Enemy from './Enemy';
import WeaponFactory from './WeaponFactory';


export default class Player {
  constructor(bounds, character) {
    this.position={
      x: bounds/2,
      y: bounds/2};
    this.health = 50;
    this.maxHealth = 50;
    this.bounds = bounds;
    this.weapon = WeaponFactory.create('fist');
    this.attack = 5;
    this.items=[];
    this.experience = 0;
    this.level = 1;
    this.damaged = false;
    this.enemiesKilled = 0;
    this.keys=0;
    this.character = character || 'knight';
    this.bossKilled = 0;
  }

  getPosition(){
    return this.position;
  }

  draw(){
    return(<Cell type='player' character={this.character} key={this.position.x+this.position.y*this.bounds} />)
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
    if(obj.constructor.name == "Enemy" || obj.constructor.name == "Boss"){
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
    return (this.attack + this.weapon.getAttack());
  }

  isDead(){
    return (this.health <= 0);
  }
  giveExperience(obj){
    if (obj.constructor.name == 'Boss'){
      this.bossKilled += 1;
    }
    else if (obj.constructor.name == 'Enemy'){
      var level = obj.getLevel();
      this.enemiesKilled += 1;
      const FACTOR = 10;
      this.experience += level * FACTOR;
      if (this.experience > this.getExperienceNeeded()){
        this.experience -= this.getExperienceNeeded();
        this.levelUp();
      }
    }
  }

  reset(){
    this.keys = 0;
    this.enemiesKilled = 0;
    this.bossKilled =0;
  }

  levelUp(){
    const FACTOR = 10
    this.level += 1;
    this.attack *= FACTOR;
    this.health += FACTOR;
    this.maxHealth += FACTOR;
  }

  useItem(index){
    var item = this.items.splice(index, 1)[0];
    item.use(this);
  }

  getEnemiesKilled(){
    return (this.enemiesKilled);
  }

  getKeys(){
    return (this.keys);
  }

  addItem(item){
    this.items.push(item);
  }

  getWeapon(){
    return (this.weapon);
  }

  setPosition(x,y){
    this.position.x = x;
    this.position.y = y;
  }

  getBossKilled(){
    return this.bossKilled;
  }
}
