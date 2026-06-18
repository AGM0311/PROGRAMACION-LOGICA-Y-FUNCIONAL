const servicios=[
  {
    id:1,
    nombre:'Autenticación',
    zona:'us-east',
    consultasPorMinuto:12000,
    activo:true,
    tecnologias:['Node','Redis']
  },
  {
    id:2,
    nombre:'Procesamiento Pagos',
    zona:'us-west',
    consultasPorMinuto:4500,
    activo:true,
    tecnologias:['Java', 'Spring']
  },
  {
    id:3,
    nombre:'Recomendaciones AI',
    zona:'us-east',
    consultasPorMinuto:25000,
    activo:false,
    tecnologias:['Python','TensorFlow']
  },
  {
    id:4,
    nombre:'Notificaciones',
    zona:'eu-central',
    consultasPorMinuto:8500,
    activo:true,
    tecnologias:['Node','RabbitMQ']
  },
  {
    id:5,
    nombre:'Reportes Históricos',
    zona:'us-west',
    consultasPorMinuto:500,
    activo:false,
    tecnologias:['Python','MongoDB']
  }];

  //rrglas
  const estaActivo=servicio=>servicio.activo===true;
  const esZonaUS=servicio=>servicio.zona==="us-west" || servicio.zona==="us-east";
  const esAltaCarga=servicio=>servicio.consultasPorMinuto>=10000;
  const usaNode=servicio=>servicio.tecnologias.includes("Node");
  const requiereMantenimientoUrgente=servicio=>servicio.activo===false && esAltaCarga(servicio);
  const esServicioCriticoUS=servicio=>estaActivo(servicio) && (esZonaUS(servicio) || esAltaCarga(servicio));
  const migrarACloudflare=servicio=>esZonaUS(servicio) && usaNode(servicio) && !esAltaCarga(servicio);
  
  //consultas
console.log("servicios criticos:");
console.log(servicios.filter(esServicioCriticoUS).map(servicio=>servicio.nombre));

console.log("servicios que requieren mantenimiento urgente:");
console.log(servicios.filter(requiereMantenimientoUrgente).map(servicio=>servicio.nombre));

console.log("total de consultas por minuto de servicios activos:");
console.log(servicios.filter(estaActivo).reduce((total,servicio)=>total+servicio.consultasPorMinuto,0));