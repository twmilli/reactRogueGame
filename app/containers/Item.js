var React = require('react');
var Cell = require('../components/Cell');

 export default class Item{
  constructor(x,y,bounds){
    this.position={
      x: x,
      y: y
    }
    this.bounds = bounds;
  }

  draw(){
    return(<Cell type={this.type} key={this.position.x+this.position.y*this.bounds} />);
  }

  getPosition(){
    return(this.position);
  }

  toString(){
    return(this.type);
  }

  isItem(){
    return true;
  }

  onCollision(){

  }

  display(num,onClick){
    return (<div className={this.toString() + '-display'}
    key={this.position.x+this.position.y*this.bounds}
    onClick={onClick}
    id={num}/>);
  }

  use(player){
    
  }

}
