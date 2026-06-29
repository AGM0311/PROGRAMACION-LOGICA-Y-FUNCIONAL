/*const datos={
nombre:"Dany",
edad:40,
ciudad:"Balancan",
intereses:["Reacts","JS"]

};

function deepfreeze(obj){
    if(obj===null || typeof obj !== 'object'|| Object.isFrozen(obj)){
        return obj;
    }
    //Obtener todo el objeto
    const propiedadesObjeto=Object.getOwnPropertyNames(obj);
    //Recorrer cada una de las propiedades
    for(let nombres of propiedadesObjeto){
        const propiedadHijo=obj[nombres]
        //Aplicamos la funcion recursiva
        if(propiedadHijo && typeof propiedadHijo==='object'){
            deepfreeze(propiedadHijo)
        }
    }
    //Congelamos todo el objeto con sus hijos
    return Object.freeze(obj);
    
}
//Pasar objetos a la funcion recursiva
const datosInmutables=deepfreeze(datos);
datos.nombre="Carlos";
console.log(datos.nombre);




//Ocultar propiedades
Object.defineProperty(datos,"edad",{enumerable:false});
console.log(Object.keys(datos));
console.log(Object.getOwnPropertyNames(datos));*/


/*const primoNumero = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

// Función lazy (generator)
function* generarPrimos() {
    let eval = 2;
    while (true) {
        if (primoNumero(eval)) {
            yield eval;
        }
        eval++;
    }
}

const numerosPrimos = generarPrimos();

console.log("Primer número primo: " + numerosPrimos.next().value);
console.log("Segundo número primo: " + numerosPrimos.next().value);
console.log("Tercer número primo: " + numerosPrimos.next().value);
console.log("Cuarto número primo: " + numerosPrimos.next().value);*/


/*let contador = 1;

function obtenerTurno() {
    const turno = `Turno ${contador}`;
    contador++;
    return turno;
}
console.log(obtenerTurno());
console.log(obtenerTurno());

function* obtenerTurnoY() {
    let contador = 1;
    while (true) {
        yield `Turno ${contador}`;
        contador++;
    }
}

const cajero = obtenerTurnoY();

console.log(cajero.next().value);
console.log(cajero.next().value);
console.log(cajero.next().value);
console.log(cajero.next().value);
//Procesador de palabras
function procesadorPalabras(frase) {
    const palabras = frase.split(" ");
    const resultado = [];
    for (let palabra of palabras) {
        console.log(`Procesando palabra: ${palabra}`);
        resultado.push(palabra.toUpperCase());
    }
    return resultado;
}
const palabrasEscritas = procesadorPalabras("Programacion con JS");
console.log('Resultado final: ', palabrasEscritas[0]);

function* procesarDatos(frase) {
    const palabras = frase.split(" ");
    for (let palabra of palabras) {
        console.log(`Procesando palabra: ${palabra}`);
        yield palabra.toUpperCase();
    }
}

const procesador = procesarDatos("Programacion con JS");
console.log('Resultado 1: ', procesador.next().value);
console.log('Resultado 2: ', procesador.next().value);
console.log('Resultado 3: ', procesador.next().value);*/

function* generalds(ides) {
    const genes = ides.split(" ");
    for (let gene of genes) {
        //console.log(`Procesando gen: ${gene}`);
        yield gene;
    }
}
const procesador = generalds("1 2 3 4 5");
console.log('Resultado 1: ', procesador.next().value);
console.log('Resultado 2: ', procesador.next().value);
console.log('Resultado 3: ', procesador.next().value);
console.log('Resultado 4: ', procesador.next().value);
console.log('Resultado 5: ', procesador.next().value);


function* dbPosts(posts) {
    const genes = posts.split(" ");
    for (let gene of genes) {
        //console.log(`Procesando gen: ${gene}`);
        yield gene;
    }
}

const procesadorPosts = dbPosts("post1 post2 post3 post4 post5");
console.log('Resultado 1: ', procesadorPosts.next().value);
console.log('Resultado 2: ', procesadorPosts.next().value);


function* logsServidor(logs) {
    const genes = logs.split(" ");
    for (let gene of genes) {
        //console.log(`Procesando gen: ${gene}`);
        yield gene;
    }
}

const procesadorLogs = logsServidor("200 OK 200 OK 500 ERROR 200 OK 500 ERRO 404 NOT FOUND");
console.log('Resultado 1: ', procesadorLogs.next().value);
console.log('Resultado 2: ', procesadorLogs.next().value);



function* serieFibonacciEager(limite) {
    const genes = limite.split(" ");
    for (let gene of genes) {
        //console.log(`Procesando gen: ${gene}`);
        yield gene;
    }
}
const procesadorFibonacci = serieFibonacciEager("0 1 1 2 3 5 8 13 21 34");
console.log('Resultado 1: ', procesadorFibonacci.next().value);
console.log('Resultado 2: ', procesadorFibonacci.next().value);


function* preciosAlmacen(alma) {
    const genes = alma.split(" ");
    for (let gene of genes) {
        //console.log(`Procesando gen: ${gene}`);
        yield gene;
    }
}
const procesadorPrecios = preciosAlmacen("100 200 300 400 500");
console.log('Resultado 1: ', procesadorPrecios.next().value * 1.16);
console.log('Resultado 2: ', procesadorPrecios.next().value * 1.16);
const procesador 