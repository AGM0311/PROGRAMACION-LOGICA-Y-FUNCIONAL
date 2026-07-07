var historialCommits = [
  { version: 1.0, ambiente: "desarrollo" },
  { version: 1.1, ambiente: "desarrollo" },
  { version: 1.2, ambiente: "testing" },
  { version: 1.3, ambiente: "testing" },
  { version: 2.0, ambiente: "produccion" },
  { version: 2.1, ambiente: "produccion" },
  { version: 2.2, ambiente: "produccion" },
];

const esProduccion=(commit)=>commit.ambiente==="produccion";

function* generadora(iterable, predicado) {
  for (let dato of iterable) {
    if (predicado(dato)) {
      yield dato;
    }
  }
}
const generador=generadora(historialCommits,esProduccion);
const primero = generador.next().value;

console.log("Primer commit en produccion: version " + primero.version);

const n = 1000000;
const maximo = Math.ceil(Math.log(n) / Math.log(2));
console.log("Para " + n + " commits, maximo " + maximo + " evaluaciones");
