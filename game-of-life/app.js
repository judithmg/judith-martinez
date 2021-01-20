console.log("hello world");

let CHART = [];
let ROWS = "";
let COLUMNS = "";

/* SELECTORS */
let tableElement = document.querySelector(".drawn-chart");

function createChart(rows, columns) {
  let chart = [];
  for (let i = 0; i < rows; i++) {
    let current = [];
    for (let j = 0; j < columns; j++) {
      current.push(0);
    }
    chart.push(current);
  }
  return chart;
}

function drawChart(rows, columns) {
  for (let i = 0; i < rows; i++) {
    let newRow = document.createElement("div");
    newRow.classList.add(`row-${i}`);
    tableElement.appendChild(newRow);
    let tempRow = document.querySelector(`.row-${i}`);
    for (let j = 0; j < columns; j++) {
      let tempCell = document.createElement("div");
      tempCell.classList.add("cell");
      tempCell.classList.add(`'row-${j}-${i}`);

      let tempRow = document.querySelector(`.row-${i}`);

      tempRow.appendChild(tempCell);
    }
  }
}

ROWS = 10;
COLUMNS = ROWS;
CHART = createChart(ROWS, COLUMNS);
drawChart(ROWS, COLUMNS);
