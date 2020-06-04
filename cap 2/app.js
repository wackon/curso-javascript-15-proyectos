 const ciudades = ['Londres','New york', 'Madrid','Paris'];
 const ordenes = new Set([123,231,131,102]);
 const datos = new Map();
 datos.set('nombre','juan');
 datos.set('profesion','desarrollador Web');

//Entries iterador

// // //Entries a las ciudades

// for (let entrada of ciudades.entries()){
//     console.log(entrada);
// }


//Entries para las ordenes


// for (let entradas of ordenes.entries()){
//     console.log(entradas)
// }

//Entries para el MAP

// for (let entrada of datos.entries()){
//     console.log(entrada)
// }

//Values a las ciudades

// for(let entrada of ciudades.values()){
//     console.log(entrada)
// }


//Values para las ordenes


// for (let entradas of ordenes.values()){
//     console.log(entradas)
// }

//values para el MAP

// for (let entrada of datos.values()){
//     console.log(entrada)
// }

//keys iterator

//keys a las ciudades

// for(let entrada of ciudades.keys()){
//     console.log(entrada)
// }


//keys para las ordenes


// for (let entradas of ordenes.keys()){
//     console.log(entradas)
// }

//keys para el MAP

// for (let entrada of datos.keys()){
//     console.log(entrada)
// }

//default a las ciudades

// for(let entrada of ciudades){
//     console.log(entrada)
// }

//default para las ordenes


// for (let entradas of ordenes){
//     console.log(entradas)
// }

//default para el MAP

// for (let entrada of datos){
//     console.log(entrada)
// }

// const mensaje= 'Aprendiendo javascript'

// for(let i=0; i< mensaje.length;i++){
//     console.log(mensaje[i])
// }

// for (let letra of mensaje){
//     console.log(letra)
// }

const enlaces = document.getElementsByTagName('a');

for (let enlace of enlaces){
    console.log(enlace.href);
}