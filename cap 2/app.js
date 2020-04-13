//Funcion que no existe

try{
    algo()
}catch(error){
    console.log(error)
}finally{
    console.log('NO le importa, ejecuta de todos modos ')
}

obtenerClientes()

function obtenerClientes (){
    console.log('Descargando ....');

    setTimeout(function (){
        console.log('completo')
    },3000);
}

