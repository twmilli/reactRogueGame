var React = require('react');

var EndGame = function(props){
  if (props.show){
    return(
      <div className="overlay">
        <div className='contents'>
          <div>{props.message}</div>
          <button className='start' onClick={props.close}>Restart</button>
          <button className='quit' onClick={props.close}>Quit</button>
        </div>
      </div>

    )
  }
  return null;

}

module.exports = EndGame;
