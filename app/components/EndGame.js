var React = require('react');

var EndGame = function(props){
  if (props.show){
    return(
      <div className="overlay">
        <div className='contents'>
          <div>You Died!</div>
          <button className='start' conClick={props.close}>Restart</button>
          <button className='quit' onClick={props.close}>Quit</button>
        </div>
      </div>

    )
  }
  return null;

}

module.exports = EndGame;
