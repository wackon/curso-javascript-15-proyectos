//traversing del hijo al padre

/*

const enlaces = document.querySelectorAll('.enlace')

console.log(enlaces[0].parentNode) //parentNode : lo guia hacia el padre de donde nos encontramos
console.log(enlaces[0].parentElement)//hace lo mismo que el anterior, pero este es el mas usado

console.log(enlaces[0].parentElement.parentElement.parentElement)//suebe cada vez mas hacia su padre

*/

/*
const cursos = document.querySelectorAll('.card')

console.log(cursos[0])
console.log(cursos[0].parentElement)
console.log(cursos[0].parentElement.parentElement)
console.log(cursos[0].parentElement.parentElement.parentElement)
console.log(cursos[0].parentElement.parentElement.parentElement.children)
console.log(cursos[0].parentElement.parentElement.parentElement.children[0])
 console.log(cursos[0].parentElement.parentElement.parentElement.children[0].textContent='Hola desde traversing')

 */

 const enlaces = document.querySelectorAll('.enlace')

 console.log(enlaces[4]) //estamos en temas ---parte baja de la pagina
 //deseamos subir a soporte
 console.log(enlaces[4].previousSibling)//mostrará el espacio en blanco como text en html
 console.log(enlaces[4].previousElementSibling)//Estaremos ubicados en soporte

 //sibling son los que se encuentran al mismo nivel, que no esten endientados ej.

 /*
    <div class="four columns">
                            <nav id="principal" class="menu">
                                <a class="enlace" href="#">Para tu Negocio</a>          ------
                                <a class="enlace" href="#">Conviertete en Instructor</a> ----
                                <a class="enlace" href="#">Aplicaciones Móviles</a>     ------
                                <a class="enlace" href="#">Soporte</a>                   -----
                                <a class="enlace" href="#">Temas</a>                    ------
                            </nav>
                    </div>
 */
console.log(enlaces[4].previousElementSibling.previousElementSibling) //aplicaciones moviles



// ahora de arriba hacia abajo --empezariamos en para tu negocio

console.log(enlaces[0].nextElementSibling) //llegaria a Conviertete en instructor
console.log(enlaces[0].nextElementSibling.nextElementSibling.parentElement) //llegaria a la etiqueta nav
console.log(enlaces[0].nextElementSibling.nextElementSibling.parentElement.children)//lista hijos
console.log(enlaces[0].nextElementSibling.nextElementSibling.parentElement.children[4])

