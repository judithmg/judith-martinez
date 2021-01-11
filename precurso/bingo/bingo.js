const Rows = 3;
const Columns = 5;
const bolaMin = 1;
const bolaMax = 70;
/* const player1 = {
  user: "Josuke",
  score: 50,
};
const player2 = {
  user: "Jotaro",
  score: 60,
};
const player3 = {
  user: "Joseph",
  score: 66,
};
const player4 = {
  user: "Jonathan",
  score: 49,
}; */

const user1 = "Josuke";
const user2 = "Jotaro";
const user3 = "Joseph";
const user4 = "Jonathan";

//ONETURN

let bombo = generateBalls(bolaMin, bolaMax);
let drawnBalls = [];
let count = 0; //this stores number of MATCHING BALLS drawn
let turnCounter = 0; //this stores how many balls were drawn
let user;
let MYCARD;
let pulledNumber;
let arrMYCARD;
let linea = false;
let turnLinea;
let lineCounter = 0;
let player;
let ranking = [];

let player1 = new Player(user1, 37);
let player2 = new Player(user2, 55);
let player3 = new Player(user3, 82);
let player4 = new Player(user4, 40);

rankplayers(player1, ranking);
rankplayers(player2, ranking);
rankplayers(player3, ranking);
rankplayers(player4, ranking);

function username() {
  let user = null;

  do {
    user = prompt(
      "¡Bienvenido al SKYLAB BINGO! \nPor favor, introduce el nombre de usuario"
    );
    if (user === null) {
      alert("Vas a salir del juego. Gracias por intentarlo!");
    }
  } while (user === "" || !user.match(/^[A-Za-z]+$/));
  return user;
}

