//for loops

// for (let i = 0; i <100; i ++){
// console.log(`Numero: ${i}`)
// }
//-----------------------------------------------------

/*
for (let i = 0; i <10; i ++){
    if(i==5)
    {console.log('voy en el cinco')}        //imprime voy en el cinco y a continuación el número 5
    console.log(`${i}`)
    }

    */
   // ------------------------------------------------------
    //------imprime el voy en el cinco y luego el numero 6
 /*   
   for (let i = 0; i <10; i ++){
    if(i==5){
        console.log('voy en el cinco');    
        continue;   
        }
    console.log(`${i}`)
    }
*/
//--------------------------------------------------------
        //--------------cambiando el continue por el break  solo imprime hasta voy en el cinco y luego sale del for

    // for (let i = 0; i <10; i ++){
    //     if(i==5){
    //         console.log('voy en el cinco');    
    //         break;   
    //         }
    //     console.log(`${i}`)
    //     }


const arregloProductos = [`Camisa`,`Boletos`,`Guitarra`,`Disco`]        

console.log(arregloProductos.length)

for (let i = 0 ; i < arregloProductos.length ; i ++){
         console.log(`Tu producto  ${arregloProductos[i]} fue agregado`)
       
    } 