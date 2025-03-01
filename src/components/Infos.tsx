import React from "react";
import { Customer, Process } from "@/types/types";
import { fakeCustomers, fakeProcesses } from "@/mocks/data";

// Componente para exibir as informações extraídas
export default function Infos() {
  // Função para extrair o nome do cliente a partir do ID
  const getCustomerNameById = (customerId: number): string => {
    const customer = fakeCustomers.find((c) => c.id === customerId);
    return customer ? customer.name : "Cliente Não Encontrado";
  };

  // Função para contar os processos de cada cliente
  const getProcessCountByCustomerId = (customerId: number): number => {
    return fakeProcesses.filter((process) => process.customerId === customerId)
      .length;
  };

  // Função para extrair o tipo de seguro de um processo
  const getInsuranceType = (description: string): string => {
    const regex = /TIPO DE SEGURO:\s*(.*)/;
    const match = description.match(regex);
    return match ? match[1] : "Tipo de Seguro Não Encontrado";
  };

  // Função para contar a frequência de tipos de seguro
  const getInsuranceTypeCount: () => Record<string, number> = () => {
    const insuranceTypes = fakeProcesses.map((process) =>
      getInsuranceType(process.description)
    );
    return insuranceTypes.reduce((acc: any, type: string) => {
      acc[type] = (acc[type] || 0) + 1;
      return acc;
    }, {});
  };

  // Função para obter o cliente com mais processos
  const getTopCustomerByProcesses = () => {
    return fakeCustomers
      .map((customer) => ({
        ...customer,
        processCount: getProcessCountByCustomerId(customer.id),
      }))
      .sort((a, b) => b.processCount - a.processCount)[0];
  };

  const insuranceTypeCounts = getInsuranceTypeCount();
  const topCustomer = getTopCustomerByProcesses();

  return (
    <div className="w-full h-full flex-1 overflow-y-auto p-6 bg-gray-800 rounded-2xl">
      <h1 className="text-3xl font-semibold text-center mb-6">
        Informações dos Processos
      </h1>

      {/* Insights de Análise */}
      <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-2xl font-bold mb-4">Análises e Insights</h2>
        <div className="space-y-4">
          <p>
            <strong>Cliente com mais processos:</strong> {topCustomer.name} (
            {topCustomer.processCount} processos)
          </p>
          <p>
            <strong>Tipos de seguro mais comuns:</strong>
          </p>
          <ul>
            {Object.entries(insuranceTypeCounts).map(([type, count]) => (
              <li key={type}>
                {type}: {count} processos
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Exibindo os clientes e seus processos */}
      <div className="space-y-8">
        {fakeCustomers.map((customer: Customer) => {
          const processes = fakeProcesses.filter(
            (process) => process.customerId === customer.id
          );
          return (
            <div
              key={customer.id}
              className="bg-gray-900 shadow-lg rounded-lg p-6"
            >
              <div className="border-b border-gray-400 pb-4 mb-4">
                <h2 className="text-2xl font-bold text-blue-600">
                  {customer.name}
                </h2>
                <p className="text-gray-500">{customer.email}</p>
                <p className="text-gray-700 mt-2">
                  <strong>Número de processos:</strong>{" "}
                  {getProcessCountByCustomerId(customer.id)}
                </p>
              </div>

              {processes.length > 0 ? (
                <div className="space-y-4">
                  {processes.map((process: Process) => (
                    <div
                      key={process.id}
                      className="bg-gray-800 p-4 rounded-lg shadow-md"
                    >
                      <h3 className="text-xl font-semibold text-gray-800">
                        {process.name}
                      </h3>
                      <p className="text-gray-600">
                        <strong>Tipo de Seguro:</strong>{" "}
                        {getInsuranceType(process.description)}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">
                  Nenhum processo encontrado para este cliente.
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
