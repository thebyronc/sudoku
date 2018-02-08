export class Board {
  constructor() {
  }

  checkIfBoardIsLegal() {
    const gridValues = ['1','2','3','4','5','6','7','8','9'];
  }
  createGrid(x) {
    for (let rows = 1; rows <= x; rows++) {
      for (let columns = 1; columns <= x; columns++) {
        if(rows % 3 === 0) {
          $("#container").append(`<div class='grid botborder' id="${rows}${columns}"><p>&nbsp;</p></div>`);
        } else {
          $("#container").append(`<div class='grid' id="${rows}${columns}"><p>&nbsp;</p></div>`);
        }
      }
    }
  }

  createGridValues() {
    let board = [];
    for(let row = 1; row <= 9; row++) {
      let rowNumbers = getRandomNumbers();
      board.push([]);

      for(let col = 1; col <= 9; col++) {
        let valueNotAdded = 0;
        for(let index = 0; index < rowNumbers.length; index++) {
          if(isSafe(board, rowNumbers[index], row, col)){
          $("#" + row + "" + col).html(`<p>${rowNumbers[index]}</p>`);
          board[row-1].push(rowNumbers.splice(index, 1));
          index += 9;
          }
        }
      }
    }
  }

  clearGrid(){
    $(".grid").remove();
  }
}

let isSafe = function(board, number, numberRow, numberCol){
  let check = true;
  for(let rows = 0; rows < board.length; rows++){
    if(number == board[rows][numberCol-1]) {
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
  if(numberRow-1 < 3 && numberCol-1 < 3) {
    check = checkSection(board,number,0,3,0,3);
  }
  return check;
};

let getRandomNumbers = function() {
  let array = [1,2,3,4,5,6,7,8,9];
  var currentIndex = array.length, temporaryValue, randomIndex;
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

let checkSection = function(board, number, sRowMin, sRowMax, sColMin, sColMax) {
  for(let rowI = 0; rowI < board.length; rowI++) {
    for(let colI = 0; colI < board[rowI].length; colI++) {
      if(sRowMin <= rowI && rowI < sRowMax && sColMin <= colI && colI < sColMax) {
        if(number == board[rowI][colI]) {
          return false;
        }
      }
    }
  }
}
