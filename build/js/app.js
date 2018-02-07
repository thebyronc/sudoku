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
            $("#container").append('<div class=\'grid botborder\' id="' + rows + columns + '"></div>');
          } else {
            $("#container").append('<div class=\'grid\' id="' + rows + columns + '"></div>');
          }
        };
      };
    }
  }, {
    key: 'createGridValues',
    value: function createGridValues() {
      for (var row = 1; row <= 9; row++) {
        var rowNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
        for (var col = 1; col <= 9; col++) {
          var random = Math.floor(Math.random() * rowNumbers.length);
          $("#" + row + "" + col).html('<p>' + rowNumbers[random] + '</p>');
          rowNumbers.splice(random, 1);
        };
      };
    }
  }, {
    key: 'clearGrid',
    value: function clearGrid() {
      $(".grid").remove();
    }
  }]);

  return Board;
}();

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
