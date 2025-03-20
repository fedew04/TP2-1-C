

let saludo = function(){
    return "Saludo"
}

let materias = ["PNT2", "TP2"]
let nombre = "Matias"


const familia = {

}

const usuario = {
    nombre: nombre,
    materias,
    edad: 30,
    activo: true,
    hablar: function(){
        let mensaje = "Hola"

        return mensaje
    },
    saludo: saludo,
    familia,
    aprobadas: null
}


console.log(usuario);

usuario.aprobadas = 5

console.log(usuario);
