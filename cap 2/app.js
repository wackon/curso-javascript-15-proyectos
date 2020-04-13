//Operador  or   ||

let efectivo = 300,
    credito = 300,
    totalCarrito = 500;
    disponible = (efectivo + credito)

if(totalCarrito < efectivo || totalCarrito < credito || totalCarrito < disponible){
    console.log('puedo pagar')
}else{
    console.log('No puedo pagar')
}


//ternario  ---es un if en una sola linea

const logueado = true;
console.log (logueado === true ? 'si se logueo' : 'No se logueo')


// ? = entonces
// : = else