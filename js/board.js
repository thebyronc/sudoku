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
        board[row-1].push(0);
        for(let index = 0; index < rowNumbers.length; index++) {
          if(isSafe(board, rowNumbers[index], row, col)){
            $("#" + row + "" + col).html(`<p>${rowNumbers[index]}</p>`);
            board[row-1][col-1] = parseInt(rowNumbers.splice(index, 1));
            index += 9;
          }
        }
        // console.log("row "+ row +": " + rowNumbers);
        // else if(index >= rowNumbers.length) {
        //   console.log("Number cannot be added: " + rowNumbers[index]);
        // }
        // if (board[row-1].length < (col)) {
        //   $("#" + row + "" + col-1).html(`<p class="error">${rowNumbers[0]}</p>`);
        //   board[row-1].push(rowNumbers.splice(0, 1));
        // }
      }
    }

    for(let i = 0; i < board.length; i++) {
        console.log(board[i]);
    }
  }

  clearGrid(){
    $(".grid").remove();
  }

}

let isSafe = function(board, number, numberRow, numberCol){
  let check = 0;
  // for(let rows = 1; rows < board.length; rows++){
  //   if(number == board[rows-1][numberCol-1]) {
  //     check += 1;
  //   } else {console.log("row check: "+ rows + "Row Number:");}
  // }

  check += checkColumn(board, number, numberCol);


  // debugger;
  if(numberRow-1 < 3 && numberCol-1 < 3) {
    check += checkSection(board,number,0,3,0,3);
  } else if(numberRow-1 < 3 && numberCol-1 < 6) {
    check += checkSection(board,number,0,3,3,6);
  } else if(numberRow-1 < 3 && numberCol-1 < 9) {
    check += checkSection(board,number,0,3,6,9);
  } else if(numberRow-1 < 6 && numberCol-1 < 3) {
    check += checkSection(board,number,3,6,0,3);
  } else if(numberRow-1 < 6 && numberCol-1 < 6) {
    check += checkSection(board,number,3,6,3,6);
  } else if(numberRow-1 < 6 && numberCol-1 < 9) {
    check += checkSection(board,number,3,6,6,9);
  } else if(numberRow-1 < 9 && numberCol-1 < 3) {
    check += checkSection(board,number,6,9,0,3);
  } else if(numberRow-1 < 9 && numberCol-1 < 6) {
    check += checkSection(board,number,6,9,3,6);
  } else if(numberRow-1 < 9 && numberCol-1 < 9) {
    check += checkSection(board,number,6,9,6,9);
  } else {
    console.log("ERROR: Reached Elsed in Section IsSafe")
  }
  console.log("Row Number: " + numberRow + " Check Number: " + check + " Number RC:" +numberRow+ "" +numberCol);
  if(check > 0){
    return false;
  } else {
    return true;
  }
};
let checkColumn = function(board, number, numberCol) {
  let output = 0;
  for(let rows = 1; rows < board.length; rows++){
    if(number == board[rows-1][numberCol-1]) {
      output += 1;
    } else {
    }
  }
  console.log("Column: " +numberCol+ " Number: " + number + " Output: " + output);
  return output;
}
let checkSection = function(board, number, sRowMin, sRowMax, sColMin, sColMax) {
  for(let rowI = 0; rowI < board.length; rowI++) {
    for(let colI = 0; colI < board[rowI].length; colI++) {
      if(sRowMin <= rowI && rowI < sRowMax && sColMin <= colI && colI < sColMax) {
        if(number == board[rowI][colI]) {
          return 1;
        } else {        }
      }
    }
  }
  return 0;
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
