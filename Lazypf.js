//Combinar programacion lezy con funcional
//Definir predicados atomicos
const esPar=n=>n%2===0;
const multiploCinco=n=>n%5===0;
//Definimos la funcion
function* filtrarNumeros(iterable,predicado){
    for(let dato of iterable){
        if(predicado(dato)){
            yield dato;
        }
    }
}
function* generarNumeros(){
    let i=0;
    while(true)yield i++;
}

//General los numeros atraves de una variable
const numerosAleatorios=generarNumeros();
const generar=filtrarNumeros(numerosAleatorios,multiploCinco);
console.log(generar.next().value);
console.log(generar.next().value);
console.log(generar.next().value);