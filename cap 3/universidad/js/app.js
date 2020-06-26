//remplazar o modificar elementos desde javascript

const nuevoEncabezado = document.createElement('h2')

//agregar un id
nuevoEncabezado.id = 'encabezado';

//agregar nuevo texto
nuevoEncabezado.appendChild(document.createTextNode('Los Mejores Cursos'))

console.log(nuevoEncabezado)

//Elemento anterior será remplazado

const anterior = document.querySelector('#encabezado')

console.log(anterior)
console.log(anterior.parentElement)//se tomará esta referencia para realizar el cambio, ya que este es el padre del elemento a remplazar

//elemento padre
const elPadre = document.querySelector('#lista-cursos');

//remplazamos codigo

elPadre.replaceChild(nuevoEncabezado, anterior)

