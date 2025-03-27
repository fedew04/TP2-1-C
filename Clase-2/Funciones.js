

let user = {
    nombre: "Matias",
    mensaje: saludar
}

// Funcion Declarada
// Se puede invocar antes de su declaracion por hoisting
function saludar(nombre){

    if(!nombre){
        return "Hola, quien eres?"
    }
    
    return `Hola, ${nombre}`
}

// console.log(saludar(0));
// console.log(saludar("Melissa"));
// console.log(saludar("Matias"));


// Asinar el valor de la funcion a una variable



const despedir = function(nombre){
    return `Adios, ${nombre}`
}


// console.log(user.mensaje('Laura'));

// Funcion Flecha, o Arrow Function

// se sobreentiende que si esta en la misma linea, el return es implicito
// const sumar = (a, b) => a + b

const sumar = (a, b) => {

    return a + b
}

let a = 5
let b = 22

// console.log(`La suma de ${a} y ${b} es: `, sumar(a, b))

const multiplicar = (a, b) => a * b 

// console.log(`La multiplicacion de ${a} y ${b} es: `, multiplicar(a, b))

let nombre = "Luis"

const persona = {
    nombre,
    edad: 29,
    saludar: function(){
        return `Hola, soy ${this.edad}`
    },
    adios: () => `Adios`,
    despedida(){
        return `Nos vemos luego ${this.nombre}`
    }
}

let resultados = {};

const operaciones = (a, b) => {
    resultados.suma = sumar(a, b)
    resultados.multiplicar = multiplicar(a, b)
}

operaciones(5, 3);

console.log(resultados);

