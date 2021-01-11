/* */ /* */ /* */ /* */ /* */
//STAR WARS-LIKE ANIMATION//
/* */ /* */ /* */ /* */ /* */

const fadeCurtain = document.querySelector(".fade");
const fakeText = document.querySelector(".fake-star-wars");
const startButton = document.querySelector(".btn-start");
const getUsernameBox = document.querySelector(".insert-username");
const r2d2 = document.querySelector(".img-r2d2");
const timerDisplay = document.querySelector(".countdown");
let defaultPrevented;
let setGameUp = true;

//Hide the intro, show the next box at button click
startButton.addEventListener("click", () => {
  fadeCurtain.classList.add("intro-active");
  fakeText.classList.add("intro-active");
  getUsernameBox.classList.remove("intro-active");
  setGameUp = false;
});

//If user can't/doesn't click the button, hide the animation anyway and show the next box
window.setTimeout(() => {
  if (setGameUp) {
    fadeCurtain.classList.add("intro-active");
    fakeText.classList.add("intro-active");
    getUsernameBox.classList.remove("intro-active");
  }
}, 60000);

const getUsernameButton = document.querySelector(".submit-username");
const rosco = document.querySelector(".maingame-grid");
const contestConent = document.querySelector(".contest-content");
const rankingContent = document.querySelector(".ranking-content");

let username;

getUsernameButton.addEventListener("click", () => {
  username = document.querySelector(".get-username").value;
  if (username === "" || username === null || !username.match(/^[A-Za-z]+$/)) {
    alert("Por favor, introduce un usuario válido");
  } else {
    getUsernameBox.classList.add("intro-active");
    rosco.classList.remove("intro-active");
    contestConent.classList.remove("intro-active");
    defaultPrevented = false;
    r2d2.classList.add("r2d2-animation");
    timerDisplay.classList.add("r2d2-animation");
    gameTimer();
  }
  document.querySelector(
    ".padawan-username"
  ).innerHTML = username.toUpperCase();
  generateQuestion();
});
//
/*  PASAPALABRA APP*/

