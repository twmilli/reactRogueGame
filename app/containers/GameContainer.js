var React = require('react');
import Player from './Player';
var Cell = require('../components/Cell');
var Inventory = require('../components/Inventory');
var Display = require('../components/Display');
import Enemy from './Enemy';
import Potion from './Potion';
import Key from './Key';

var GameContainer = React.createClass({

  componentWillMount: function(){
    this.createNewGame();
  },

  componentDidMount: function(){
    document.onkeydown = this.keyListener;
  },

  update: function(){
    this.player.update();
    var newPosition = this.player.getPosition();
    this.updateEnemies();
    this.checkCollisions();
    this.board[newPosition.y][newPosition.x] = this.player.draw();

    this.forceUpdate();
  },

  updateEnemies: function(){
    for (var i=0; i< this.objects.length; i++){
      if (this.objects[i].constructor.name == "Enemy"){
        var currEnemy = this.objects[i];
        var pos = currEnemy.getPosition();
        this.board[pos.y][pos.x] = <Cell type='empty' key={this.getKey(pos)} />
        currEnemy.update(this.board);
        var newPos = currEnemy.getPosition();
        this.board[newPos.y][newPos.x] = currEnemy.draw();
      }
    }
  },

  checkCollisions: function(){
    var toRemove=[];
    for (var i=0; i < this.objects.length; i++){
      var obj = this.objects[i];
      var pos = obj.getPosition();
      for (var j=0; j < this.objects.length; j++){
        var obj2 = this.objects[j];
        var pos2 = obj2.getPosition();
        if ((pos.x == pos2.x) && (pos.y == pos2.y) && (i != j)){
          obj.onCollision(obj2);
          if (obj.isItem()){
            toRemove.push(i);
          }
          if (obj.isDead()){
            toRemove.push(i);
            if (obj.constructor.name == 'player'){
              this.gameOver();
            }
            else{
              this.player.giveExperience(obj.getLevel());
            }
          }
        }
      }
    }
    for (var i=0; i<toRemove.length; i++){
      var index = toRemove[i];
      this.objects.splice(index,1);
    }
  },

  getKey: function(position){
    return(position.x+position.y*this.DIM);
  },

  keyListener: function(e){
    e.preventDefault();
    var currPosition = this.player.getPosition();
    this.board[currPosition.y][currPosition.x] = <Cell type='empty' key={this.getKey(currPosition)}/>
    var UP = 38;
    var LEFT = 37;
    var RIGHT = 39;
    var DOWN = 40;
    var keyCode = e.keyCode;
    if (keyCode == UP){
      var dir = {
        x: 0,
        y: -1
      }
      this.player.move(dir, this.board);
    }
    if (keyCode == RIGHT){
      var dir = {
        x: 1,
        y: 0
      }
      this.player.move(dir, this.board);
    }
    if (keyCode == LEFT){
      var dir = {
        x: -1,
        y: 0
      }
      this.player.move(dir, this.board);
    }
    if (keyCode == DOWN){
      var dir = {
        x: 0,
        y: 1
      }
      this.player.move(dir, this.board);
    }

  },

  createNewGame: function(){
    this.DIM = 80;
    this.board = this.createBoard(this.DIM,this.DIM);
    this.objects = [];
    this.createEnemies();
    this.createItems();
    this.player = new Player(this.DIM);
    this.objects.push(this.player);
    var playerPosition = this.player.getPosition();
    this.board[playerPosition.y][playerPosition.x] = this.player.draw();
    this.startGame();
  },

  createType(type, num){
    for (var i=0; i < num; i++){
      var placed = false;
      while(!placed){
        var x = Math.floor(Math.random() * this.DIM);
        var y = Math.floor(Math.random() * this.DIM);
        if (this.board[y][x].props.type == 'empty'){
          var newObj = new type(x,y, this.DIM);
          this.objects.push(newObj);
          this.board[y][x] = newObj.draw();
          placed = true;
        }
      }
    }
  },

  createItems: function(){
    var N_POTIONS = 5;
    var N_KEYS = 5;
    this.createType(Potion, N_POTIONS);
    this.createType(Key, N_KEYS);
  },

  createEnemies:function(){
    var N_ENEMIES = 5;
    this.createType(Enemy, N_ENEMIES);
  },

  startGame: function(){
    this.game = setInterval(this.update, 50);
  },

  getDrawBoard: function(board){
    var drawBoard=[];
    var bounds = this.getBounds();
    for (var i=bounds.minY; i < bounds.maxY; i++){
      drawBoard = drawBoard.concat(board[i].slice(bounds.minX, bounds.maxX));
    }
    return(drawBoard);
  },

  getBounds: function(){
    var WIDTH = 50;
    var HEIGHT = 50;
    var pos =  this.player.getPosition();
    var minX = pos.x - WIDTH/2;
    var maxX = pos.x + WIDTH/2;
    var minY = pos.y - HEIGHT/2;
    var maxY = pos.y + HEIGHT/2;
    if (minX < 0){
      maxX += Math.abs(minX);
      minX = 0;
    }
    else if (maxX > this.board.length){
      minX -= (maxX-this.board.length);
      maxX = this.board.length;
    }
    if (minY < 0){
      maxY += Math.abs(minY);
      minY = 0;
    }
    else if (maxY > this.board.length){
      minY -= (maxY-this.board.length);
      maxY = this.board.length;
    }

    return({
      maxX: maxX,
      minX: minX,
      maxY: maxY,
      minY: minY
    });
  },

  createBoard: function(rows, cols){
    var array = [], row=[];
    for (var i=0; i < rows; i++){
      array[i]=[];
      for (var j=0; j < cols; j++){
        var position = {x: j, y: i};
        if (i==0 || j==0 || i==this.DIM-1 || j==this.DIM-1){
          array[i][j] = <Cell type='obstacle' key={this.getKey(position)}/>
        }
        else {
          array[i][j] = <Cell type='empty' key={this.getKey(position)}/>
        }
      }
    }
    return array;
  },

  render: function(){
    var flash=null;
    if (this.player.getDamaged()){
      flash='flash';
    }
    return(
      <div className={flash}>
        <h1 className='title'>Realtime React</h1>
        <Display health={this.player.getHealth()}
          maxHealth={this.player.getMaxHealth()}
          weapon = {this.player.getWeapon()}
          level={this.player.getLevel()}
          exp={this.player.getExperience()}
          expNeeded = {this.player.getExperienceNeeded()}/>
        <div className='game'>
          {this.getDrawBoard(this.board)}
        </div>
        <Inventory items= {this.player.getItems()}/>
      </div>
    )
  }
});

module.exports = GameContainer;
