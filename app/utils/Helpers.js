var Helpers = {
  createBoard: function(rows, cols){
    var array = [], row=[];
    while (cols--) row.push(false);
    while (rows--) array.push(row.slice());
    return array;
  }
}
module.exports = Helpers
