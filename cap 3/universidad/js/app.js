//Eliminar elementos desde javascript--estos pueden ser borrados sobre si mismmo ó desde el padre

/*
const enlaces = document.querySelectorAll('.enlace')

const navegacion = document.querySelector('#principal')

//enlaces[0].remove();//hemos borrado para tu negocio desde él mismo


console.log(enlaces)
console.log(navegacion)

*/

//borrar desde el padre

/*
const enlaces = document.querySelectorAll('.enlace')

const navegacion = document.querySelector('#principal')

navegacion.removeChild(enlaces[0])


console.log(enlaces)
console.log(navegacion)

*/

const primerLi = document.querySelector('.enlace')

let elemento;

//obtener una clase de CSS
elemento = primerLi.className;
elemento = primerLi.classList;

//añadimos una nueva clase

elemento = primerLi.classList.add('nueva-clase')//crea la nueva clase
elemento = primerLi.classList.remove('nueva-clase')//elimina la clase

elemento = primerLi.classList;

//leer atributos
elemento = primerLi.getAttribute('href') //obtenemos el valor
primerLi.setAttribute('href','http://facebook.com')//cambiamos el valor del atributo
primerLi.setAttribute('data-id',20) //adicionamos valor a un nuevo atributo

elemento = primerLi.hasAttribute('data-id');//valida si el atriburo data-id existe 
primerLi.removeAttribute('data-id')//remueve el atributo data-id

elemento = primerLi;



console.log(elemento)