const numero1 = '50',
      numero2 = 10,
      numero3 = 'tres';


// console.log( numero1 + numero2 ) 
// console.log( parseInt(numero1) + numero2) 
// console.log( Number(numero1) + numero2)
// console.log(numero1 - numero2)
// console.log( typeof Number (numero3));  

let dato;
dato = Number ( "20");      //20
dato = Number ('20.2323565');       //20.2323565
dato = Number (true);       //1
dato = Number (false);      //0
dato = Number (null)        //0
dato = Number (undefined)       //NAN
dato = Number('hola mundo');
dato = Number ([1,2,3,4,5])


//parseFloat  y  parseint

dato = parseInt('100');
dato = parseFloat ( '100');
dato = parseFloat ( '100.203')
dato = parseInt ( '100.203')

console.log(dato);

//toFixed

dato = 1236745.35555565

console.log(dato.toFixed(3))        //esablece 3 decimales
console.log(typeof dato);


dato = '6456556';
//console.log(dato.toFixed())    //mostrará un erro ya que dato no es un string
console.log(parseInt(dato).toFixed(2))
