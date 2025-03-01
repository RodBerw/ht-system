import { fakeProcesses } from "@/mocks/data";
import { Process } from "@/types/types";
import { Card } from "@heroui/card";

export default function AddCard({
  setProcesses,
}: {
  setProcesses: React.Dispatch<React.SetStateAction<Process[]>>;
}) {
  return (
    <Card
      className={
        "w-full p-4 bg-gray-900 max-h-full border-[1px] border-gray-600 rounded-2xl text-gray-400 text-center hover:cursor-pointer hover:bg-gray-800 transition-all"
      }
      isPressable
      onPress={() =>
        setProcesses((prev) => [
          ...prev,
          { ...fakeProcesses[0], id: prev.length + 1 },
        ])
      }
    >
      Novo Processo
    </Card>
  );
}
