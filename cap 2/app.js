//FOR EACH --RECORRER UN ARREGLO

const pendientes = ["Tarea","Comer", "Proyecto","Aprender Javascript"];

// for

// for (let i = 0 ; i< pendientes.length ; i++){
//     console.log(pendientes[i])
// }
// console.log(pendientes);

//---FOREACH

// pendientes.forEach(function (pendiente, index) {
//     console.log(`${index} : ${pendiente}`)
// })
// console.log(pendientes);

//MAP PARA RECORRER UN ARREGLO DE OBJETOS

const carrito = [
    {id: 1, producto : 'libro'},
    {id: 2, producto : 'Camisa'},
    {id: 3, producto : 'Guitarra'},
    {id: 4, producto : 'Disco'},
]

console.log(carrito)

const nombreDelProducto = carrito.map(function (carrito){
    return carrito.producto
})


console.log(nombreDelProducto)


const automovil = {
    modelo : 'Camaro',
    motor : '6.1',
    año : 1969,
    marca : 'Chevrolet'
}

for(let auto in automovil){
    console.log(`${auto} : ${automovil[auto]}`)
}


console.log(automovil)