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



/*const hechos=[
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
console.log(hechos.filter(juan=>juan.padre=="Juan").map(juan=>juan.hijo));*/

/*const hechos=[
  { nombre: 'Ana', edad: 25, rol: 'admin', activo: true },
  { nombre: 'Carlos', edad: 17, rol: 'user', activo: true },
  { nombre: 'Beto', edad: 30, rol: 'user', activo: false }
];
//reglas
const cuentadeshabilitada = usuario => !usuario.activo;
const esmayor=usuario=>usuario.edad>=18 && usuario.activo===true;
const usuariosespeciales=usuario=>usuario.rol==="admin" && usuario.edad<18;
const usuariosedit=usuario=>usuario.activo===true && usuario.rol==="editor" ||usuario.edad>=18;
//consultas
/*console.log("cuentas deshabilitadas")
console.log(hechos.filter(cuentadeshabilitada));
console.log("es mayor")
console.log(hechos.filter(esmayor));
console.log("usuarios especiales")
console.log(hechos.filter(usuariosespeciales));
console.log("usuarios que editan")
console.log(hechos.filter(usuariosedit));*/

const hechos=[
  { nombre: 'Luis', historialLimpio: true, ingresosEstables: true },
 { nombre: 'María', historialLimpio: true, ingresosEstables: false } ,
  { nombre: 'Jorge', historialLimpio: false, ingresosEstables: true }
];

//reglas
const tarjetablack=cliente=>cliente.historialLimpio===true && cliente.ingresosEstables===true;
const apoyo=cliente=>cliente.historialLimpio===false || cliente.ingresosEstables===false;
const reestruc=cliente=>cliente.ingresosEstables===true && cliente.historialLimpio===false;
const riesgo=cliente=>cliente.historialLimpio===false && cliente.ingresosEstables===false;
const certificacion=cliente=>!(cliente.historialLimpio===false && cliente.ingresosEstables===false);


console.log("tarjeta black"),
console.log(hechos.filter(tarjetablack));
console.log("apoyo"),
console.log(hechos.filter(apoyo));
console.log("reestructuración"),
console.log(hechos.filter(reestruc));
console.log("riesgo"),
console.log(hechos.some(riesgo));
console.log("certificación"),
console.log(hechos.every(certificacion)); 