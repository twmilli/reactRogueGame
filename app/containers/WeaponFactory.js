import Weapon from './Weapon';


var WeaponEnum = {
  'fist':
  {name: 'fist',
  attack: 5},

  'sword':{
    name: 'sword',
    attack: 10},

  'mace':
    {name: 'mace',
    attack: 15},

  'axe':
  {name: 'axe',
  attack: 20},

  'longsword':
  {name: 'long sword',
  attack: 25}

  }
export default class WeaponFactory{
  static create(weaponType){
    return (new Weapon(null,null,null,WeaponEnum[weaponType]));
  }

  static getTypeObject(weaponType){
    return (WeaponEnum[weaponType]);
  }

  static getRandomWeapon(){
    var keys = Object.keys(WeaponEnum)
    return WeaponEnum[keys[ keys.length * Math.random() << 0]];
  }
}
