import { createContext } from "react";
import { Process } from "@/types/types";

interface GlobalContextType {
  setIsModalOpen: (isOpen: boolean) => void;
  setModalProcess: (process: Process) => void;
}

export const GlobalContext = createContext<GlobalContextType | null>(null);
