(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Board = exports.Board = function () {
  function Board() {
    _classCallCheck(this, Board);
  }

  _createClass(Board, [{
    key: 'checkIfBoardIsLegal',
    value: function checkIfBoardIsLegal() {
      var gridValues = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    }
  }, {
    key: 'createGrid',
    value: function createGrid(x) {
      for (var rows = 1; rows <= x; rows++) {
        for (var columns = 1; columns <= x; columns++) {
          if (rows % 3 === 0) {
            $("#container").append('<div class=\'grid botborder\' id="' + rows + columns + '"><p>&nbsp;</p></div>');
          } else {
            $("#container").append('<div class=\'grid\' id="' + rows + columns + '"><p>&nbsp;</p></div>');
          }
        }
      }
    }
  }, {
    key: 'createGridValues',
    value: function createGridValues() {
      var board = [];
      for (var row = 1; row <= 9; row++) {
        var rowNumbers = getRandomNumbers();
        board.push([]);
        for (var col = 1; col <= 9; col++) {
          var valueNotAdded = 0;
          board[row - 1].push(0);
          for (var index = 0; index < rowNumbers.length; index++) {
            if (isSafe(board, rowNumbers[index], row, col)) {
              $("#" + row + "" + col).html('<p>' + rowNumbers[index] + '</p>');
              board[row - 1][col - 1] = parseInt(rowNumbers.splice(index, 1));
              index += 9;
            }
          }
        }
      }

      for (var i = 0; i < board.length; i++) {
        console.log(board[i]);
      }
    }
  }, {
    key: 'clearGrid',
    value: function clearGrid() {
      $(".grid").remove();
    }
  }]);

  return Board;
}();

var isSafe = function isSafe(board, number, numberRow, numberCol) {
  var check = 0;
  check += checkColumn(board, number, numberCol);

  // debugger;
  // if(numberRow-1 < 3 && numberCol-1 < 3) {
  //   check += checkSection(board,number,0,3,0,3);
  // } else if(numberRow-1 < 3 && numberCol-1 < 6) {
  //   check += checkSection(board,number,0,3,3,6);
  // } else if(numberRow-1 < 3 && numberCol-1 < 9) {
  //   check += checkSection(board,number,0,3,6,9);
  // } else if(numberRow-1 < 6 && numberCol-1 < 3) {
  //   check += checkSection(board,number,3,6,0,3);
  // } else if(numberRow-1 < 6 && numberCol-1 < 6) {
  //   check += checkSection(board,number,3,6,3,6);
  // } else if(numberRow-1 < 6 && numberCol-1 < 9) {
  //   check += checkSection(board,number,3,6,6,9);
  // } else if(numberRow-1 < 9 && numberCol-1 < 3) {
  //   check += checkSection(board,number,6,9,0,3);
  // } else if(numberRow-1 < 9 && numberCol-1 < 6) {
  //   check += checkSection(board,number,6,9,3,6);
  // } else if(numberRow-1 < 9 && numberCol-1 < 9) {
  //   check += checkSection(board,number,6,9,6,9);
  // } else {
  //   console.log("ERROR: Reached Elsed in Section IsSafe")
  // }

  check += checkSection(board, number, numberRow, numberCol);

  // console.log("Row Number: " + numberRow + " Check Number: " + check + " Number RC:" +numberRow+ "" +numberCol);
  if (check > 0) {
    return false;
  } else {
    return true;
  }
};
var checkColumn = function checkColumn(board, number, numberCol) {
  var output = 0;
  for (var rows = 1; rows < board.length; rows++) {
    if (number == board[rows - 1][numberCol - 1]) {
      output += 1;
    } else {}
  }
  // console.log("Column: " +numberCol+ " Number: " + number + " Output: " + output);
  return output;
};
var checkSection = function checkSection(board, number, numberRow, numberCol) {
  var sRowMin = numberRow - 1 - (numberRow - 1) % 3;
  var sColMin = numberCol - 1 - (numberCol - 1) % 3;
  var sRowMax = sRowMin + 3;
  var sColMax = sColMin + 3;
  for (var rowI = sRowMin; rowI < board.length; rowI++) {
    for (var colI = sColMin; colI < board[rowI].length; colI++) {
      if (sRowMin <= rowI && rowI < sRowMax && sColMin <= colI && colI < sColMax) {
        if (number == board[rowI][colI]) {
          return 1;
        } else {}
      }
    }
  }
  return 0;
};

var getRandomNumbers = function getRandomNumbers() {
  var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var currentIndex = array.length,
      temporaryValue,
      randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

},{}],2:[function(require,module,exports){
"use strict";

var _board = require("./../js/board.js");

$(document).ready(function () {
  var board = new _board.Board();
  board.createGrid(9);
  board.createGridValues();
  $(".newGrid").click(function () {
    var board = new _board.Board();
    board.clearGrid();
    board.createGrid(9);
    board.createGridValues();
  });
  $(".clearGrid").click(function () {
    var board = new _board.Board();
    board.clearGrid();
  });
});

},{"./../js/board.js":1}]},{},[2]);
