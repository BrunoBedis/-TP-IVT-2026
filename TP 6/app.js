
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
    p.style.backgroundColor= 'rgb(65, 20, 20)'
}
dos.onclick= function(){
    //cambiar el contenido 
    p.textContent= 'se modifico el parrafo'
}
tres.onclick= function(){
    //cambiar el color de la letra 
    p.style.color= 'slateblue'
}
cuatro.onclick= function(){
    //cambiar el tipo de letra 
    p.style.fontFamily= 'IMPACT'
}
cinco.onclick= function(){
//cambiar el tamaño 
p.style.fontSize= '60px'}
seis.onclick= function()
{
    //reiniciar
    p.style.fontSize= '25px'
    p.style.fontFamily= 'arial'
    p.style.backgroundColor= 'rgb(255, 0, 0)'
    p.style.color= 'rgb(255, 0, 0)'
    p.style.color= 'rgb(255, 255, 255)'
    p.textContent = 'Este parrafo puede modificarse'
}
  
  {  
      uno.style.background='rgb(27, 27, 27)'
    dos.style.background='rgb(27, 27, 27)'
    tres.style.background='rgb(27, 27, 27)'
    cuatro.style.background='rgb(27, 27, 27)'
    cinco.style.background='rgb(27, 27, 27)'
    seis.style.background='rgb(27, 27, 27)'
    siete.style.background='rgb(27, 27, 27)'
}

