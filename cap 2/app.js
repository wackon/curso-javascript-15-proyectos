



const producto1 = 'pizza',
      precio1 = 30,
      producto2 = 'hamburguesa',
      precio2 = 40

      //----------------Forma vieja ----------------------------

//       let html;

//       html = '<ul>'+
//              '<li>Orden :' + producto1 + '</li>' +
//              '<li>Precio :' + precio1 + '</li>' + 
//              '<li>Orden :' + producto2 + '</li>' +
//              '<li>Precio :' + precio2 + '</li>' + 
//              '<li>Total:' + (precio1 + precio2) + '</li>' + 

//              '</ul>';

//   document.getElementById('app').innerHTML = html;


//--------------------Forma nueva con templates literals---------------------

let html;

html = `
    <ul> 
        <li>Orden : ${producto1} </li>
        <li>Precio : ${precio1} </li>
        <li>Orden: ${producto2} </li>
        <li>Precio : ${precio2} </li>
        <li>Precio : ${total (precio1,precio2)} </li>
        
    </ul>`;

    function total (precio1,precio2){
        return (precio1+precio2)
    }

document.getElementById('app').innerHTML = html;


  