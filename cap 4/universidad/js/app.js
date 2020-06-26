//varables

const encabezado = document.querySelector('#encabezado');
const enlaces = document.querySelector('.enlace');
const boton = document.querySelector('#vaciar-carrito');

/////----------CLICK--------

/*
boton.addEventListener('click', obtenerevento)

function obtenerevento(e){
    console.log(`EVENTO: ${e.type}`)
}
*/

// //--------DOBLE CLICK-----------

/*
boton.addEventListener('dblclick', obtenerevento)

function obtenerevento(e){
    console.log(`EVENTO: ${e.type}`)
}
*/

///////MOUSE ENTER -------//cuando pasas el mouse sobre el area especifica en este caso el vaciar carrito
/*

boton.addEventListener('mouseenter', obtenerevento)

function obtenerevento(e){
    console.log(`EVENTO: ${e.type}`)
}

*/

/////MOUSE LEAVE---Cuando se quita el mouse de vaciar carrito

/*
boton.addEventListener('mouseleave', obtenerevento)

function obtenerevento(e){
    console.log(`EVENTO: ${e.type}`)
}
*/


//////------MOUSE OVER ---------
/*

boton.addEventListener('mouseover', obtenerevento)

function obtenerevento(e){
    console.log(`EVENTO: ${e.type}`)
}
*/


////--------MOUSE OUT---------SIMILAR A LEAVE

/*
boton.addEventListener('mouseout', obtenerevento)

function obtenerevento(e){
    console.log(`EVENTO: ${e.type}`)
}   
*/


////--------MOUSE DOWN---------CUANDO PRESIONA ES PARECIDO AL CLICK

/*
boton.addEventListener('mousedown', obtenerevento)

function obtenerevento(e){
    console.log(`EVENTO: ${e.type}`)
}   
*/


////--------MOUSE UP---------CUANDO SUELTO PRESION AL CLICK SE ACCIONA

/*
boton.addEventListener('mouseup', obtenerevento)

function obtenerevento(e){
    console.log(`EVENTO: ${e.type}`)
}   
*/

//----MOUSEMOVE ---CUANDO SE PASA POR ENCIMA EN ESTE CASO SOBRE EL ENCABEZADO
encabezado.addEventListener('mousemove',obtenerevento)


function obtenerevento(e){
    console.log(`EVENTO: ${e.type}`)
}


