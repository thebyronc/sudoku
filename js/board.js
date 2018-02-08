export class Board {
  constructor() {
  }

  checkIfboardValuesIsLegal() {
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
    let board = new Board();
    let boardValuesValues = [];
    for(let row = 1; row <= 9; row++) {
      let rowNumbers = board.getRandomNumbers();
      boardValues.push([]);
      for(let col = 1; col <= 9; col++) {
        let valueNotAdded = 0;
        boardValues[row-1].push(0);
        for(let index = 0; index < rowNumbers.length; index++) {
          if(isSafe(boardValues, rowNumbers[index], row, col)){
            $("#" + row + "" + col).html(`<p>${rowNumbers[index]}</p>`);
            boardValues[row-1][col-1] = parseInt(rowNumbers.splice(index, 1));
            index += 9;
          }
        }
      }
    }

    for(let i = 0; i < boardValues.length; i++) {
        console.log(boardValues[i]);
    }
  }
  isSafe(boardValues, number, numberRow, numberCol){
    let board = new Board();
    let check = 0;
    check += board.checkColumn(boardValues, number, numberCol);

    check += board.checkSection(boardValues,number,numberRow,numberCol);

    // console.log("Row Number: " + numberRow + " Check Number: " + check + " Number RC:" +numberRow+ "" +numberCol);
    if(check > 0){
      return false;
    } else {
      return true;
    }
  }

  checkColumn(boardValues, number, numberCol) {
    let output = 0;
    for(let rows = 1; rows < boardValues.length; rows++){
      if(number == boardValues[rows-1][numberCol-1]) {
        output += 1;
      } else {
      }
    }
    // console.log("Column: " +numberCol+ " Number: " + number + " Output: " + output);
    return output;
  }

  checkSection(boardValues, number, numberRow, numberCol) {
    let sRowMin = (numberRow-1)-((numberRow-1)%3);
    let sColMin = (numberCol-1)-((numberCol-1)%3);
    let sRowMax = sRowMin + 3;
    let sColMax = sColMin + 3;
    for(let rowI = sRowMin; rowI < boardValues.length; rowI++) {
      for(let colI = sColMin; colI < boardValues[rowI].length; colI++) {
        if(sRowMin <= rowI && rowI < sRowMax && sColMin <= colI && colI < sColMax) {
          if(number == boardValues[rowI][colI]) {
            return 1;
          } else {}
        }
      }
    }
    return 0;
  }

  getRandomNumbers() {
    let array = [1,2,3,4,5,6,7,8,9];
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  clearGrid(){
    $(".grid").remove();
  }

}
