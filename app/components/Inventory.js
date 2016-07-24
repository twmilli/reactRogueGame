var React = require('react');

var Inventory = function(props){
  var items = props.items.map(function(item, key){
    return(<li key={key}>{item.toString()}</li>)
  });
  return(
    <div className='inventory'>
    <h2>Inventory</h2>

    <ul>
      {items}
    </ul>
    </div>
  )
}

module.exports = Inventory;
