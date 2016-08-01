(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Game(){
  this.colorArray = [randomInt()];
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
   return true;
 } else {
   console.log(colorInputs);
   console.log(this.colorArray);
   return false;
 }
};

exports.gameModule = Game;

},{}],2:[function(require,module,exports){
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

},{"./../js/simon.js":1}]},{},[2]);
