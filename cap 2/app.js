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

function sumar (a,b){
    return (a + b)
}

let suma;
// suma = sumar(1,2)
// suma = sumar(3,4)
suma = sumar(5)     //sale error ya que la funcion exige 2 parametros y solo se esta enviando 1


console.log(suma)