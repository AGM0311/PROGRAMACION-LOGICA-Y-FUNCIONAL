array=[{ ttulo: 'React Avanzado', categoria: 'Desarrollo', esGrats: false, tieneCertifcado: true },  
{ ttulo: 'Introducción a UX/UI', categoria: 'Diseño', esGrats: true, tieneCertifcado: false },  
{ ttulo: 'Node.js y MongoDB', categoria: 'Desarrollo', esGrats: true, tieneCertifcado: true },  
{ ttulo: 'Figma para Principiantes', categoria: 'Diseño', esGrats: false, tieneCertifcado: false}
]
//const datosEstudiantes=hechos.filter(estudiante=>estudiante.relacion==="estudiante");
//console.log(datosEstudiantes);

/*const cursosd=array.filter(curso=>curso.categoria==="Desarrollo" && curso.tieneCertifcado===true)
console.log(cursosd);

const curos=array.filter(curso=>curso.esGrats===true && curso.categoria==="Diseño")
console.log(curos);

const list=array.filter(curso=>curso.tieneCertifcado===false)
console.log(list);

const cond=array.filter(curso=>curso.categoria==="Desarrollo" && curso.esGrats=== true || 
    curso.tieneCertifcado===true)
console.log(cond);*/



const hechos=[
  { padre: 'Juan', hijo: 'Luis' }, 
  { padre: 'Juan', hijo: 'Pedro' }, 
  { padre: 'Abraham', hijo: 'Juan' }
];

//const hermanos=hechos.filter(relacion=>relacion.padre==="Juan")
//console.log(hermanos);


function abuelo(a,c){
  return a=="Abraham" && c=="Luis";
}

console.log(abuelo("Abraham","Luis"));

// ¿Es cierto que Abraham es padre de Juan?
console.log(hechos.some(abr => abr.padre=="Abraham" && abr.hijo=="Juan"));

// ¿Quién es el padre de Luis?
console.log(hechos.filter(luis=>luis.hijo=="Luis").map(luis=>luis.padre));

// ¿Quiénes son los hijos de Juan?
console.log(hechos.filter(juan=>juan.padre=="Juan").map(juan=>juan.hijo));