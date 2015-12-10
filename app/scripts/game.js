var board = document.getElementsByClassName('board');
var tiles = [];

//Function to print the tile values
function updateValues() {
  var selected = [];
  tiles.forEach(function(tile, index) {
    if (tile.firstElementChild.active) {
      selected.push(index);
    }
  });
  console.log(selected);
}

//Function to initially create the tiles on the screen
function populateGameBoard() {
  for (var i = 0; i < 9; i++) {
    var tile = document.createElement('my-tile');
    tiles.push(tile);
    board[0].appendChild(tile);
    tile.addEventListener('click', updateValues);
  }
}



window.addEventListener('load', populateGameBoard);
