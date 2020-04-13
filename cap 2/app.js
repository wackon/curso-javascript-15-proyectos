//Funciones IIFE

// (function(){
// console.log('Creando un IIFE')
// })();


// function sumar (a,b){
//     console.log(a + b)
// }
// sumar(1,2)

(function(a,b){
console.log((a * b))
})(8,3);

(function (tecnologia){
    console.log(`Aprendiendo ${tecnologia}`)
})('Javascript')


//-----Funciones con Metodos de propiedad-----------------

//Cuando una funcion se pone dentro de un objeto

const musica = {
    reproducir: function( id ) {
        console.log(`Reproduciendo Cancion id ${id}`);
    },
    
    pausar: function (){
        console.log('Pause a la Música')
    }
}




//Los metodos tambien pueden guardarsen o creacsen fuera del objeto

musica.borrar = function(id){
    console.log(`Borrando la cancion con el ID:${id}`)
}

musica.borrar(2)

musica.reproducir(30)
musica.pausar()
