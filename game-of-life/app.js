let tableElement = document.querySelector(".table-container");

const GameOfLife = function () {
  this.currentGen = [];
  this.updatedGen = [];
};

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
//WITH THIS FUNCTION, FOR A GIVEN CELL, I WILL CHECK ITS SURROUNDING NEIGHBOURS
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

function interactiveChart(rows, columns, chart) {
  tableElement.innerHTML = "";
  for (let i = 0; i < rows; i++) {
    let newRow = document.createElement("div");
    newRow.classList.add(`row-${i}`);
    newRow.classList.add(`row`);
    tableElement.appendChild(newRow);

    for (let j = 0; j < columns; j++) {
      let cellDiv = document.createElement("div");
      cellDiv.classList.add("cell");
      cellDiv.classList.add(`'cell-${j}-${i}`);
      if (chart[i][j] === 0) {
        cellDiv.classList.add("is-dead");
      } else {
        cellDiv.classList.add("is-alive");
      }
      cellDiv.addEventListener("click", () => {
        if (cellDiv.classList.contains("is-alive")) {
          cellDiv.classList.add("is-dead");
          cellDiv.classList.remove("is-alive");
          chart[i][j] = 0;
        } else {
          cellDiv.classList.remove("is-dead");
          cellDiv.classList.add("is-alive");
          chart[i][j] = 1;
        }
      });
      newRow.appendChild(cellDiv);
    }
  }
}

const ROWS = 20;
const COLUMNS = ROWS;
const CHART = createChart(ROWS, COLUMNS);

CHART[2] = [0, 1, 1, 1, 0];
CHART[3][1] = 1;

interactiveChart(ROWS, COLUMNS, CHART);
let updatedChart = createNextGen(ROWS, COLUMNS, CHART);
interactiveChart(ROWS, COLUMNS, updatedChart);

function doBoth() {
  updatedChart = createNextGen(ROWS, COLUMNS, updatedChart);
  createNextGen(ROWS, COLUMNS, updatedChart);
  interactiveChart(ROWS, COLUMNS, updatedChart);
  console.log("HELLO");
}

//setInterval(doBoth, 500);

/* EVENT LISTENERS */

let setTimer = false;

function startGame() {
  if (setTimer) return;

  setTimer = setInterval(() => {
    doBoth();
  }, 500);
}

function stopGame() {
  clearInterval(setTimer);
  setTimer = false;
}

document
  .querySelector("#start-game")
  .addEventListener("click", () => startGame());
document
  .querySelector("#stop-game")
  .addEventListener("click", () => stopGame());

document
  .querySelector("#rows-cols")
  .addEventListener("change", () => console.log("YES"));
