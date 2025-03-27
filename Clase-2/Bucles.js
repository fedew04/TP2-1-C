

// Bucle For, For Clasico

let numeros = [1, 2, 3, 4, 5]

// console.log(numeros.length);


for (let index = 0; index < numeros.length; index++) {
    const element = numeros[index];
    // console.log(`El element con indice ${index} es: `, element);
}

// WHILE

// Se usa cuando no sabemos cuantas veces queremos iterarlo
let contador = 0;
while( contador < 8){
    // console.log(`El contador por ahora sigue siendo: ${contador}`);
    contador++
}

// While con switch

let opcion = 3;
// while (opcion !== 0){
//     switch(opcion){
//         case 1:
//             console.log("La opcion es la 1");
//             break;
//         case 2:
//             console.log(`La opcion es la ${opcion}`);
//             break;
//         default:
//             console.log("Opcion Invalida"); 
//     }
//     opcion--
// }

// Do while
// Siempre ejecuta al menos una vez
let marcador = 2
do {
    // console.log("Esto por ahora es: ", marcador);
    marcador++
} while(marcador < 8)


// For OF
// Recorrer valores de arrays
const colores = ["Azul", "Rojo", "Verde"]

for (const color of colores) {
    console.log("Color es: ", color);
}

// for (let i = 0; i < colores.length; i++) {
//     colores[i];
//     console.log("Color es: ", colores[i]);
// }


// For IN
// Recorrer las claves de los objetos

const persona = {
    nombre: "Maria",
    edad: 28,
    ciudad: "La Plata"
}

for (const clave in persona) {
    // console.log("La clave es: ", clave);
    // console.log("El valor de la clave es: ", persona[clave]);
    console.log("La clave es ", clave, ":", persona[clave]);
}


const numerosNuevo = [1, 2, 3, 4, 5]

numerosNuevo.forEach((num, index) => {
    console.log(`For Each devuelve ${index}: ${num}`);

})

const dobles = numerosNuevo.map( num => num * 2)

console.log('Dobles son: ', dobles);


// For of: cuando queres recorrer un array
// for in: cuando queres recorrer las claves un de objeto




