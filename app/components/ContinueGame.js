var React = require('react');

var ContinueGame = function(props){
  
  if (props.show){
    return(
      <div className="overlay">
        <div className='contents'>
          <div>Level {props.level} Completed</div>
          <button className='start' onClick={props.close}>Continue</button>
        </div>
      </div>
    )
  }
  return null;

}

module.exports = ContinueGame;
