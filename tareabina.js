const historialCommits = [
  { version: 1.0, ambiente: "desarrollo" },
  { version: 1.1, ambiente: "desarrollo" },
  { version: 1.2, ambiente: "testing" },
  { version: 1.3, ambiente: "testing" },
  { version: 2.0, ambiente: "produccion" },
  { version: 2.1, ambiente: "produccion" },
  { version: 2.2, ambiente: "produccion" },
];

const esProduccion=(commit)=>commit.ambiente==="produccion";

const axlit=({ version })=>version;

function* generadora(iterable, predicado) {
  for (let dato of iterable) {
    if (predicado(dato)) {
      yield axlit(dato);
    }
  }
}

const gen = generadora(historialCommits, esProduccion);
console.log("Primer commit en produccion: version " + gen.next().value);

const n = 1000000;
const maximo = Math.ceil(Math.log2(n));
console.log("Para "+n+"commits,maximo"+maximo+"evaluaciones");