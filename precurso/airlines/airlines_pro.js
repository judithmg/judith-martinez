let flights = [
  {
    id: 0,
    to: "Bilbao",
    from: "Barcelona",
    cost: 1600,
    scale: false,
    display: true,
  },

  {
    id: 1,
    to: "New York",
    from: "Barcelona",
    cost: 700,
    scale: false,
    display: true,
  },

  {
    id: 2,
    to: "Los Angeles",
    from: "Madrid",
    cost: 1100,
    scale: true,
    display: true,
  },

  {
    id: 3,
    to: "Paris",
    from: "Barcelona",
    cost: 210,
    scale: false,
    display: true,
  },

  {
    id: 4,
    to: "Roma",
    from: "Barcelona",
    cost: 150,
    scale: false,
    display: true,
  },

  {
    id: 5,
    to: "London",
    from: "Madrid",
    cost: 200,
    scale: false,
    display: true,
  },

  {
    id: 6,
    to: "Madrid",
    from: "Barcelona",
    cost: 90,
    scale: false,
    display: true,
  },

  {
    id: 7,
    to: "Tokyo",
    from: "Madrid",
    cost: 1500,
    scale: true,
    display: true,
  },

  {
    id: 8,
    to: "Shangai",
    from: "Barcelona",
    cost: 800,
    scale: true,
    display: true,
  },

  {
    id: 9,
    to: "Sydney",
    from: "Barcelona",
    cost: 150,
    scale: true,
    display: true,
  },

  {
    id: 10,
    to: "Tel-Aviv",
    from: "Madrid",
    cost: 150,
    scale: false,
    display: true,
  },
];

//CAPITALIZE FIRST LETTER FOR DESTINATION AND DEPARTURE
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

//ARRANGES AND SHOWS FLIGHTS ON THE CONSOLE
function airConsola() {
  console.clear();

  let precioTotal = 0;
  let contar = 0;
  let escalas = 0;

  for (let i = 0; i < flights.length; i++) {
    if (flights[i].display === true) {
      //DIFFERENT TEXT SHOWING WETHER THERE'S A SCALE OR NOT
      if (flights[i].scale === true) {
        console.log(
          `El vuelo con ID ${flights[i].id} con origen ${flights[i].from} y destino ${flights[i].to} tiene un precio de ${flights[i].cost}€ y realiza escala.`
        );
      } else if (flights[i].scale === false) {
        console.log(
          `El vuelo con ID ${flights[i].id} con origen ${flights[i].from} y destino ${flights[i].to} tiene un precio de ${flights[i].cost}€ y no realiza ninguna escala.`
        );
      }
      precioTotal += flights[i].cost;
      contar += 1;
      if (flights[i].scale === true) {
        escalas += 1;
      }
    }
  }
  //FLIGHTS COUNT, TOTAL PRICE

  let precioMedio = precioTotal / contar;
  let precioRed = precioMedio.toFixed(2);
  console.log(`\nEl precio medio de los vuelos es ${precioRed} €.`);
  console.log(`\nDe los vuelos indicados, ${escalas} realizan escala.`);
}

//THIS FUNCTION TAKES THE INPUT GIVEN TO THE PROMPT. IF THE USER CLICKED CANCEL, THE PROMPT VALUE IS 'NULL', AND THE FUNCTION WILL ASK THE USER IF THEY'RE SURE THEY WANT TO EXIT THE APP.
function salida(inputGiven, currentFunction) {
  if (inputGiven === null) {
    let preguntaSalir = true;
    preguntaSalir = confirm("\u00BFEst\u00E1s seguro que deseas salir?.");
    if (preguntaSalir === true) {
      console.clear();
      EXIT();
    } else {
      currentFunction();
      return;
    }
  }
  return;
}

//THIS FUNCTION WILL RUN IF YOU CONFIRM YOU WANT TO EXIT THE APP
function EXIT() {
  console.clear();
  console.log("GRACIAS POR VISITARNOS");
  throw new Error();
}

//FUNCTION TO CHECK WHO'S ACCESSING THE APP
function MAINAPP() {
  do {
    userType = prompt(
      "\u00A1Bienvenido a Skylab Airlines! \u00BFDeseas realizar funciones de USER o ADMIN?",
      "USER,ADMIN"
    );
    salida(userType, MAINAPP);
    userType = userType.toUpperCase();
  } while (userType !== "USER" && userType !== "ADMIN");

  if (userType === "USER") {
    USER();
  } else if (userType === "ADMIN") {
    ADMIN();
  } else {
    alert("No te he entendido. Volvamos a empezar.");
    MAINAPP();
  }
}

