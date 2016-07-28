var React = require('react');
import Knight from '../assets/knight.png';
import Wizard from '../assets/wizard.png';
import Background from '../assets/start_screen.png';
import Queen from '../assets/queen.png';
import Princess from '../assets/princess.png';
import King from '../assets/king.png';

var StartScreen = React.createClass({
  componentWillMount: function(){
    this.characters=[
      {name: 'knight',src: Knight},
      {name: 'wizard', src: Wizard},
      {name: 'queen', src: Queen},
      {name: 'princess', src: Princess},
      {name: 'king', src: King}];
  },
  contextTypes:{
    router: React.PropTypes.object.isRequired
  },
  start: function(e){
    var chars = document.getElementById('characters').elements['char'];
    var player;
    for (var i=0; i < chars.length; i++){
      var character = chars[i];
      if (character.checked){
        player = character.value;
      }
    }
    this.context.router.push({
      pathname: '/game',
      query:{
        player: player
      }
    });
  },
  render: function(){
    var Characters = this.characters.map(function(character, key){
      var checked = null;
      if (character.name == 'knight'){
        checked=true;
      }
      return(
      <div className="character" key={key}>
        <input type="radio" name='char' id={character.name} value={character.name}
          defaultChecked={checked}/>
        <label htmlFor={character.name}>
            <img src={character.src} alt=""/>
        </label>
      </div>);
    });
    return(
      <div className='start-screen'>
        <h1 className='title'>Castle Crushing</h1>
        <form className="characters" id='characters'>
          {Characters}
        </form>
        <button onClick={this.start}>Play</button>
        <img className='background' src={Background} alt=""/>
      </div>
    )
  }
});

module.exports = StartScreen;
