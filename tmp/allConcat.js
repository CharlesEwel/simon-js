var Game = require('./../js/simon.js').gameModule;

function colorify(sequence) {
  var iterator = 1;
  $('div[id="'+sequence[0]+'"]').addClass("color"+sequence[0]);
  setInterval(function(){
    $('div[id="'+sequence[iterator-1]+'"]').removeClass("color"+sequence[iterator-1]);
    $('div[id="'+sequence[iterator]+'"]').addClass("color"+sequence[iterator]);
    iterator++;
    if(iterator === sequence.length){
      clearInterval();
    }
  }, 1000);
}

$(function() {
  var newGame;
  var guessSequence=[];

  $("#new-game").click(function(event){
    newGame = new Game();
    colorify(newGame.colorArray);
  });

  $(".color").click(function(event){
    console.log("divclicked")
    var guess = parseInt($(this).attr('id'));
    console.log(guess)
    guessSequence.push(guess);
    guessSequence.push(0);
  });

  $("#submit-guess").click(function(event){
    event.preventDefault();
    var guessCorrect = newGame.processTurn(guessSequence);
    console.log(guessSequence)
    guessSequence=[];
    if(guessCorrect)
    {
      colorify(newGame.colorArray);
    } else {
      newGame = new Game();
      colorify(newGame.colorArray);
    }
  });
});
