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


//Generar numeros primos imperativa
const primoNumero=num=>{
    if(num<=2)return false;
    for(let i=2;i<Math.sqrt(num);i++){
        if(num%i===0)return false;
    }
    return true;
};
//Funcion lazy
function* generarPrimos(){
    let eval=2;
    while(true){
        if(primoNumero(eval)){
            yield eval;
        }
        eval++;
    }
}
const numerosPrimos=generarPrimos();
console.log("Primer número primo: " + numerosPrimos.next().value);
console.log("Segundo número primo: " + numerosPrimos.next().value);
console.log("Tercer número primo: " + numerosPrimos.next().value);
console.log("Cuarto número primo: " + numerosPrimos.next().value);
