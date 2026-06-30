/* const llenadoTanque=Object.freeze([
    "01-Magna",
    "02-Premium",
    "04-Premium",
    "05-Premium",
]);
const esPremium=id=>id.includes("Premium");
//Definir la funcion generadora
function* filtrarCombustible(iterable,predicado){
    for(let dato of iterable){
        //console.log(dato);
        if(predicado(dato)){
            yield dato;
        }
    }
}
//Definimos la consult
const bomba=filtrarCombustible(llenadoTanque,esPremium);
console.log(bomba.next().value);
console.log(bomba.next().value);
console.log(bomba.next().value);     */

/* const trans=Object.freeze([
  { id: 101, tpo: 'deposito', monto: 60000, pais: 'México' }, 
  { id: 102, tpo: 'retro',   monto: 15000, pais: 'Colombia' },  
  { id: 103, tpo: 'retro',   monto: 12000, pais: 'México' }, 
  { id: 104, tpo: 'retro',   monto: 55000, pais: 'México' },    
  { id: 105, tpo: 'deposito', monto: 90000, pais: 'Francia' }, 
  { id: 106, tpo: 'retro',   monto: 75000, pais: 'Espana' } 
]);
const esRetiro=t=>t.tpo==="retro";
const esMontoSospechoso=t=>t.monto>= 50000;
const esZonaDeRiesgo=t=>t.pais!=="México";
const alertafraude=t=>esRetiro(t) && (esMontoSospechoso(t) || esZonaDeRiesgo(t));
//Definir la funcion generadora
function* generartrans(iterable,predicado){
    for(let dato of iterable){
        if(predicado(dato)){
            yield dato;
        }
    }
}
//Definimos la consult
const consul=generartrans(trans,alertafraude);
console.log(consul.next().value);
console.log(consul.next().value);
 */
/* const aspirantes=Object.freeze([
   { nombre: 'Luis',  examen: 90, entrevista: 80, estudioSocioeconomico: true },   
  { nombre: 'Elena', examen: 70, entrevista: 90, estudioSocioeconomico: true },   
  { nombre: 'Pedro', examen: 95, entrevista: 90, estudioSocioeconomico: false },  
  { nombre: 'María', examen: 85, entrevista: 95, estudioSocioeconomico: true },   
  { nombre: 'Iván',  examen: 90, entrevista: 90, estudioSocioeconomico: true } 
]);
const punt=aspirantes.map(aspirante=>({...aspirante,puntajeFinal: aspirante.examen*0.7+aspirante.entrevista*0.3}));
const calificaParaBeca=aspirante=>aspirante.estudioSocioeconomico && (aspirante.puntajeFinal >= 85);
//Definir la funcion generadora
function* generarAspirantes(iterable,predicado){
    for(let dato of iterable){
        //console.log(dato);
        if(predicado(dato)){
            yield dato;
        }
    }
}
const consul=generarAspirantes(punt,calificaParaBeca);
const primeros2 = [
    consul.next().value,
    consul.next().value
];

//Definimos la consult

console.log(primeros2.reduce((a, b) => a + b.puntajeFinal, 0) / primeros2.length);
console.log(primeros2.reduce((a, b) => a + b.puntajeFinal, 0) / primeros2.length);
//console.log(consul.next().value); */

const paquetes=Object.freeze([
  { tracking: 'ZA1', estado: 'Tabasco', peso: 20 }, 
  { tracking: 'ZA2', estado: 'Veracruz', peso: 18 }, 
  { tracking: 'ZA3', estado: 'Chiapas', peso: 5 }, 
  { tracking: 'ZA4', estado: 'Yucatán',  peso: 25 },  
  { tracking: 'ZA5', estado: 'Tabasco', peso: 10 }, 
  { tracking: 'ZA6', estado: 'Oaxaca',   peso: 30 } 

]);
const esDestinoLocal=p=>p.estado==="Tabasco";
const esPesado=p=>p.peso>=15;
const envioPrioritarioLocal=p=>!esDestinoLocal(p) && esPesado(p);
//Definir la funcion generadora
function* pere(iterable,predicado){
    for(let dato of iterable){
        //console.log(dato);
        if(predicado(dato)){
            yield dato;
        }
    }
}
//Definimos la consult
const consul=pere(paquetes,envioPrioritarioLocal);
console.log(consul.next().value);
console.log(consul.next().value);
