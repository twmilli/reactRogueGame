import Weapon from './Weapon';


var WeaponEnum = {
  'fist':
  {name: 'fist',
  attack: 5},
  'sword':{
    name: 'sword',
    attack: 10}
  }
export default class WeaponFactory{
  static create(weaponType){
    return (new Weapon(null,null,null,WeaponEnum[weaponType]));
  }

  static getTypeObject(weaponType){
    return (WeaponEnum[weaponType]);
  }
}
