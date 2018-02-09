import { Board } from './../js/board.js';

$(document).ready(function() {
  let board = new Board();
  board.createGrid(9);
  board.createGridValues();
  //board.fillGrid();
  $(".newGrid").click(function() {
    let board = new Board();
    board.clearGrid();
    board.createGrid(9);

  });
  $(".newValues").click(function() {
    let board = new Board();
    board.clearGrid();
    board.createGrid(9);
    board.createGridValues();
  });

  $(".clearGrid").click(function() {
    let board = new Board();
    board.clearGrid();
  });

});
