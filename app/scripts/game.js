
function populateGameBoard(){
  var board=  document.getElementsByClassName('board');
  var tiles = [];
  for(var i = 0; i < 9; i++){
    var tile = document.createElement('my-tile');
    tiles.push(tile);
    board[0].appendChild(tile);
  }
}
