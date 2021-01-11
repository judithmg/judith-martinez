var flights = [
  {
    id: 0,
    to: "Bilbao",
    from: "Barcelona",
    cost: 1600,
    scale: false,
  },

  {
    id: 1,
    to: "New York",
    from: "Barcelona",
    cost: 700,
    scale: false,
  },

  {
    id: 2,
    to: "Los Angeles",
    from: "Madrid",
    cost: 1100,
    scale: true,
  },

  {
    id: 3,
    to: "Paris",
    from: "Barcelona",
    cost: 210,
    scale: false,
  },

  {
    id: 4,
    to: "Roma",
    from: "Barcelona",
    cost: 150,
    scale: false,
  },

  {
    id: 5,
    to: "London",
    from: "Madrid",
    cost: 200,
    scale: false,
  },

  {
    id: 6,
    to: "Madrid",
    from: "Barcelona",
    cost: 90,
    scale: false,
  },

  {
    id: 7,
    to: "Tokyo",
    from: "Madrid",
    cost: 1500,
    scale: true,
  },

  {
    id: 8,
    to: "Shangai",
    from: "Barcelona",
    cost: 800,
    scale: true,
  },

  {
    id: 9,
    to: "Sydney",
    from: "Barcelona",
    cost: 150,
    scale: true,
  },

  {
    id: 10,
    to: "Tel-Aviv",
    from: "Madrid",
    cost: 150,
    scale: false,
  },
];

//Se preguntará por el nombre de usuario y dará la bienvenida.
function saludos() {
  let user = "";
  do {
    user = prompt("¡Bienvenido a Skylab Airlines! Introduce tu usuario.");
    if (user === null) {
      let askExit = prompt(
        'Se saldrá de la aplicación. Escribe "CONTINUE" si no deseas salir.',
        "CONTINUE"
      );
      if (askExit === null) {
        console.log("¡Gracias por visitarnos!");
      }
      askExit.toLowerCase();
      if (askExit == "continue") {
        return;
      }
    }
  } while (!isNaN(user) || user === undefined);
  alert(
    "Hoy hace un bonito día para viajar, " +
      user +
      "! :) \nA continuación se mostrarán todos los vuelos en consola.\n¡Gracias por viajar con nosotros!"
  );
}

function vuelosConsola() {
  for (var i = 0; i < 11; i++) {
    if (flights[i].scale === true) {
      console.log(
        `El vuelo con ID ${flights[i].id} con origen ${flights[i].from} y destino ${flights[i].to} tiene un precio de ${flights[i].cost}€ y realiza escala.`
      );
    } else if (flights[i].scale === false) {
      console.log(
        `El vuelo con ID ${flights[i].id} con origen ${flights[i].from} y destino ${flights[i].to} tiene un precio de ${flights[i].cost}€ y no realiza ninguna escala.`
      );
    }
  }
}

function costeMedio() {
  //A continuación, el usuario verá el coste medio de los vuelos.
  var precioTotal = 0;
  var contar = 0;
  for (var i = 0; i < 11; i++) {
    precioTotal += flights[i].cost;
    contar += 1;
  }
  var precioMedio = precioTotal / contar;
  var precioRed = precioMedio.toFixed(2);
  console.log(`\nEl precio medio de los vuelos es ${precioRed} €.`);
}

function vuelosEscala() {
  //También podrá ver cuántos vuelos efectúan escalas.
  var escalas = 0;
  for (var i = 0; i < 11; i++) {
    if (flights[i].scale === true) {
      escalas += 1;
    }
  }
  console.log(`\nDe los vuelos indicados, ${escalas} realizan escala.`);
}

//Sabiendo que los últimos 5 vuelos (los últimos 5 ID's) son los últimos del día, muestra al usuario sus destinos.

function posiblesDestinos() {
  var destinos = [];
  for (var i = 10; i > 5; i--) {
    destinos.push(flights[i].to);
  }
  console.log(`\nTus posibles destinos en este momento son: ${destinos}`);
}

saludos();
vuelosConsola();
costeMedio();
vuelosEscala();
posiblesDestinos();
