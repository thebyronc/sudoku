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
          $("#container").append(`<div class='grid botborder' id="${rows}${columns}"></div>`);
        } else {
          $("#container").append(`<div class='grid' id="${rows}${columns}"></div>`);
        }
      };
    };
  };

  createGridValues() {
    for(let row = 1; row <= 9; row++) {
      let rowNumbers = ['1','2','3','4','5','6','7','8','9'];
      for(let col = 1; col <= 9; col++) {
        let random = Math.floor(Math.random() * rowNumbers.length);
        $("#" + row + "" + col).html(`<p>${rowNumbers[random]}</p>`);
        rowNumbers.splice(random, 1);

      };
    };
  };

  clearGrid(){
    $(".grid").remove();
  };

}
