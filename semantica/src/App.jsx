import { useMemo, useState } from "react";
import { analizarCodigo } from "./lectura/lexico";

function App() {
  const [codigo, setCodigo] = useState('funcion sumar(a, b) { return a + b; }');
  
  const tokens = useMemo(() => analizarCodigo(codigo), [codigo]);
  
  const coloresTokens = {
    'palabra reservada': 'bg-orange-200 text-orange-800 border border-orange-400',
    numero: 'bg-amber-200 text-amber-800 border border-amber-400',
    operador: 'bg-green-200 text-green-800 border border-green-400',
    identificador: 'bg-blue-200 text-blue-800 border border-blue-400',
    delimitador: 'bg-purple-200 text-purple-800 border border-purple-400',
    Desconocido: 'bg-gray-200 text-gray-800 border border-gray-400',
  };

  return (
    <div className="p-8 max-w-4xl mx-auto bg-white rounded-xl shadow-lg space-y-6 mt-10">
      <header>
        <h1 className="text-2xl font-bold text-gray-800">Analizador Léxico</h1>
        <p className="text-sm text-gray-500">Programación</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col space-y-2">
          <label className="font-semibold text-gray-700">Código Fuente:</label>
          <textarea
            className="w-full h-48 p-3 font-mono border rounded-lg focus:ring-2 focus:ring-indigo-500 bg-gray-50"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
            placeholder="Escribe tu código aquí..."
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="font-semibold text-gray-700">Tokens Generados: ({tokens.length}):</label>
          <div className="w-full h-48 p-4 border rounded-lg bg-gray-900 overflow-y-auto flex flex-wrap gap-2 content-start">
            {tokens.length === 0 ? (
              <span className="text-gray-500 italic">Escribe algo...</span>
            ) : (
              tokens.map((token) => (
                <div
                  key={token.id}
                  className={`px-3 py-1 rounded-md text-xs font-mono border ${coloresTokens[token.tipo] || coloresTokens.Desconocido}`}
                  title={`Tipo: ${token.tipo}`}
                >
                  <span className="font-bold">{token.valor}</span>
                  <span className="block text-[10px] opacity-70 uppercase tracking-widest">{token.tipo}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;