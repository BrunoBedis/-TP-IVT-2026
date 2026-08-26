let edad = 19
let parrafo1 = document.querySelector ("#parrafo1")
let boton1 = document.querySelector ("#boton1")
let parrafo2 = document.querySelector ("#parrafo2")
let boton2 = document.querySelector ("#boton2")
let parrafo3 = document.querySelector ("#parrafo3")
let boton3 = document.querySelector ("#boton3")
let parrafo4 = document.querySelector ("#parrafo4")
let boton4 = document.querySelector ("#boton4")
let parrafo5 = document.querySelector ("#parrafo5")
let boton5 = document.querySelector ("#boton5")
let parrafo6 = document.querySelector ("#parrafo6")
let boton6 = document.querySelector ("#boton6")
let parrafo7 = document.querySelector ("#parrafo7")
let boton7 = document.querySelector ("#boton7")
let nombreUsuario = "Marcos"
let numero = -5
let edad2 = 29
let dia = "sabado"
let contraseña = "secreto"


boton1.onclick = function () {
if (edad >= 18)
{  
    parrafo1.textContent = "Eres mayor de edad"
}else{ 
    parrafo1.textContent = "Eres menor de edad"

}
}


boton2.onclick = function () {
    if (nombreUsuario == "Nahuel") { 
        parrafo2.textContent = "Bienvenido Nahuel, ¿cómo estás?"
    } else  {
        parrafo2.textContent = "Bienvenido usuario"
    }
}

boton3.onclick = function () {
if (nombreUsuario == "Nahuel" || nombreUsuario == "Marcos") {    
   parrafo3.textContent = "bienvenido " + nombreUsuario + ", como estas?"
} else {
    parrafo3.textContent= "bienvenido" + nombreUsuario
}
}
boton4.onclick = function () {
if (numero > 0 ) {
    parrafo4.textContent = "El número es positivo"
} else if (numero < 0) {
    parrafo4.textContent = "El número es negativo"
} else {
parrafo4.textContent = "El número es cero"
}
}
boton5.onclick = function () {
    if (edad2  >= 6 && edad2 <= 11) {
        parrafo5.textContent = "Niño"
    } else if (edad2 >= 12 && edad2 <= 18) {
        parrafo5.textContent = "Adolescente"
    } else if (edad2 >= 19 && edad2 <= 26) {
         parrafo5.textContent = "Joven"
    } else if  (edad2 >= 27 && edad2 <= 59 ) {
         parrafo5.textContent = "Adulto"
    } else if (edad2 >= 60) {
        parrafo5.textContent = "Anciano"
    } else {
parrafo5.textContent = "Edad fuera de rango"
    }
}
boton6.onclick = function () {
    if (dia == "lunes" || dia == "martes" || dia == "miercoles" || dia == "jueves" || dia == "viernes") {
        parrafo6.textContent = "Es un dia laborable"
    } else if (dia == "sabado" || dia == "domingo") {
        parrafo6.textContent = "Es fin de semana"
    }
}
boton7.onclick = function () {
    if (contraseña == "secreto") {
        parrafo7.textContent = "Acceso concedido"
    } else {
        parrafo7.textContent = "Acceso denegado"
    }
}
