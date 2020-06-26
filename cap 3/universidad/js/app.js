//crear enlace

const enlace = document.createElement('a')

// agregamos una clase
enlace.className = 'enlace'

//añadir id
enlace.id = 'nuevo-id'

//añadir atributo href
enlace.setAttribute ('href', '#')

//añadir texto
 enlace.textContent = 'Nuevo enlace'  //o´

/*
enlace.appendChild(document.createTextNode('NUEVO ENLACE')); // DA EL MIMO RESULTADO QUE EL ANTERIOR CODIGO
*/


//Agregarlo al HTML

document.querySelector('#secundaria').appendChild(enlace) //seleccionamos la ubicacion a insertar y luego con appendChild inyectamos el elemento desde javascript


console.log(enlace)