//WHICH ADMIN FUNCTION YOU WANT TO PERFOM?
function ADMIN() {
  //SORT FLIGHTS BY ID, SET ALL DISPLAYS TO TRUE
  flights.sort((a, b) => a.id - b.id);
  for (let i = 0; i < flights.length; i++) {
    flights[i].display = true;
  }
  let ediDel;
  do {
    ediDel = prompt(
      "Te encuentras en la funci\u00F3n de ADMINISTRADOR. Indica la funci\u00F3n a la que quieres acceder: EDIT, DELETE.",
      "EDIT,DELETE"
    );
    salida(ediDel, ADMIN);
    ediDel = ediDel.toUpperCase();
  } while (ediDel !== "EDIT" && ediDel !== "DELETE");

  //JUMP TO NEXT FUNCITON
  if (ediDel === "EDIT") {
    EDIT();
  } else if (ediDel === "DELETE") {
    DELETE();
  } else {
    alert("No te he entendido");
    ADMIN();
  }
}
function DELETE() {
  airConsola();
  let fliDel;
  do {
    do {
      fliDel = prompt(
        "En consola se muestran los vuelos disponibles. Introduce el ID del vuelo que quieres eliminar."
      );
      salida(fliDel, DELETE);
    } while (fliDel === "" || isNaN(fliDel));
    fliDel = parseInt(fliDel);
  } while (fliDel >= flights.length);

  flights.splice(fliDel, 1);
  //SET NEW IDS
  let newID = 0;
  for (let i = 0; flights.length > i; i++) {
    flights[i].id = newID;
    newID += 1;
  }

  airConsola();
  alert(
    `El vuelo ${fliDel} se ha eliminado. Los vuelos disponibles se vuelven a mostrar en consola.`
  );
  let exitUser;
  exitUser = confirm(
    "Si deseas continuar dentro de las funciones de Administrador, pulsa Aceptar. En caso contrario, pulsa Cancelar."
  );
  if (exitUser === true) {
    ADMIN();
  } else {
    alert("Esperamos volver a verte pronto.");
    EXIT();
  }
}

function EDIT() {
  if (flights.length === 15) {
    alert(
      "No se pueden introducir m\u00E1s de 15 vuelos.\nSe volver\u00E1 al inicio de las herramientas de administrador.\nRecomendamos eliminar alg\u00FAn vuelo para poder añadir m\u00E1s."
    );
    ADMIN();
  } else {
    alert(
      "A continuaci\u00F3n se podr\u00E1n introducir nuevos vuelos a la base de datos."
    );
    newFlight = Object();
    let newID = flights.length;
    newFlight.id = newID;
    newFlight.display = true;

    //DESTINO
    do {
      newFlight.to = prompt("Introduce el destino del vuelo");
      salida(newFlight.to, EDIT);
    } while (!isNaN(newFlight.to) || newFlight.to === undefined);
    newFlight.to = capitalizeFirstLetter(newFlight.to);

    //PROCEDENCIA
    do {
      newFlight.from = prompt("Introduce la procedencia del vuelo");
      salida(newFlight.from, EDIT);
    } while (!isNaN(newFlight.from) || newFlight.from === undefined);
    newFlight.from = capitalizeFirstLetter(newFlight.from);

    //PRECIO
    do {
      newFlight.cost = prompt("Introduce el precio del vuelo");
      salida(newFlight.cost, EDIT);
    } while (isNaN(newFlight.cost));
    newFlight.cost = parseInt(newFlight.cost);

    //ESCALA
    do {
      newFlightYN = prompt(
        "\u00BFEl vuelo realizar\u00E1 escala? Introduce Y/N",
        "Y/N"
      );
      salida(newFlightYN, EDIT);
      newFlightYN = newFlightYN.toUpperCase();
    } while (newFlightYN !== "Y" && newFlightYN !== "N");

    if (newFlightYN === "Y") {
      newFlight.scale = true;
    } else if (newFlightYN === "N") {
      newFlight.scale = false;
    }

    //COMPROBACIONES
    alert(
      `La informaci\u00F3n introducida es la siguiente. En caso de error, podr\u00E1s eliminar el vuelo m\u00E1s tarde.\nID: ${newID}, origen: ${newFlight.from}, destino: ${newFlight.to}, precio: ${newFlight.cost} €, escala: ${newFlight.scale}`
    );
    flights[newID] = newFlight;
    airConsola();
    let exitUser;
    exitUser = confirm(
      "Si deseas continuar dentro de las funciones de Administrador, pulsa Aceptar. En caso contrario, pulsa Cancelar."
    );
    if (exitUser === true) {
      ADMIN();
    } else {
      alert("Esperamos volver a verte pronto.");
      EXIT();
    }
  }
}