function showbingo(min, max, rows, columns, bingocard) {
  alert(
    `¡Hola, ${user}! A continuación se mostrará en consola tu cartón. En caso de que quieras que se muestre otro, pulsa cancelar.`
  );
  let confirmbingo;
  do {
    console.clear();
    bingocard = mybingocard(min, max, rows, columns);
    arrMYCARD = table(Rows, Columns, bingocard);
    colorLog("-----------------------", "error");
    colorLog("~   YOUR BINGO CARD   ~");
    colorLog("-----------------------", "error");
    colorLog(
      `| ${arrMYCARD[0][0]} | ${arrMYCARD[0][2]} | ${arrMYCARD[0][3]} | ${arrMYCARD[0][4]} | ${arrMYCARD[0][1]} |`,
      "warning"
    );
    colorLog(
      `| ${arrMYCARD[1][0]} | ${arrMYCARD[1][2]} | ${arrMYCARD[1][3]} | ${arrMYCARD[1][4]} | ${arrMYCARD[1][1]} |`,
      "info"
    );
    colorLog(
      `| ${arrMYCARD[2][0]} | ${arrMYCARD[2][2]} | ${arrMYCARD[2][3]} | ${arrMYCARD[2][4]} | ${arrMYCARD[2][1]} |`,
      "success"
    );
    confirmbingo = confirm(
      "¿Te quedas con este cartón?\n En caso contrario, pulsa cancelar."
    );
  } while (!confirmbingo);

  alert("El juego dará comienzo a continuación.");

  return bingocard;
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

function newBall(min, max) {
  return getRandomNumber(min, max);
}

function generateBalls(min, max) {
  allballs = [];
  let i = min;

  do {
    //generar una array con todos los números que puedo sacar
    allballs.push(i);
    i++;
  } while (i <= max);

  return allballs;
}

//SCORE system: the lesser turns it takes you to complete your card, the more points you get. line turn is taken into account
function puntuacion(max, count, rows, columns, linea) {
  let points = Math.round(
    ((max - count + (max - linea) * 0.7) / (max - rows * columns)) * 100
  );
  return points;
}

function rankplayers(player, ranking) {
  ranking.push(player);
  ranking.sort((a, b) => b.score - a.score);
}

function Player(user, score) {
  this.user = user;
  this.score = score;
}

//CARD GENERATOR
function mybingocard(min, max, rows, columns) {
  let card = [];
  let allNums = []; //here go all numbers
  do {
    allNums.push(min);
    min++;
  } while (min <= max);

  for (var i = 0; i < rows * columns; i++) {
    //insertar en mi cartón, en este caso, 15 números
    selectNum = getRandomNumber(0, allNums.length - 1); //Selecciono un número random de mi array que luego elimino con splice, para así no volver a escogerlo
    card.push({
      number: allNums[selectNum],
      matched: false,
    });
    allNums.splice(selectNum, 1);
  }
  return card;
}

function table(rows, columns, bingocard) {
  //aquí dibujo mi cartón a partir de la bingocard() generada
  let array = [];
  for (var i = 0; i < rows * columns; i++) {
    if (bingocard[i].matched === false) {
      array.push(bingocard[i].number);
    } else {
      array.push("X"); //si el número ya ha salido del bombo, marcarlo con una X
    }
  }
  let arrbingo = [];
  while (array.length > 0) {
    arrbingo.push(array.splice(0, columns));
  }
  return arrbingo;
}

function drawball(allballs, drawnballs) {
  //FUNCION QUE SACA UNA BOLA DEL BOMBO, Y BORRA ESA BOLA DEL ARRAY BOMBO
  turnCounter++;
  selectNum = getRandomNumber(0, allballs.length - 1);
  pulledNumber = allballs[selectNum];
  allballs.splice(selectNum, 1);
  drawnballs.push(pulledNumber);
  drawnballs.sort((a, b) => a - b);

  return pulledNumber;
}

function checknumber(pullednumber) {
  //FUNCION QUE CHEQUEA SI EL NÚMERO SACADO ESTÁ EN MI CARTÓN. También anuncia el número que ha salido
  let askExit;
  let confirmExit;
  let matchingBall = false;
  arrMYCARD.forEach((array) =>
    array.forEach((num) => {
      if (num === pullednumber) {
        matchingBall = true;
      }
    })
  );
  if (matchingBall === true) {
    askExit = confirm(
      `El siguiente número es ${pullednumber}.\n¡El número ${pullednumber} se encuentra en tu cartón!`
    );
    if (!askExit) {
      confirmExit = confirm("Seguro que quieres salir?");
      if (confirmExit) {
        throw new Error("El juego ha finalizado");
      }
    }
  } else {
    askExit = confirm(`El siguiente número es ${pullednumber}.`);
    if (!askExit) {
      confirmExit = confirm("Seguro que quieres salir?");
      if (confirmExit) {
        throw new Error("El juego ha finalizado");
      }
    }
    return;
  }
}

function updatebingo(bingocard, pullednumber) {
  //FUNCION QUE ME ACTUALIZA EL CARTÓN
  bingocard = bingocard.map((eachnumber) =>
    eachnumber.number === pullednumber
      ? {
          ...eachnumber,
          matched: true,
        }
      : eachnumber
  );
  return bingocard;
}

function turnlinea() {
  //determino en qué turno he obtenido la primera linea
  arrMYCARD.forEach((array) => {
    lineCounter = 0;
    array.forEach((num) => {
      if (isNaN(num)) {
        lineCounter++;
      }
      if (lineCounter === 5) {
        console.log("FELICIDADES, LINEA!");
        alert("HAS HECHO LINEA!");
        linea = true;
        turnLinea = turnCounter;
      }
    });
  });
}

function colorLog(message, color) {
  color = color || "black";

  switch (color) {
    case "success":
      color = "Green";
      break;
    case "info":
      color = "DodgerBlue";
      break;
    case "error":
      color = "Red";
      break;
    case "warning":
      color = "Orange";
      break;
    default:
      color = color;
  }

  console.log("%c" + message, "color:" + color);
}

function eachturn() {
  pulledNumber = drawball(bombo, drawnBalls);
  MYCARD = updatebingo(MYCARD, pulledNumber);
  checknumber(pulledNumber);
  arrMYCARD = table(Rows, Columns, MYCARD);
  count = countMatching(MYCARD);

  console.clear();
  colorLog("-----------------------", "error");
  colorLog("~   YOUR BINGO CARD   ~");
  colorLog("-----------------------", "error");
  colorLog(
    `| ${arrMYCARD[0][0]} | ${arrMYCARD[0][2]} | ${arrMYCARD[0][3]} | ${arrMYCARD[0][4]} | ${arrMYCARD[0][1]} |`,
    "warning"
  );
  colorLog(
    `| ${arrMYCARD[1][0]} | ${arrMYCARD[1][2]} | ${arrMYCARD[1][3]} | ${arrMYCARD[1][4]} | ${arrMYCARD[1][1]} |`,
    "info"
  );
  colorLog(
    `| ${arrMYCARD[2][0]} | ${arrMYCARD[2][2]} | ${arrMYCARD[2][3]} | ${arrMYCARD[2][4]} | ${arrMYCARD[2][1]} |`,
    "success"
  );
  if (!linea) {
    turnlinea();
  }

  console.log(`Turno: ${turnCounter}.\nBOLA NÚMERO ${pulledNumber}. `);

  if (count === 15) {
    alert("YOU WIN");
  }
}

function countMatching(MYCARD) {
  count = 0;
  MYCARD.forEach((num) => {
    if (num.matched === true) {
      count++;
    }
  });
  return count;
}

//ARRANCAR JUEGO:

function MAINGAME() {
  colorLog("-----------------------------", "error");

  colorLog("~SKYLAB'S BINGO HALL OF FAME~", "info");
  colorLog("-----------------------------", "error");
  ranking.forEach((ranked) =>
    colorLog(ranked.user + " SCORED *" + ranked.score + "* POINTS.", "warning")
  );
  user = username();
  MYCARD = showbingo(bolaMin, bolaMax, Rows, Columns, MYCARD);
  arrMYCARD = table(Rows, Columns, MYCARD);

  do {
    eachturn();
  } while (15 > count);
  player = new Player(
    user,
    puntuacion(bolaMax, turnCounter, Rows, Columns, turnLinea)
  );
  rankplayers(player, ranking);

  colorLog("-----------------------------", "error");
  colorLog("~SKYLAB'S BINGO HALL OF FAME~", "info");
  colorLog("-----------------------------", "error");
  ranking.forEach((ranked) =>
    colorLog(ranked.user + " SCORED *" + ranked.score + "* POINTS.", "warning")
  );
}

console.warn("ESCRIBE MAINGAME() PARA ARRANCAR EL JUEGO");
