
nombre = 'juan pablo';
nombre = "juan pablo"
//nombre = 'juan pablo"  error 

mensaje = ' y entonces dije \'Buen curso!!\''; //esta ok


//concatenar javascript

mensaje = 'JAVA' + 'SCRIPT'

//uniendo variables en unsa sola
mensaje = 'Aprendiendo javascript. CSS, HTML, paras ser Frontend'


console.log(mensaje.substring (0,11))   //Toma desde la posicion 0 del string hasta el caracter numero 11 del mismo

console.log(mensaje.substring (3,21))   //Toma desde la posicion 3 del string hasta el caracter numero 21 del mismo

console.log(mensaje.slice(-3))   //Toma desde la ultima posicion del string hasta el caracter numero -3 contando de atras hacia adelante

console.log(mensaje.slice(-30))   //Toma desde la ultima posicion del string hasta el caracter numero -3 contando de atras hacia adelante

console.log(mensaje.slice(0,11))   //cumple la misma funcion que substring

console.log( mensaje.split(' '))    //serpara el codigo en porciones por espacio


console.log( mensaje.split(','))   //serpara el codigo en porciones por comas

console.log(mensaje.replace('CSS','PHP'))   //remplaza en el string los caracteres CSS por PHP

console.log(mensaje.includes('CSS'))    //comprueba si el string tiene en su contenido CSS - devuelve true o false

let tecnologia = 'javascript' + ' ';
console.log(tecnologia.repeat(10))      //repite un valor en 10 oportunidades
