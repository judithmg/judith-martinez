calculator()

function calculator() {
	
var firstNum = parseFloat(prompt("Introduce el primer número"))
if (isNaN(firstNum)) { //comprobar si es un número
		alert('El dato introducido no es un número')
		calculator() //volver a empezar si no se introduce un número
	}

var secondNum = parseFloat(prompt("Introduce el segundo número"))
if (isNaN(secondNum))  {
	//comprobar si se ha introducido un número
	alert('No se ha introducido ningún segundo valor, o el dato introducido no es un número: se procederá al cálculo de la raíz cuadrada del primer valor introducido')
		var raiz = (Math.sqrt(firstNum))
				if (Math.round(raiz) !== raiz) {
				raiz = raiz.toFixed(3) //tres decimales como máximo
			}
		alert('La raíz cuadrada de '+firstNum+' es '+raiz)
		alert('Los resultados se mostrarán a continuación en consola.')
		console.log(`'Raiz cuadrada de ${firstNum}: ${raiz}`)

}

//comprobar si tienen decimales, poner como máximo 3 decimales

var suma = (firstNum)+(secondNum)
	if (Math.round(suma) !== suma) {
		suma = suma.toFixed(3)
	}
var resta = (firstNum)-(secondNum)
	if (Math.round(resta) !== resta) {
		resta = resta.toFixed(3)
	}
var mult = (firstNum)*(secondNum)
	if (Math.round(mult) !== mult) {
		mult = mult.toFixed(3)
	}
var div = (firstNum)/(secondNum)
	if (Math.round(div) !== div) {
		div = div.toFixed(3)
	}

if (isNaN(secondNum) === false) { //en caso que se haya introducido dos números, dar las cuatro operaciones
	alert("La suma de ambos números es: "+suma+". La resta de ambos números es: "+resta+". La multiplicación de ambos números es: "+mult+". La división de ambos números es: "+div+".")
	alert('Los resultados se mostrarán a continuación en consola.')
	console.log(`${firstNum}+${secondNum} = ${suma}; ${firstNum}-${secondNum} = ${resta}; ${firstNum}*${secondNum} = ${mult}; ${firstNum}/${secondNum} = ${div}`) //finalmente imprimir resultados en la consola
}

}

