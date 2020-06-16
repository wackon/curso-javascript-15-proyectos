//getElementbyid

let elemento;



// encabezado = document.getElementById('encabezado').textContent;
// encabezado = document.getElementById('encabezado').innerText;
encabezado = document.getElementById('encabezado');
encabezado.style.background = '#333'
encabezado.style.color = '#fff';
encabezado.style.padding = '20px'


//cambiar texto

encabezado.textContent = 'Los Mejores Cursos'

encabezado.innerText = 'the best couses'


console.log(encabezado.innerText)    