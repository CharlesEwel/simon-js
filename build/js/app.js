(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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

},{"./../js/simon.js":1}]},{},[2]);
