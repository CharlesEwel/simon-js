var Game = require('./../js/simon.js').gameModule;

function colorify(sequence) {
  var iterator = 0;
  setInterval(function(){

    $('div[id="'+sequence[iterator]+'"]').addClass("color"+sequence[iterator]);
    iterator++;
    $('div[id="'+sequence[iterator-1]+'"]').removeClass("color"+sequence[iterator-1]);
    if(iterator === sequence.length){
      clearInterval();
    }
  }, 3000);
}

$(function() {
  var newGame;

  $("#new-game").click(function(event){
    newGame = new Game();
    console.log(newGame);
    colorify(newGame.colorArray);
  });
  // $("div").click(function(event){
  //
  // });
});
