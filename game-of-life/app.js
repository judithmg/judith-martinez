console.log("hello world");

/* SELECTORS */
let tableElement = document.querySelector(".drawn-chart");

function createChart(rows, columns) {
  let chart = [];
  for (let i = 0; i < rows; i++) {
    let currentRow = [];
    for (let j = 0; j < columns; j++) {
      currentRow.push(0);
    }
    chart.push(currentRow);
  }
  return chart;
}

/* function checkNeighbours(rows, columns, chart) {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      let previousRow = chart[i - 1] || false;
      let currentRow = chart[i];
      let nextRow = chart[i + 1] || false;

      let aliveAroundCurrent =
        +!!previousRow[j - 1] +
        +!!previousRow[j] +
        +!!previousRow[j + 1] +
        +!!currentRow[j + 1] +
        +!!currentRow[j - 1] +
        +!!nextRow[j - 1] +
        +!!nextRow[j] +
        +!!nextRow[j + 1];

      console.log(aliveAroundCurrent);
      if (aliveAroundCurrent > 1) {
        console.log("this is i " + i + "and j is " + j);
      }
    }
  }
} */

//WITH THIS FUNCTION, FOR A GIVEN CELL, I WILL CHECK ITS SURROUNDING NEIGHBOURS

function createNextGen(rows, columns, chart) {
  let fullGen = [...chart];
  for (let i = 0; i < rows; i++) {
    let thisRow = [...fullGen[i]];
    for (let j = 0; j < columns; j++) {
      //checkNeighbours(i, j, chart);
      let nextGenCell = updateCurrentCell(i, j, chart);

      thisRow[j] = nextGenCell;
    }
    fullGen[i] = [...thisRow];
  }
  return fullGen;
}

function checkNeighbours(i, j, chart) {
  let previousRow = chart[i - 1] || false;
  let currentRow = chart[i];
  let nextRow = chart[i + 1] || false;

  let aliveAroundCurrent =
    +!!previousRow[j - 1] +
    +!!previousRow[j] +
    +!!previousRow[j + 1] +
    +!!currentRow[j + 1] +
    +!!currentRow[j - 1] +
    +!!nextRow[j - 1] +
    +!!nextRow[j] +
    +!!nextRow[j + 1];

  return aliveAroundCurrent;
}

// Any live cell with two or three live neighbours survives.
// Any dead cell with three live neighbours becomes a live cell.
// All other live cells die in the next generation. Similarly, all other dead cells stay dead.

/* function updateThisGen(i, j, chart) {
  let currentCell = chart[i][j];
  let nextGenCell;
  let currentRow = [...chart[i]];
  //This variable stores the state of the cell i'm checking but for ITS NEXT GEN because the current gen must stay the same state!!
  let surroundingCellsAlive = checkNeighbours(i, j, chart);
  if (surroundingCellsAlive > 1 && currentCell > 1) {
    nextGenCell = 1;
  } else if (surroundingCellsAlive > 2 && currentCell === 0) {
    nextGenCell = 1;
  } else {
    nextGenCell = 0;
  }

  updatedGen = [...chart];
  currentRow[i] = nextGenCell;
  updatedGen[i] = [...currentRow];

  return updatedGen;
} */

function updateCurrentCell(i, j, chart) {
  let currentCell = chart[i][j];
  let nextGenCell;
  //This variable stores the state of the cell i'm checking but for ITS NEXT GEN because the current gen must stay the same state!!
  let surroundingCellsAlive = checkNeighbours(i, j, chart);

  if (currentCell === 1 && surroundingCellsAlive < 2) {
    nextGenCell = 0;
  } else if (
    currentCell === 1 &&
    (surroundingCellsAlive === 2 || surroundingCellsAlive === 3)
  ) {
    nextGenCell = 1;
  } else if (currentCell === 1 && surroundingCellsAlive > 3) {
    nextGenCell = 0;
  } else if (currentCell === 0 && surroundingCellsAlive === 3) {
    nextGenCell = 1;
  } else {
    nextGenCell = currentCell;
  }

  return nextGenCell;
}

function drawChart(rows, columns) {
  for (let i = 0; i < rows; i++) {
    let newRow = document.createElement("div");
    newRow.classList.add(`row-${i}`);
    newRow.classList.add(`row`);
    tableElement.appendChild(newRow);
    let tempRow = document.querySelector(`.row-${i}`);
    for (let j = 0; j < columns; j++) {
      let tempCell = document.createElement("div");
      tempCell.classList.add("cell");
      tempCell.classList.add(`'cell-${j}-${i}`);

      let tempRow = document.querySelector(`.row-${i}`);

      tempRow.appendChild(tempCell);
    }
  }
}

const ROWS = 5;
const COLUMNS = ROWS;
const CHART = createChart(ROWS, COLUMNS);
CHART[2] = [0, 1, 1, 1, 0];
CHART[3][1] = 1;

drawChart(ROWS, COLUMNS);
