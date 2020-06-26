//event listeners click al buscador

/*funcion integrada

alert('ensayo inicial');

document.querySelector('#submit-buscador').addEventListener('click',function(event){
    event.preventDefault();
    alert('buscando Cursos')
})

*/

//funcion creada aparte

/*

document.querySelector('#submit-buscador').addEventListener('click',ejecutarBoton)

function ejecutarBoton(event){
        event.preventDefault();
      
        console.log('Desde la función ejecutar Boton')
    }
*/


//imprimiendo atributos del buscador

/*
document.querySelector('#submit-buscador').addEventListener('click',ejecutarBoton)

function ejecutarBoton(event){
        event.preventDefault();
      
        let elemento;
        elemento = event;
        elemento = event.target;
        elemento = event.target.id;
        elemento = event.target.className;
        elemento = event.target.innerText;


        console.log(elemento);
    }
*/

document.querySelector('#encabezado').addEventListener('click', function(e){
   e.target.innerText = 'Nuevo encabezado'

})