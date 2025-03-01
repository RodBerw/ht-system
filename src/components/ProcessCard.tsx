"use client";

import { GlobalContext } from "@/app/page";
import { Process } from "@/types/types";
import { Card } from "@heroui/card";
import { useContext } from "react";

export default function ProcessCard({ process }: { process: Process }) {
  const globalContext = useContext(GlobalContext);

  return (
    <Card
      isBlurred
      isHoverable
      isPressable
      className="w-full p-4 bg-gray-800 opacity-70 rounded-2xl backdrop-blur-lg hover:scale-105 hover:bg-gray-700 transition-all"
      onPress={() => {
        globalContext?.setModalProcess(process),
          globalContext?.setIsModalOpen(true);
      }}
    >
      <p>{process.name}</p>
    </Card>
  );
}