let questions = [
  {
    letter: "a",
    answer: "abducir",
    status: 0,
    question:
      "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
  },
  {
    letter: "a",
    answer: "acepcion",
    status: 0,
    question: "CON LA A. Cada uno de los significados que tiene una palabra",
  },

  {
    letter: "b",
    answer: "bingo",
    status: 0,
    question:
      "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
  },
  {
    letter: "b",
    answer: "biografia",
    status: 0,
    question: "CON LA B. Contar la vida de una persona por escrito.",
  },
  {
    letter: "c",
    answer: "churumbel",
    status: 0,
    question: "CON LA C. Niño, crío, bebé",
  },

  {
    letter: "c",
    answer: "comic",
    status: 0,
    question: "CON LA C. Historia contada en viñetas con dibujos y palabras",
  },

  {
    letter: "d",
    answer: "diarrea",
    status: 0,
    question:
      "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
  },

  {
    letter: "e",
    answer: "ectoplasma",
    status: 0,
    question:
      "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",
  },

  {
    letter: "f",
    answer: "facil",
    status: 0,
    question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad",
  },

  {
    letter: "g",
    answer: "galaxia",
    status: 0,
    question:
      "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
  },

  {
    letter: "h",
    answer: "harakiri",
    status: 0,
    question: "CON LA H. Suicidio ritual japonés por desentrañamiento",
  },

  {
    letter: "i",
    answer: "iglesia",
    status: 0,
    question: "CON LA I. Templo cristiano",
  },

  {
    letter: "j",
    answer: "jabali",
    status: 0,
    question:
      "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
  },

  {
    letter: "k",
    answer: "kamikaze",
    status: 0,
    question:
      "CON LA K. Persona que se juega la vida realizando una acción temeraria",
  },

  {
    letter: "l",
    answer: "licantropo",
    status: 0,
    question: "CON LA L. Hombre lobo",
  },

  {
    letter: "m",
    answer: "misantropo",
    status: 0,
    question:
      "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
  },

  {
    letter: "n",
    answer: "necedad",
    status: 0,
    question: "CON LA N. Demostración de poca inteligencia",
  },

  {
    letter: "ñ",
    answer: "señal",
    status: 0,
    question:
      "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
  },

  {
    letter: "o",
    answer: "orco",
    status: 0,
    question:
      "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
  },

  {
    letter: "p",
    answer: "protoss",
    status: 0,
    question:
      "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",
  },

  {
    letter: "q",
    answer: "queso",
    status: 0,
    question:
      "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche",
  },

  {
    letter: "r",
    answer: "raton",
    status: 0,
    question: "CON LA R. Roedor",
  },

  {
    letter: "s",
    answer: "stackoverflow",
    status: 0,
    question: "CON LA S. Comunidad salvadora de todo desarrollador informático",
  },

  {
    letter: "t",
    answer: "terminator",
    status: 0,
    question:
      "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
  },

  {
    letter: "u",
    answer: "unamuno",
    status: 0,
    question:
      "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
  },

  {
    letter: "v",
    answer: "vikingos",
    status: 0,
    question:
      "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
  },

  {
    letter: "w",
    answer: "sandwich",
    status: 0,
    question:
      "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",
  },

  {
    letter: "x",
    answer: "botox",
    status: 0,
    question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",
  },

  {
    letter: "y",
    answer: "peyote",
    status: 0,
    question:
      "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal  por indígenas americanos",
  },

  {
    letter: "z",
    answer: "zen",
    status: 0,
    question:
      "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
  },

  {
    letter: "d",
    answer: "diccionario",
    status: 0,
    question:
      "CON LA D. Libro en el que aparece el significado de las palabras por orden alfabético",
  },

  {
    letter: "e",
    answer: "esdrujula",
    status: 0,
    question: "CON LA E. Palabra cuya sílaba tónica es la antepenúltima",
  },

  {
    letter: "f",
    answer: "frase",
    status: 0,
    question: "CON LA F. Tipo de enunciado que no tiene verbo",
  },

  {
    letter: "g",
    answer: "grave",
    status: 0,
    question: "CON LA G. Antónimo de leve",
  },

  {
    letter: "h",
    answer: "homofonas",
    status: 0,
    question:
      "CON LA H. Palabras que se pronunciamos igual, pero tienen significados diferentes",
  },

  {
    letter: "",
    answer: "",
    status: 0,
    question: "CON LA . ",
  },

  {
    letter: "i",
    answer: "infinitivo",
    status: 0,
    question: "CON LA I. Forma no personal del verbo",
  },

  {
    letter: "j",
    answer: "jimenez",
    status: 0,
    question: "CON LA J. Apellido del autor de 'Platero y yo'",
  },

  {
    letter: "k",
    answer: "frankenstein",
    status: 0,
    question:
      "CONTIENE LA K. Título de una novela y nombre de su protagonista, un sabio que da vida a un monstruo componiendo miembros de cadáveres",
  },

  {
    letter: "l",
    answer: "lope de vega",
    status: 0,
    question: "CON LA L. Gran escritor español perteneciente al Siglo de Oro",
  },

  {
    letter: "m",
    answer: "monosilaba",
    status: 0,
    question: "CON LA M. Palabra que contiene una sola sílaba",
  },

  {
    letter: "n",
    answer: "numeral",
    status: 0,
    question: "CON LA N. Determinante que indica cantidad u orden",
  },

  {
    letter: "ñ",
    answer: "añorar",
    status: 0,
    question: "CONTIENE LA Ñ. Sinónimo de extrañar, echar de menos",
  },

  {
    letter: "p",
    answer: "polisemicas",
    status: 0,
    question: "CON LA P. Palabras que tienen más de tres sílabas",
  },

  {
    letter: "o",
    answer: "ortografaa",
    status: 0,
    question: "CON LA O. Conjunto de normas que regulan la escritura",
  },

  {
    letter: "q",
    answer: "enclenque",
    status: 0,
    question:
      "CONTIENE LA Q. Dícese de la persona débil, enfermiza, muy flaca ",
  },
  {
    letter: "r",
    answer: "receptor",
    status: 0,
    question: "CON LA R. El que recibe la información",
  },

  {
    letter: "s",
    answer: "sobreesdrujula",
    status: 0,
    question:
      "CON LA S. Palabra cuya sílaba tónica es la anterior a la antepenúltima",
  },

  {
    letter: "t",
    answer: "tragedia",
    status: 0,
    question: "CON LA T. Obra de teatro que tiene un desenlace desgraciado",
  },

  {
    letter: "u",
    answer: "undecimo",
    status: 0,
    question: "CON LA U. Adjetivo que sigue inmediatamente en orden al décimo",
  },

  {
    letter: "v",
    answer: "verso",
    status: 0,
    question:
      "CON LA V. Cada uno de los renglones cortos que forman una poesía",
  },

  {
    letter: "w",
    answer: "what",
    status: 0,
    question: "CON LA W. 'Qué' en inglés",
  },

  {
    letter: "x",
    answer: "extra",
    status: 0,
    question: "CONTIENE LA X. Prefijo que significa 'fuera de'",
  },

  {
    letter: "y",
    answer: "onomatopeya",
    status: 0,
    question: "CONTIENE LA Y. Vocablo que imita o recrea un sonido",
  },

  {
    letter: "z",
    answer: "zumbido",
    status: 0,
    question: "CON LA Z. Ruido que hacen algunos insectos como las abejas",
  },
];

let abcd = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "ñ",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let min = 0;
let max = questions.length - 1;
let random;
let currentQuestion;
let thisletter = 0;
let points = 0;
let currentLetter;
let timeLeft;

let htmlCurrentLetter = document.querySelector(".pasapalabra-letter");
let htmlCurrentQuestion = document.querySelector(".pasapalabra-question");
let htmlCorrectOrNot = document.querySelector(".pasapalabra-correct");
let showRanking = document.querySelector(".show-ranking");
let userAnswer = "";

