const llenadoTanque=object.freeze([
    "01-Magna",
    "02-Premium",
    "03-Diesel",
    "04-Premium",
    "05-Premium",
]);
const esPremium=id=>id.include("Premium");
//Definir la funcion generadora
function* filtrarCombustible(iterable,predicado){
    for(let dato of iterable){
        console.log(dato);
        if(predicado(dato)){
            yield dato;
        }
    }
}
function* generarCombustible(){
    let i=0;
    while(true)yield llenadoTanque[i++];
}
