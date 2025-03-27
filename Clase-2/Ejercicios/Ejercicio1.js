console.log("Arranca el ejercicio");

// Identificar los palindromos

function invertirTexto(palabra) {
  // Aca invierte el texto
  let palabraInvertida = "";
  for (i = palabra.length; i >= 0; i--) {
    palabraInvertida += palabra.charAt(i);
  }

  console.log(palabraInvertida);
  return palabraInvertida;
}

function esPalindromo(palabra) {
  const palabraMinuscula = palabra.tolowerCase(); // Cambia toda la palabra a minuscula
  const palabraInvertida = invertirTexto(palabraMinuscula);
  for (let i = 0; i < palabraMinuscula.length; i++) {
    if (palabraMinuscula[i] !== palabraInvertida[i]) {
      return false;
    }
  }
  // Aca verifica si es palindromo
}

function verificarPalindromo() {
  // Separen en 2 arrays, las palabras palindromos y las que no lo son

  esPalindromo(palabra);

  return; // esos dos arrays
}

const palabras = [
  "Neuquen",
  "Sol",
  "Hola",
  "Ana",
  "Oso",
  "Saludo",
  "Reconocer",
];

let palabra = "hola";
let palabraInvertida = "";
for (i = palabra.length; i >= 0; i--) {
  palabraInvertida += palabra.charAt(i);
}

console.log(palabraInvertida);

//verificarPalindromo(palabras);

// console.log(verificarPalindromo(palabras));

// deberia devolver  2 arrays, uno con las palabras palindromas y otro con las que normales
