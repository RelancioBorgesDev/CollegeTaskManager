import { createContext } from "react";
import api from "../services/api";
import { IFormInput, TarefasContextProps } from "../types/Formulario";
import { ITarefaContext } from "../types/TarefaContext";

export const TarefaContext = createContext<ITarefaContext>(
  {} as ITarefaContext
);

export function TarefaContextProvider({ children }: TarefasContextProps) {
  const randomNumber = (max: number, min: number) =>
    Math.floor(Math.random() * (max - min) + min);

  const criarTarefa = async (data: IFormInput) => {
    let tarefa = {
      id: randomNumber(1, Infinity),
      materia: data.materia,
      dataPedido: data.dataPedido,
      dataEntrega: data.dataEntrega,
      tarefa: data.tarefa,
    };

    await api.post("/tarefas", tarefa);
  };
  return (
    <TarefaContext.Provider value={{ criarTarefa }}>
      {children}
    </TarefaContext.Provider>
  );
}
