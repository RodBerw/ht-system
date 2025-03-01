"use client";

import { Customer, Process } from "@/types/types";
import { useEffect, useState } from "react";
import ProcessCard from "./ProcessCard";
import { fakeProcesses } from "@/mocks/data";
import { Card, CardHeader } from "@heroui/card";
import AddCard from "./AddCard";

export default function CustomerCard({
  customer,
  setCustomers,
}: {
  customer: Customer;
  setCustomers: React.Dispatch<React.SetStateAction<Customer[]>>;
}) {
  const [userProcesses, setUserProcesses] = useState<Process[]>([]);

  // Fetch user processes
  useEffect(() => {
    setTimeout(() => {
      setUserProcesses(
        fakeProcesses.filter((process) => process.customerId === customer.id)
      );
    });
  }, []);

  return (
    <Card className="w-64 flex flex-col h-fit max-h-full bg-gray-900 border-[1px] border-gray-600 rounded-2xl text-gray-200 text-center ">
      <CardHeader className="flex justify-between text-gray-200 border-gray-600 border-b-[1px] px-6 py-4">
        <p className="font-semibold text-lg">{customer.name}</p>
        <img
          src="/delete.svg"
          alt="delete"
          className="cursor-pointer hover:scale-110 transition-all"
          onClick={() =>
            setCustomers((prev) => prev.filter((c) => c.id !== customer.id))
          }
        />
      </CardHeader>
      <div className="w-full h-full flex-1 flex flex-col p-4 gap-4">
        {/* Informações sobre a quantidade de processos */}
        <div className="flex justify-between text-sm text-gray-400 mb-2">
          <span>{userProcesses.length} Processos</span>
          <span>
            Último:{" "}
            {userProcesses.length > 0 ? userProcesses[0].name : "Nenhum"}
          </span>
        </div>

        {/* Listagem dos processos */}
        {userProcesses.length > 0 ? (
          userProcesses.map((process, index) => (
            <ProcessCard key={index} process={process} />
          ))
        ) : (
          <p className="text-gray-400">
            Sem processos associados a este cliente.
          </p>
        )}

        {/* Botão para adicionar novos processos */}
        <AddCard setProcesses={setUserProcesses} />
      </div>
    </Card>
  );
}
