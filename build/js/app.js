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
          for (var index = 0; index < rowNumbers.length; index++) {
            if (isSafe(board, rowNumbers[index], row, col)) {
              $("#" + row + "" + col).html('<p>' + rowNumbers[index] + '</p>');
              board[row - 1].push(rowNumbers.splice(index, 1));
              index += 9;
            }
          }
        }
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
  var check = true;
  for (var rows = 0; rows < board.length; rows++) {
    if (number == board[rows][numberCol - 1]) {
      check = false;
    } else {}
  }
  // debugger;
  // if(numberRow-1 < 3 && numberCol-1 < 3) {
  //   for(let rowI = 0; rowI < board.length; rowI++) {
  //     for(let colI = 0; colI < board[rowI].length; colI++) {
  //       if(colI < 3 && rowI < 3) {
  //         if(number == board[rowI][colI]) {
  //           check = false;
  //         }
  //       }
  //     }
  //   }
  // } else if(numberRow-1 < 3 && numberCol-1 < 6) {
  //   for(let rowI = 0; rowI < board.length; rowI++) {
  //     for(let colI = 0; colI < board[rowI].length; colI++) {
  //       if(rowI < 3 && 3 <= colI && colI < 6) {
  //         if(number == board[rowI][colI]) {
  //           check = false;
  //         }
  //       }
  //     }
  //   }
  // } else if(numberRow-1 < 3 && numberCol-1 < 9) {
  //   for(let rowI = 0; rowI < board.length; rowI++) {
  //     for(let colI = 0; colI < board[rowI].length; colI++) {
  //       if(rowI < 3 && 6 <= colI && colI < 9) {
  //         if(number == board[rowI][colI]) {
  //           check = false;
  //         }
  //       }
  //     }
  //   }
  // } else if(numberRow-1 < 6 && numberCol-1 < 9) {
  //   for(let rowI = 0; rowI < board.length; rowI++) {
  //     for(let colI = 0; colI < board[rowI].length; colI++) {
  //       if(3 <= rowI && rowI < 6 && 0 <= colI && colI < 3) {
  //         if(number == board[rowI][colI]) {
  //           check = false;
  //         }
  //       }
  //     }
  //   }
  // }
  if (numberRow - 1 < 3 && numberCol - 1 < 3) {
    check = checkSection(board, number, 0, 3, 0, 3);
  }
  return check;
};

var getRandomNumbers = function getRandomNumbers() {
  var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var currentIndex = array.length,
      temporaryValue,
      randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

var checkSection = function checkSection(board, number, sRowMin, sRowMax, sColMin, sColMax) {
  for (var rowI = 0; rowI < board.length; rowI++) {
    for (var colI = 0; colI < board[rowI].length; colI++) {
      if (sRowMin <= rowI && rowI < sRowMax && sColMin <= colI && colI < sColMax) {
        if (number == board[rowI][colI]) {
          return false;
        }
      }
    }
  }
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
