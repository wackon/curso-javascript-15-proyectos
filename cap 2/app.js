// //Crear un arreglo 
 
// const numeros = [10,20,30,40,50,60];
// console.log(numeros);

// //Arreglo de Strings (metodo alternativo)

const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril');
console.log(meses)

// //Arreglo mezclado

// const mezclado = ['Hola', 20, true, null, false, undefined ]
// console.log(mezclado);

// const mezclado1 = ['Hola', 20, true, null, false, undefined]
// console.log(mezclado1.length);

//Comprobar si es un arreglo

console.log(Array.isArray(meses));
console.log(meses)
console.log(meses[2])

// adicionamos un mes al array

meses [4] = 'Mayo'
console.log(meses.length)
console.log(meses)

// otra forma

meses.push('Junio')     //añade al final del arreglo
console.log(meses.length)
console.log(meses)


let nombre = 'Juan';
console.log(Array.isArray(nombre));
