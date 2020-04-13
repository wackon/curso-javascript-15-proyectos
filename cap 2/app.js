//Arreglo de objetos

const autos = [
    {modelo: 'Mustang', motor: 6.2 },
    {modelo: 'Camaro', motor: 6.1 },
    {modelo: 'Challenger', motor: 6.3 },
    
];

console.log(autos)
console.log(autos[0].modelo);

console.log(autos.length)

for (let i=0;i<autos.length;i++){
    console.log(`${autos[i].modelo} ${autos[i].motor}`)
}

for (let i=0;i<autos.length;i++){
    console.log(autos[i].modelo)
}

autos[0].modelo = 'Audi';

console.log(autos)