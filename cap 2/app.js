//Function declaration
/*
function saludar(){
    console.log('Hola Miguel')
}
saludar();
*/


// function saludar(nombre){
//     console.log(`Hola ${nombre}`)
// }
// saludar('Daniel');
// saludar('PABLO');
// saludar('Carolina');
// saludar('Claudia');

/*
function sumar(a,b){
    console.log( a + b )
}

sumar(1,2)
sumar(3,4)
*/

//---------------Forma vieja de funciones ---------------
/*
function saludar (nombre){
    if(typeof nombre === 'undefined') {nombre = 'Visitante'}
   
    return (`Hola ${nombre}`)
}*/

//--------------Forma nueva-------------------------
/*
function saludar (nombre = 'Visitante'){      
    return (`Hola ${nombre}`)
}

let saludo;

saludo = saludar('Carolina')    
//saludo = saludar ()

//console.log(saludo)

*/

//----------------Funcition expression------------
/*
const suma = function(a , b){
    return a + b;
}

console.log(suma(1,2));
console.log(suma(5,5));
*/


// --------------Otra forma de function expression
/*
const suma = function(a = 3 , b = 4){
return a + b;
}

console.log( suma (1,2));
console.log( suma (5) );
console.log( suma (3,) );
*/
//-------------------------------------------------
/*
const saludar = function(nombre = 'Visitante'){
    return `hola ${nombre}`
}

console.log(saludar ('Juan'));
console.log(saludar ());

*/
//------------------------------------------------------

const saludar = function(nombre = 'Visitante',edad = 20, trabajo = 'desarrollador web'){
    return `hola tienes ${edad} , profesion ${trabajo} y te llamas ${nombre}`
}

console.log(saludar ('Juan'));
console.log(saludar ());
console.log(saludar ('Camilo',34,'telecomunicaciones'));