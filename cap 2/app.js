//Fechas

//En javascript existe un objeto llamado Date


//Fecha en especifico Mes, Dia , Año
let navidad2017 = new Date('12-25-2017')
console.log(navidad2017)


// const diaHoy = new Date();
// console.log(diaHoy)


const diaHoy = new Date();

let valor;
valor = diaHoy.getMonth();      //Muestra el mes recordando que enero es el mes 0 cero en javascript
console.log(valor)

valor = diaHoy.getDate();       //Muestra el día
console.log(valor)

valor = diaHoy.getFullYear();           //Muestra el año
console.log(valor)

valor = diaHoy.getHours();          //Obtiene la hora en transcurso
console.log(valor)

valor = diaHoy.getMinutes();        //Obtiene los minutos en transcurso
console.log(valor)

valor = diaHoy.getSeconds();        //Obtiene los segundos en transcurso
console.log(valor)

valor = diaHoy.getTime();        //Obtiene los milisegundos desde 1970
console.log(valor)


valor = diaHoy.getFullYear();           //Muestra el año en transcurso
console.log(valor)
valor = diaHoy.setFullYear(2030)        //editamos el año a 2030
valor = diaHoy.getFullYear();
console.log(valor)
