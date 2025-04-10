function esMayor(usuario) {
  return usuario.edad >= 18;
}

function esHombre(usuario) {
  return usuario.sexo === "M";
}

function SepararUsuarios() {
  let objetoFinal = {
    mayores: {
      hombres: [],
      mujeres: [],
    },
    menores: {
      hombres: [],
      mujeres: [],
    },
  };

  usuarios.forEach((usuario) => {
    if (esHombre(usuario)) {
      if (esMayor(usuario)) {
        objetoFinal.mayores.hombres.push(usuario);
      } else {
        objetoFinal.menores.hombres.push(usuario);
      }
    } else {
      if (esMayor(usuario)) {
        objetoFinal.mayores.mujeres.push(usuario);
      } else {
        objetoFinal.menores.mujeres.push(usuario);
      }
    }
  });

  return objetoFinal;
}

const usuarios = [
  { nombre: "Lucas", edad: 27, sexo: "M" },
  { nombre: "Daniela", edad: 25, sexo: "F" },
  { nombre: "Martin", edad: 17, sexo: "M" },
  { nombre: "Delfina", edad: 22, sexo: "F" },
  { nombre: "Fernando", edad: 15, sexo: "M" },
];

console.log(SepararUsuarios(usuarios));
