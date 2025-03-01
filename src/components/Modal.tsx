import { GlobalContext } from "@/app/page";
import { Process } from "@/types/types";
import { useContext } from "react";

export default function Modal({ process }: { process: Process }) {
  const globalContext = useContext(GlobalContext);

  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-black/50 backdrop-blur-md backdrop-brightness-90 px-6 py-12"
      onClick={(e) => {
        e.stopPropagation();
        globalContext?.setIsModalOpen(false);
      }}
      style={{ animation: "fade-in 0.3s ease-in-out" }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-3xl h-full flex flex-col bg-gray-800 text-white shadow-xl rounded-2xl p-8 border border-gray-700 relative"
      >
        {/* Botão de Fechar */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 transition-colors cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            globalContext?.setIsModalOpen(false);
          }}
        >
          ✖
        </button>

        {/* Conteúdo do Modal */}
        <div className="flex h-full flex-col gap-6">
          {/* Título do Processo */}
          <h2 className="text-2xl font-semibold text-center">{process.name}</h2>

          {/* Descrição do Processo */}
          <div className="w-full bg-gray-200 relative flex-1 rounded-xl overflow-y-auto">
            {/* Título fixo dentro da área de rolagem */}
            <div className="w-full text-lg px-6 py-4 font-semibold mb-2 text-gray-900 bg-gray-300 sticky top-0">
              Descrição do Processo
            </div>
            <pre className="w-full p-6 whitespace-pre-wrap break-words overflow-y-auto text-gray-900">
              {process.description}
            </pre>
          </div>

          {/* Detalhes do Processo */}
          <div className="bg-gray-700 p-6 rounded-xl">
            <h3 className="text-lg font-semibold mb-2">Detalhes Adicionais</h3>
            <ul className="list-none">
              <li>
                <strong>Status:</strong> Em andamento
              </li>
              <li>
                <strong>Data de Início:</strong> 01/01/2025
              </li>
              <li>
                <strong>Data de Término:</strong> 31/12/2025
              </li>
              <li>
                <strong>Cliente:</strong> João da Silva
              </li>
              <li>
                <strong>Valor:</strong> R$ 10.000,00
              </li>
            </ul>
          </div>

          {/* Ações */}
          <div className="flex justify-end gap-4 mt-6">
            <button
              className="px-6 py-2 bg-cyan-900 rounded-lg text-white hover:bg-cyan-700 transition-colors hover:cursor-pointer"
              onClick={() => alert("Aprovar processo")}
            >
              Aprovar
            </button>
            <button
              className="px-6 py-2 bg-red-900 rounded-lg text-white hover:bg-red-700 transition-colors hover:cursor-pointer"
              onClick={() => alert("Rejeitar processo")}
            >
              Rejeitar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