let ranking = {
  players: [
    {
      user: "Josuke",
      score: 50,
    },
    {
      user: "Jancker",
      score: 77,
    },
    {
      user: "Jotaro",
      score: 60,
    },
    {
      user: "Joseph",
      score: 66,
    },
    {
      user: "Jonathan",
      score: 49,
    },
  ],
  score: "",
  currentPlayer() {
    this.players.push(new Player(username, this.score));
  },
  sortPlayers() {
    this.players.sort((a, b) => b.score - a.score);
  },
};

let currentPlayer;
let rankedPlayers = [];

const rightAnswer = "¡RESPUESTA CORRECTA!";
const wrongAnser = "¡RESPUESTA INCORRECTA! :(";
const nextAnswer = "¡PASAPALABRA!";

function calculateScore() {
  return parseInt((100 / 27) * points);
}

function generateRanking() {
  ranking.score = calculateScore();
  ranking.currentPlayer();
  ranking.sortPlayers();
  document.querySelector(
    ".ranking-congrats"
  ).innerHTML = `¡${username}, el juego ha acabado!`;
  ranking.players.forEach((player) => {
    printRanking = document.createElement("p");
    printRanking.innerHTML = `${player.user} | ${player.score} puntos`;

    document.querySelector(".ranking-table").appendChild(printRanking);
  });
  return;
}

function Player(user, score) {
  this.user = user;
  this.score = score;
}

function gameTimer() {
  timeLeft = 179;
  setTimer = setInterval(() => {
    if (timeLeft === 0) {
      clearInterval(setTimer);
      endGame();
      return;
    } else {
      timerDisplay.innerHTML = timeLeft;
    }
    timeLeft--;
  }, 1000);
  return;
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

function generateQuestion() {
  do {
    random = getRandomNumber(min, max);
  } while (questions[random]["letter"] !== abcd[thisletter]);
  currentLetter = abcd[thisletter];
  currentQuestion = questions[random]["question"];
  htmlCurrentQuestion.innerHTML = currentQuestion;
  giveActiveClass();
  document.getElementById("game-answer").focus();
}

function giveActiveClass() {
  document.getElementById(`${currentLetter}`).classList.add("active");
}

function removeActiveClass() {
  document.getElementById(`${currentLetter}`).classList.remove("active");
}

function giveAnsweredClass(color) {
  document.getElementById(`${currentLetter}`).classList.add(`${color}`);
}

function countAnsweredQuestions() {
  return questions.reduce(
    (acc, letter) => (letter.status === true ? (acc += 1) : acc),
    0
  );
}

function checkGameStatus() {
  if (countAnsweredQuestions() === 27) {
    endGame();
    return;
  } else {
    generateQuestion();
  }
}

function responderAction() {
  userAnswer = document
    .getElementById("game-answer")
    .value.toLowerCase()
    .toString();

  //CHECK IF ANSWER IS RIGHT OR WRONG
  if (userAnswer === "") {
    return;
  } else if (userAnswer === questions[random]["answer"]) {
    points++;
    abcd.splice(thisletter, 1);
    htmlCorrectOrNot.innerHTML = rightAnswer;
    questions[random]["status"] = true;
    giveAnsweredClass("rightanswer");
    removeActiveClass();
    checkGameStatus();

    userAnswer = document.getElementById("game-answer").value = "";
    document.getElementById("game-answer").value;
  } else {
    abcd.splice(thisletter, 1);
    htmlCorrectOrNot.innerHTML = wrongAnser;
    questions[random]["status"] = true;
    giveAnsweredClass("wronganswer");
    removeActiveClass();
    checkGameStatus();
    userAnswer = document.getElementById("game-answer").value = "";
  }
}

function pasapalabraAction() {
  //QUEUE THIS LETTER ON THE ABC ARRAY
  abcd.push(abcd[thisletter]);
  abcd.splice(thisletter, 1);

  htmlCorrectOrNot.innerHTML = nextAnswer;
  giveAnsweredClass("pasapalabraanswer");
  removeActiveClass();
  checkGameStatus();

  userAnswer = document.getElementById("game-answer").value = "";
}

function keyListener(event) {
  if (defaultPrevented === true) {
    return;
  } else {
    if (event.key === "Enter") {
      responderAction();
    } else if (event.key === "ArrowDown") {
      pasapalabraAction();
    }
  }
}

function endGame() {
  clearInterval(setTimer);
  r2d2.classList.remove("r2d2-animation");
  timerDisplay.classList.remove("r2d2-animation");
  contestConent.classList.add("intro-active");
  rankingContent.classList.remove("intro-active");
  generateRanking();
  return;
}

//WHAT HAPPENS WHEN YOU PRESS THE ENTER KEY
document.querySelector("body").addEventListener("keydown", keyListener);

//WHAT HAPPENS WHEN YOU CLICK THE 'RESPONDER' BUTTON
document.getElementById("btn-answer").onclick = responderAction;

//WHAT HAPPENS WHEN YOU CLICK THE 'PASAPALABRA' BUTTON
document.getElementById("btn-pasapalabra").onclick = pasapalabraAction;

checkGameStatus();
