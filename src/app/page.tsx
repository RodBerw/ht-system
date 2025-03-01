"use client";

import { Customer, Process } from "@/types/types";
import { createContext, useEffect, useState } from "react";
import { fakeCustomers } from "../mocks/data";
import CustomerCard from "@/components/CustomerCard";
import Modal from "@/components/Modal";
import Infos from "@/components/Infos";
import { GlobalContext } from "@/context/GlobalContext";

export default function Home() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [modalProcess, setModalProcess] = useState<Process>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Estado para controle de carregamento

  useEffect(() => {
    setTimeout(() => {
      setCustomers(fakeCustomers);
      setIsLoading(false); // Dados carregados
    }, 1000); // Mock de 1 segundo de carregamento
  }, []);

  return (
    <GlobalContext.Provider value={{ setIsModalOpen, setModalProcess }}>
      <div className="h-full w-full p-8 flex flex-col gap-6">
        <h1 className="text-3xl font-semibold text-center text-gray-200">
          Bem-vindo à nossa plataforma de Processos de Seguros
        </h1>
        <p className="text-center text-lg text-gray-400">
          Confira os clientes e seus processos abaixo.
        </p>

        {/* Indicador de Carregamento */}
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin border-t-4 border-blue-500 border-solid w-16 h-16 rounded-full"></div>
          </div>
        ) : (
          <div className="w-full h-[500px] flex justify-between items-center">
            <div className="flex gap-4 flex-1 pr-12">
              {customers.map((customer) => (
                <CustomerCard
                  key={customer.id}
                  customer={customer}
                  setCustomers={setCustomers}
                />
              ))}
            </div>
            <Infos />
          </div>
        )}

        {/* Exibição do Modal */}
        {isModalOpen && <Modal process={modalProcess!} />}
      </div>
    </GlobalContext.Provider>
  );
}
