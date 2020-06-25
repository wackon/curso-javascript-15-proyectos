/*

const enlaces = document.querySelectorAll('#principal .enlace');
enlaces[1].style.background ='#000'
enlaces[1].textContent ='nuevo enlace'

console.log(enlaces)
*/

const enlaces = document.querySelectorAll('#principal a:nth-child(odd)');

//'#principal a: nth-child(odd)' selecciona de principal todos los hijos que son impares

enlaces.forEach(function(impares){
    impares.style.backgroundColor = 'red';
    impares.style.color = '#000'
   
});

console.log(enlaces)