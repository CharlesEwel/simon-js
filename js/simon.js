function Game(){
  this.colorArray = [randomInt(), 0];
}

function randomInt() {
  return Math.floor(Math.random() * 4) + 1;
}

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a === null || b === null) return false;
  if (a.length != b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

Game.prototype.processTurn = function(colorInputs) {
 if (arraysEqual(colorInputs, this.colorArray)) {
   this.colorArray.push(randomInt());
   this.colorArray.push(0);
   return true;
 } else {
   return false;
 }
};

exports.gameModule = Game;
