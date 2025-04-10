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

  return palabraMinuscula === palabraInvertida;
  // Aca verifica si es palindromo
}

function verificarPalindromo(array) {
  // Separen en 2 arrays, las palabras palindromos y las que no lo son

  let palindromos = [];
  let noPalindromos = [];

  let esPalindromo = false;
  array.forEach((palabra) => {
    esPalindromo = esPalindromo(palabra);
    if (esPalindromo) {
      palindromos.push(palabra);
    } else {
      noPalindromos.push(palabra);
    }
  });

  let resultado = [palindromos, noPalindromos];

  return resultado; // esos dos arrays
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

console.log(verificarPalindromo(palabras));

// deberia devolver  2 arrays, uno con las palabras palindromas y otro con las que normales
