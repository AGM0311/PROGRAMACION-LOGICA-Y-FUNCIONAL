const hechos=[
    {relacion:"es_humano",
        sujeto:"juan"},
        {relacion:"es_humano",
        sujeto:"daniela"},
        {relacion:"estudiante",
        sujeto:"mario"},
        {relacion:"estudiante",
        sujeto:"yesi"},
        {relacion:"perro",
        sujeto:"guapo"},
]
//programacion imperatvia
const nuevoArreglo=[];
for(let i=0;i<hechos.length;i++){
    if(hechos[i].
        relacion==="estudiante"){
            nuevoArreglo.push(hechos[i])
        }
}
console.log(nuevoArreglo);
//programacion funcional
const datosEstudiantes=hechos.filter(estudiante=>estudiante.relacion==="estudiante");
console.log(datosEstudiantes);

const datEestudiante=hechos.find(est=>est.relacion==="estudiante");
console.log(datEestudiante);

const datEst=hechos.some(es=>es.relacion==="estudiante")
console.log(datEst);

const nuevosDatos=hechos.map(data=>data.relacion)
console.log(nuevosDatos);
//Reglas (Que hara nuestra funcion)
function EsMortal(sujeto){
    const esHumano=hechos.some(humano=>humano.relacion==="es_humano" && humano.sujeto===sujeto)
    return esHumano;
}
console.log(EsMortal("daniela"));
console.log(EsMortal("guapo"));
console.log(EsMortal("yesi"));