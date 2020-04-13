/// if , else ,else if ,

// const edad = 18;

// if (edad != 18){
//     console.log('Si puedes entrar al sitio')    
// }else{
//     console.log('No puedes entrar al sitio')
// }


//--------------------------------------------------------------------

//comprobar que una variable tiene un valor

// let puntaje = 1000
//     puntaje = 0
let puntaje;

if (typeof puntaje != 'undefined'){
    console.log(`el puntaje fue de ${puntaje}`)
    }else{
        console.log(`No hay puntaje`)
    }

    console.log(puntaje)

//-_----------------------------------------------------------------------

let efectivo = 500

let totalCarrito = 300

if (efectivo > totalCarrito)
    console.log('Pago Correcto')
else
    console.log('Fondos insuficientes')
