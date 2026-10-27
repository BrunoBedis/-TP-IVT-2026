let p = document.querySelector('#ejer1')
// x2 + 5
// x2 + 32
// x2 + 10
//Declarar la funcion
function mayor(n1, n2){
  let nmayor
  if(n1 > n2){
    nmayor = n1
  } else{
    nmayor = n2}
  return nmayor
}

ejer1.textContent = 'el mayor es: ' + mayor(10,50)




//ejer2
let p2 = document.querySelector('#ejercicio2')




// x2 + 5
// x2 + 32
// x2 + 10
//Declarar la funcion
function menor(n3, n4){
  let nmenor
  if(n3 < n4){
    nmenor = n3
  } else{
    nmenor = n4
  }




  return nmenor
}




ejer2.textContent = 'El menor es: ' + menor(10,50)




//ejer3




function iguales (n1,n2,n3){
let resultado
 if ((n1 == n2)&&(n2 == n3)){
  resultado='son iguales'
 }else{
  resultado='son distintos'
 }
 return resultado
}
iguales(2,4,5)




ejer3.textContent = iguales(2,9,2)








//ej4
let ejer4 = document.querySelector('#ejer4')
function calcularIVA(compra) {
    let iva = compra * 0.21;
    return iva;
}




ejer4.textContent=("IVA: $" + calcularIVA(1000));




//ej5
let ejer5 = document.querySelector('#ejer5')
function saludar(nombre) {
    return "Hola " + nombre + "!";
}




ejer5.textContent=(saludar("vicente"));




//6
let ejer6 = document.querySelector('body')
let b6 = document.querySelector('#b6')








function activarModoOscuro() {
    ejer6.style.backgroundColor = "grey";
    ejer6.style.color = "white";
}




b6.onclick = function(){
  activarModoOscuro();
}




//7
let ejer7 = document.querySelector('body')
let b7 = document.querySelector('#b7')




function activarModoClaro() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
}




b7.onclick = function(){
  activarModoClaro();
}
