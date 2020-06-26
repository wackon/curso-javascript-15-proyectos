//Traversing


//muestra los nodos y cuenta tambien los espacios 

/*
const navegacion = document.querySelector('#principal')


console.log(navegacion.childNodes);

*/

//muestra solo los nodos con informacion

const navegacion = document.querySelector('#principal')

console.log(navegacion.children[0]);
console.log(navegacion.nodeName)
console.log(navegacion.children[0].textContent); // muestra el contenido en texto de la etiqueta
console.log(navegacion.children[0].nodeName);//muestra a que es la etiqueta del html
console.log(navegacion.children[0].nodeType); //los tipos de nodos regresan en numeros 

/*  tipo 1 = Elementos html
    tipo 2 = Atributos
    tipo 3 = Texto
    tipo 8 = comentarios
    tipo 9 = documentos
    tipo 10 = doctype

    todos conforman el html

    */
///////////////////////////////////////////////
    
console.log(navegacion.children[0].textContent = "nuevo enlace");


const barra = document.querySelector('.barra')


console.log(barra.children[0].children[0].children);

////////////////////////////////////////////


///////////////////////////////////////

const cursos = document.querySelectorAll('.card')


console.log(cursos[0].lastChild);//devuelve texto lo que indica que son espacios

console.log(cursos[0].lastElementChild) //devuelve el elemento hijo que se encuentra en la ultima posicion

console.log(cursos[0].firstElementChild)//devuelve el elemento hijo en pocision 0

console.log(cursos[0].childElementCount);//muestra la cantidad de elementos hijos, en este caso 2 - pos 0 la imagen , pos 1 info card

//////////////////////////////////