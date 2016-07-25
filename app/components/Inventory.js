var React = require('react');
var Cell = require('./Cell');

var Inventory = function(props){
  var items = props.items.map(function(item, key){
    return(item.display(key, props.onItemClick));
  });
  return(
    <div className='inventory'>
    <h2>Inventory</h2>

      <div>
        {items}
      </div>
    </div>
  )
}

module.exports = Inventory;