function USER() {
  //SORT FLIGHTS BY ID, SET ALL DISPLAYS TO TRUE
  flights.sort((a, b) => a.id - b.id);
  for (let i = 0; i < flights.length; i++) {
    flights[i].display = true;
  }
  let orden;
  do {
    orden = prompt(
      "\u00BFC\u00F3mo deseas que se muestren los vuelos? 1- Ordenar precio ascendente; 2- Ordenar precio descendente; 3- Ordenar por ID; 4- Buscar por precio",
      "1,2,3,4"
    );
    salida(orden, USER);
  } while (orden !== "1" && orden !== "2" && orden !== "3" && orden !== "4");
  orden = parseInt(orden);

  //HOW DO WE SORT THE FLIGHTS?
  SORTFLIGHTS(orden);
  if (orden === 4) {
    SEARCHFLIGHTS();
  }

  let compra;
  do {
    compra = prompt("Introduce el ID del vuelo que deseas comprar.");
    salida(compra, USER);
  } while (compra === "" || (!isNaN(compra) && compra >= flights.length)); //LOOP IF THE ID ISN'T VALID
  compra = parseInt(compra);

  for (let i = 0; flights.length > i; i++) {
    if (flights[i].id === compra) {
      alert(
        `Se ha comprado el vuelo con ID ${flights[i].id} con origen ${flights[i].from} y destino ${flights[i].to}. Ha pagado ${flights[i].cost} €.`
      );
      let exitUser;
      exitUser = confirm(
        "Gracias por tu compra. Si deseas continuar comprando vuelos, pulsa Aceptar. En caso contrario, pulsa Cancelar."
      );
      if (exitUser === true) {
        USER();
      } else {
        alert(
          "\u00A1Gracias por tu compra! Esperamos que vuelvas a volar con nosotros pronto."
        );
        EXIT();
      }
    }
  }
}

function SORTFLIGHTS(orden) {
  if (orden === 1) {
    flights.sort((a, b) => a.cost - b.cost);
    airConsola();
  } else if (orden === 2) {
    flights.sort((a, b) => b.cost - a.cost);
    airConsola();
  } else if (orden === 3) {
    airConsola();
  } else {
    return;
  }
  return;
}

function SEARCHFLIGHTS() {
  let option;
  airConsola();
  do {
    option = prompt(
      "Especifica \u00F3mo deseas buscar los vuelos: 1- Mayor que X precio; 2- Menor que X precio; 3- Igual a X precio",
      "1,2,3"
    );
    salida(option, SEARCHFLIGHTS);
  } while (option !== "1" && option !== "2" && option !== "3");
  option = parseInt(option);

  let price;
  switch (option) {
    //HIGHER THAN
    case 1:
      do {
        price = prompt("Buscar vuelos precio mayor a:");
        salida(price, SEARCHFLIGHTS);
      } while (isNaN(price));
      price = parseInt(price);

      for (let i = 0; i < flights.length; i++) {
        if (flights[i].cost <= price) {
          flights[i].display = false;
        }
      }
      airConsola();
      break;
    //SMALLER THAN
    case 2:
      do {
        price = prompt("Buscar vuelos precio menor a:");
        salida(price, SEARCHFLIGHTS);
      } while (isNaN(price));
      price = parseInt(price);

      for (let i = 0; i < flights.length; i++) {
        if (flights[i].cost >= price) {
          flights[i].display = false;
        }
      }
      airConsola();
      break;

    //SAME AS
    case 3:
      let countEqualPrice = 0;
      do {
        do {
          price = prompt("Buscar vuelos precio igual a:");
          salida(price, SEARCHFLIGHTS);
        } while (isNaN(price));
        price = parseInt(price);
        for (let i = 0; i < flights.length; i++) {
          if (flights[i].cost !== price) {
            flights[i].display = false;
          } else {
            countEqualPrice++;
          }
        }
        if (countEqualPrice === 0) {
          alert("No existen vuelos con ese precio.");
        }
      } while (countEqualPrice === 0);
      airConsola();
      break;
    default:
      alert("No te he entendido. Volvamos a empezar.");
      SEARCHFLIGHTS();
  }
  return;
}

MAINAPP();
