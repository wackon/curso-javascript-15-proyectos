//Scopes

var a = 'a';
let b = 'b';
const c = 'c';

//Scope

function functionscope() {
    var a = 'A';
    let b = 'B';
    const c = 'C';
    console.log('FUNCTION :' + a,b,c);
}   
functionscope() 
//scope de bloque
if (true){
  
        var a = 'AA';
        let b = 'BB';
        const c = 'CC';
        console.log('FUNCTION :' + a,b,c);
}  
//for
for(var a =0; a<10; a++){
    console.log(a)
} 









console.log('GLOBALES:' + a,b,c)