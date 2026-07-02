
let uno = document.querySelector('#b1')
let dos = document.querySelector('#b2')
let tres = document.querySelector('#b3')
let cuatro = document.querySelector('#b4')
let cinco = document.querySelector('#b5')
let seis = document.querySelector('#b6')
let p= document.querySelector('p')
let body= document.querySelector('body')

uno.onclick= function(){
    //cambiar el color de fondo
    p.style.backgroundColor= 'rgb(167, 30, 30)'
}
dos.onclick= function(){
    //cambiar el contenido del parrafo
    p.textContent= 'se modifico el parrafo'
}
tres.onclick= function(){
    //cambiar el color de la letra del párrafo
    p.style.color= 'Blue'
}
cuatro.onclick= function(){
    //cambiar el tipo de letra del párrafo
    p.style.fontFamily= 'IMPACT'
}
cinco.onclick= function(){
//cambiar el tamaño del párrafo 
p.style.fontSize= '50px'}
seis.onclick= function()
{
    //reiniciar
    p.style.fontSize= '25px'
    p.style.fontFamily= 'arial'
    p.style.backgroundColor= 'rgb(167, 42, 42)'
    p.style.color= 'rgb(255, 255, 255)'
    p.style.textContent= 'Este parrafo puede modificarse'
    p.style.backgroundColor= 'rgb(141, 141, 141)'
    p.style.color= 'rgb(0, 0, 0)'}
    
  { 
      uno.style.background='rgb(141, 141, 141)'
    dos.style.background='rgb(141, 141, 141)'
    tres.style.background='rgb(141, 141, 141)'
    cuatro.style.background='rgb(141, 141, 141)'
    cinco.style.background='rgb(141, 141, 141)'
    seis.style.background='rgb(141, 141, 141)'
    siete.style.background='rgb(141, 141, 141)'
}

