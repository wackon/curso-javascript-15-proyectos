//crear objetos

const persona = {
    nombre: 'Miguel',
    apellido: 'Martinez',
    profesion:'Diseñador gráfico',
    email: 'correo@correo.com',
    edad: 20,
    musica : ['Trance', 'Rock','Grunge'],
    hogar: {
        cuidad: 'Medellín',
        pais: 'Polombia'
    },
    nacimiento : function(){
        return new Date().getFullYear() - this.edad
    }

}

console.log(persona);
// console.log(persona.profesion);
// console.log(persona.edad);
// console.log(persona.musica);
// console.log(persona.musica[1]);
// persona.musica.push('Alternativo');
// console.log(persona.musica);
// console.log(persona.hogar)
// console.log(persona.hogar.cuidad)
console.log(persona.nacimiento())



const persona2 = {
    nombre: 'Miguel',
    apellido: 'Martinez',
    profesion:'Diseñador gráfico',
    email: 'correo@correo.com',
    edad: 30,
    musica : ['Trance', 'Rock','Grunge'],
    hogar: {
        cuidad: 'Medellín',
        pais: 'Polombia'
    },
    nacimiento : function(){
        return new Date().getFullYear() - this.edad
    }

}

console.log(persona2);
console.log(persona2.nacimiento())

//otra forma para acceder a las propiedades de un objeto "NO RECOMENDABLE" --asi se accede a objetos en php

// console.log(persona['nombre'])
// console.log(persona['hogar']['pais'])