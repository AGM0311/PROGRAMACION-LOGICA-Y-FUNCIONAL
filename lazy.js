/* const lecturasSensor = Object.freeze([ 
  { id: 1, tempC: 150, estado: "estable" }, 
  { id: 2, tempC: 850, estado: "estable" },   
  { id: 3, tempC: 920, estado: "mantenimiento" },  
  { id: 4, tempC: 120, estado: "estable" }, 
  { id: 5, tempC: 1100, estado: "estable" },  
  { id: 6, tempC: 1300, estado: "critico" }   
]); 

const convertirafar=p=>p.tempC * 9 / 5 + 32;
const anomalias=p=>p.estado==="critico";
//Definir la funcion generadora
function* generadora(iterable,predicado){
    for(let dato of iterable){
        //console.log(dato);
        if(predicado(dato)){
            yield {id: dato.id,
                tempC: dato.tempC,
                tempF: convertirafar(dato),
                estado: dato.estado
        }
    }}
}
//Definimos la consult
const consul=generadora(lecturasSensor,anomalias);
console.log(consul.next().value);
console.log(consul.next().value); */

/* const chunksVideo = Object.freeze([ 
  { n: 1, sizeMb: 4,  codec: "h264" }, 
  { n: 2, sizeMb: 25, codec: "raw" },    
  { n: 3, sizeMb: 12, codec: "h265" }, 
  { n: 4, sizeMb: 40, codec: "raw" },    
  { n: 5, sizeMb: 50, codec: "webm" }   
]); 

const pesado=p=>p.sizeMb>=20 && p.codec==="raw";
const reducirCalidad=p=>({...p,sizeMb:p.sizeMb / 2
});

function* generadora(iterable,predicado){
    for(let dato of iterable){
        //console.log(dato);
        if(predicado(dato)){
            yield reducirCalidad(dato);
        
    }}
}
const consul=generadora(chunksVideo,pesado);
console.log(consul.next().value);
console.log(consul.next().value); 
*/

const aduanaPuerto = Object.freeze([ 
  { manifesto: "C-01", destno: "Roterdam", pesoToneladas: 12 },  
  { manifesto: "C-02", destno: "Tokio",     pesoToneladas: 45 }, 
  { manifesto: "C-03", destno: "Roterdam", pesoToneladas: 60 },  
  { manifesto: "C-04", destno: "Roterdam", pesoToneladas: 18 },  
  { manifesto: "C-05", destno: "Lisboa",    pesoToneladas: 22 }   
]); 

const pesado=p=>p.pesoToneladas>=15 && p.destno==="Roterdam";


function* generadora(iterable,predicado){
    for(let dato of iterable){
        //console.log(dato);
        if(predicado(dato)){
            yield dato;
        
    }}
}
const consul=generadora(aduanaPuerto,pesado);
const primeros2 = [
    consul.next().value,
    consul.next().value
];

//Definimos la consult

console.log(primeros2.reduce((a, b) => a + b.pesoToneladas, 0));
//console.log(consul.next().value);