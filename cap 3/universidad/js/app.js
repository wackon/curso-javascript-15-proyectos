//Query Selector

// const encabezado = document.querySelector('#encabezado')


// //Aplicar css


// encabezado.style.background = '#333';
// encabezado.style.color = '#fff';
// encabezado.style.padding = '20px';
// encabezado.textContent = 'Los Mejores Cursos';

// console.log(encabezado)



//getelementById solo funciona con id's por lo contrario querySelector funciona con classes y otros atributos para clase seria .


// const encabezado = document.querySelector('.encabezado')


// encabezado.style.background = '#333';
// encabezado.style.color = '#fff';
// encabezado.style.padding = '20px';
// encabezado.textContent = 'Los Mejores Cursos';




// console.log(encabezado)

/*
const encabezado = document.querySelector('.enlace')

//si existen muchos elementos con esta clase solo tomará al primero que en cuentre con esa clase.

//querySelectorAll mostrará todos



console.log(encabezado)
*/

// const encabezado = document.querySelector('.card img')


// console.log(encabezado)

//

let enlace;

enlace = document.querySelector('#principal a:first-child')
enlace = document.querySelector('#principal a:last-child')
enlace = document.querySelector('#principal a:nth-child(3)')


console.log(enlace)