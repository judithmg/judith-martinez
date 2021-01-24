let tableElement = document.querySelector(".table-container");

const GameOfLife = function () {
  this.previousUpdatedGen = [];
  this.currentUpdatedGen = [];
  /*   this.previousUpdatedGen = this.createNextGen(sizeSelector, this.initialGen);
  this.currentUpdatedGen = this.createNextGen(size, this.previousUpdatedGen); */

  //This function creates the first gen, with all DEAD CELLS (0)
  this.createChart = function (size) {
    for (let i = 0; i < size; i++) {
      let currentRow = [];
      for (let j = 0; j < size; j++) {
        currentRow.push(0);
      }
      this.previousUpdatedGen.push(currentRow);
    }
    this.createNextGen(size, this.previousUpdatedGen);
  };

  //For a given cell, it checks its surrounding neighbours
  this.checkNeighbours = function (i, j, chart) {
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
  };

  //This function creates the next generation. For each cell, using the parameters obtained after counting the surrounding neighbours, it updates its state
  //CHART INPUT MUST BE THE GEN THAT IS ABOUT TO BE UPDATED
  this.createNextGen = function (size, chart) {
    this.currentUpdatedGen = [...chart];
    for (let i = 0; i < size; i++) {
      let thisRow = [...this.currentUpdatedGen[i]];
      for (let j = 0; j < size; j++) {
        let nextGenCell = this.updateCurrentCell(i, j, chart);

        thisRow[j] = nextGenCell;
      }
      this.currentUpdatedGen[i] = [...thisRow];
    }
    this.interactiveChart(size, this.currentUpdatedGen);
  };

  // Any live cell with two or three live neighbours survives.
  // Any dead cell with three live neighbours becomes a live cell.
  // All other live cells die in the next generation. Similarly, all other dead cells stay dead.
  this.updateCurrentCell = function (i, j, chart) {
    let currentCell = chart[i][j];
    let nextGenCell;
    //This variable stores the state of the cell i'm checking but for ITS NEXT GEN because the current gen must stay the same state!!
    let surroundingCellsAlive = this.checkNeighbours(i, j, chart);

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
  };

  //This function will create the chart shown on the website
  this.interactiveChart = function (size, chart) {
    tableElement.innerHTML = "";
    for (let i = 0; i < size; i++) {
      let newRow = document.createElement("div");
      newRow.classList.add(`row-${i}`);
      newRow.classList.add(`row`);
      tableElement.appendChild(newRow);

      for (let j = 0; j < size; j++) {
        let cellDiv = document.createElement("div");
        cellDiv.classList.add("cell");
        cellDiv.classList.add(`'cell-${j}-${i}`);
        if (chart[i][j] === 0) {
          cellDiv.classList.add("is-dead");
        } else {
          cellDiv.classList.add("is-alive");
        }
        cellDiv.addEventListener("click", () => {
          this.addStateClass(chart, cellDiv, i, j);
        });
        newRow.appendChild(cellDiv);
      }
    }
  };

  //This function adds the class-name to each cell that will give it its corresponding color
  this.addStateClass = function (chart, cell, i, j) {
    if (cell.classList.contains("is-alive")) {
      cell.classList.add("is-dead");
      cell.classList.remove("is-alive");
      chart[i][j] = 0;
    } else {
      cell.classList.remove("is-dead");
      cell.classList.add("is-alive");
      chart[i][j] = 1;
    }
  };
};

/* function createChart(size) {
  let chart = [];
  for (let i = 0; i < size; i++) {
    let currentRow = [];
    for (let j = 0; j < size; j++) {
      currentRow.push(0);
    }
    chart.push(currentRow);
  }
  return chart;
} */

/* function createNextGen(size, chart) {
  let fullGen = [...chart];
  for (let i = 0; i < size; i++) {
    let thisRow = [...fullGen[i]];
    for (let j = 0; j < size; j++) {
      //checkNeighbours(i, j, chart);
      let nextGenCell = updateCurrentCell(i, j, chart);

      thisRow[j] = nextGenCell;
    }
    fullGen[i] = [...thisRow];
  }
  return fullGen;
} */

//WITH THIS FUNCTION, FOR A GIVEN CELL, I WILL CHECK ITS SURROUNDING NEIGHBOURS
/* function checkNeighbours(i, j, chart) {
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
} */

// Any live cell with two or three live neighbours survives.
// Any dead cell with three live neighbours becomes a live cell.
// All other live cells die in the next generation. Similarly, all other dead cells stay dead.
/* function updateCurrentCell(i, j, chart) {
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
} */

/* function interactiveChart(size, chart) {
  tableElement.innerHTML = "";
  for (let i = 0; i < size; i++) {
    let newRow = document.createElement("div");
    newRow.classList.add(`row-${i}`);
    newRow.classList.add(`row`);
    tableElement.appendChild(newRow);

    for (let j = 0; j < size; j++) {
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
} */

/* const ROWS = 20;
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
} */

/* EVENT LISTENERS */

let setTimer = false;

function startGame() {
  if (setTimer) return;

  setTimer = setInterval(() => {
    game.createNextGen(sizeSelector, game.previousUpdatedGen);
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
  .querySelector("#size-cols")
  .addEventListener("change", () => setSize());

function setSize() {
  return parseInt(document.querySelector("#size-cols").value);
}

let sizeSelector = setSize();

const game = new GameOfLife();
game.createChart(sizeSelector);
