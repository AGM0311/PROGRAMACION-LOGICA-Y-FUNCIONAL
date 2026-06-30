/* const peeticionesHttp=Object.freeze([
   { id: "REQ-01", metodo: "GET",  ipOrigen: "192.168.1.50", latenciaMs: 45,   tamanioPayloadKb: 2,    
payload: "SELECT * FROM users" }, 
  { id: "REQ-02", metodo: "POST", ipOrigen: "185.220.10.1", latenciaMs: 2500, tamanioPayloadKb: 
1500, payload: "DROP TABLE users;--" },  
  { id: "REQ-03", metodo: "GET",  ipOrigen: "192.168.1.55", latenciaMs: 12,   tamanioPayloadKb: 1,    
payload: "ping" }, 
  { id: "REQ-04", metodo: "POST", ipOrigen: "185.220.10.1", latenciaMs: 1800, tamanioPayloadKb: 
950,  payload: "normal_profle_update" }, 
  { id: "REQ-05", metodo: "POST", ipOrigen: "192.168.1.70", latenciaMs: 3100, tamanioPayloadKb: 
1200, payload: "upload_heavy_image" },    
  { id: "REQ-06", metodo: "GET",  ipOrigen: "172.16.25.40", latenciaMs: 50,   tamanioPayloadKb: 
500,  payload: "exec MaliciousScript" } 
]);
const esMetodoEscritura=x=>x.metodo==="POST";
const esLatenciaAlta=x=>x.latenciaMs>=2000;
const esPayloadSospechoso=x=>x.payload.toLowerCase().includes("drop") || x.payload.toLowerCase().includes("select")
 || x.payload.toLowerCase().includes("MaliciousScript");
const detectarAmenazaPotencial=x=>esMetodoEscritura(x) && (esLatenciaAlta(x) || esPayloadSospechoso(x)); 


function* analizadorSeguridadLazy(flujo,regla){
    for(let dato of flujo){
        //console.log(dato);
        if(regla(dato)){
            yield dato;
        }
    }
}

const consult=analizadorSeguridadLazy(peeticionesHttp,detectarAmenazaPotencial);
//console.log(consult.next().value);
//console.log(consult.next().value);

const primeros2 = [
    consult.next().value,
    consult.next().value
];

console.log("Promedio:",primeros2.reduce((a, b) => a + b.tamanioPayloadKb, 0) / primeros2.length);
 */


const ordenesEnvio=Object.freeze([ 
  { id: "ORD-101", tpo: "estandar", destno: "Tabasco", pesoKg: 4,   distanciaKm: 8,   asegurado: 
false }, 
  { id: "ORD-102", tpo: "express",  destno: "Veracruz", pesoKg: 22,  distanciaKm: 120, asegurado: 
true },   
  { id: "ORD-103", tpo: "estandar", destno: "Tabasco", pesoKg: 1.5, distanciaKm: 15,  asegurado: 
false }, 
  { id: "ORD-104", tpo: "express",  destno: "Tabasco", pesoKg: 5,   distanciaKm: 3,   asegurado: false 
}, 
  { id: "ORD-105", tpo: "express",  destno: "Yucatán",  pesoKg: 18,  distanciaKm: 250, asegurado: 
false },  
  { id: "ORD-106", tpo: "express",  destno: "Chiapas",  pesoKg: 35,  distanciaKm: 190, asegurado: 
true }    
]);

const esEnvioExpress=x=>x.tpo==="express";
const esPaquetePesado=x=>x.pesoKg>=15;
const esRutaForanea=x=>x.destno!=="Tabasco";
const esDespachoPrioritario=x=>esEnvioExpress(x) && (esPaquetePesado(x) || esRutaForanea(x));

function* despachadorOrdenesLazy(flujo,regla){
    for(let dato of flujo){
        if(regla(dato)){
            yield dato;
        }
    }
}
const consult=despachadorOrdenesLazy(ordenesEnvio,esDespachoPrioritario);
const primeros2 = [
    consult.next().value,
    consult.next().value
];

console.log("Promedio:",primeros2.reduce((a, b) => a + b.distanciaKm, 0) / primeros2.length);