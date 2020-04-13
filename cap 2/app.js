// //Crear un arreglo 
 
// const numeros = [10,20,30,40,50,60];
// console.log(numeros);

// //Arreglo de Strings (metodo alternativo)

const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril');
// console.log(meses)

// //Arreglo mezclado

// const mezclado = ['Hola', 20, true, null, false, undefined ]
// console.log(mezclado);

// const mezclado1 = ['Hola', 20, true, null, false, undefined]
// console.log(mezclado1.length);

//Comprobar si es un arreglo

// console.log(Array.isArray(meses));
// console.log(meses)
// console.log(meses[2])

// adicionamos un mes al array

// meses [4] = 'Mayo'
// meses.push('Junio')     //añade al final del arreglo

//Encontrar un elemento en el arreglo




console.log(meses.indexOf ('Abril'));

//adicionar al inicio del arreglo

meses.unshift('Mes 0')
console.log(meses);

//Eliminar un elemento de un arreglo

meses.pop()
console.log(meses)

//Eliminar un elemento de arreglo (el primero)
meses.shift()
console.log(meses)

//Eliminar un rango

const meses1 = new Array('Enero', 'Febrero', 'Marzo', 'Abril','Mayo');
meses1.splice(2,1)
//el 2 en el parentesis indica que el numero a eliminar sera el que se encuentra en la pos 2 y el 1 en el parentesis indica que solo se eliminara un elemento, si se colocara en 2 se eliminaria el elemento en pos 2 y 3

console.log(meses1)


//revertir meses
const meses2 = new Array('Enero', 'Febrero', 'Marzo', 'Abril','Mayo');
meses2.reverse();
console.log(meses2)

//unir un arreglo con otro

let arreglo1 = [1,2,3],
    arreglo2 = [9,8,7];

console.log(arreglo1.concat(arreglo2))

//ordenar un arreglo alfabeticamente

const frutas =['Platano', 'Manzana', 'Fresa', 'Naranja','Zanahoria']
console.log(frutas);
frutas.sort();
console.log(frutas);

arreglo1 = [3,9,91,92,23,45,21,56,1,100,10];
console.log(arreglo1);
arreglo1.sort();        //no ordena números
console.log(arreglo1)

//Arregla en modo ascendente solo con una funcion
arreglo1.sort(function(x,y){
    return x-y
}) 
console.log(arreglo1)

//Arregla en modo descendente solo con una funcion
arreglo1.sort(function(x,y){
    return y - x
}) 
console.log(arreglo1)