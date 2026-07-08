export const palabraClave = (texto) => {
  return ['if', 'for', 'else', 'funcion', 'return', 'while', 'break', 'continue', 'var', 'let', 'const', 'verdadero', 'falso', 'nulo'].includes(texto);
};

export const esNumero = (texto) => /^[0-9]+$/.test(texto);

export const esOperador = (texto) => ['=', '*', '+', '-', '/', '<', '>', '!', '==', '!=', '<=', '>=', '&&', '||'].includes(texto);

export const esTexto = (texto) => /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(texto);

export const esDelimitador = (texto) => ['(', ')', '{', '}', '[', ']', ';', ',', ':', '.'].includes(texto);

export const analizarCodigo = (codigoFuente) => {
  if (!codigoFuente) return [];
  
  const revisor = codigoFuente.match(/[a-zA-Z_][a-zA-Z0-9_]*|[0-9]+|==|!=|<=|>=|&&|\|\||[-+=*/<>!();,{}[\]:.]/g) || [];
  
  return revisor.map((pieza, index) => {
    let tipo = 'Desconocido';
    if (palabraClave(pieza)) tipo = "palabra reservada";
    else if (esOperador(pieza)) tipo = "operador";
    else if (esDelimitador(pieza)) tipo = "delimitador";
    else if (esNumero(pieza)) tipo = "numero";
    else if (esTexto(pieza)) tipo = "identificador";
    
    return {
      id: index,
      valor: pieza,
      tipo: tipo,
    };
  });
};