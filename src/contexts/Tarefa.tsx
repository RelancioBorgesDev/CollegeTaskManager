import { createContext } from "react";
import api from "../services/api";
import { IFormInput, TarefasContextProps } from "../types/Formulario";
import { ITarefaContext } from "../types/TarefaContext";


export const TarefaContext = createContext<ITarefaContext>({} as ITarefaContext);

export function TarefaContextProvider ({ children }: TarefasContextProps){
    const criarTarefa = (data: IFormInput) => {
        let tarefa =  {
            id: Math.floor(Math.random() * 65536) - 32768,
            materia: data.materia,
            dataPedido: data.dataPedido,
            dataEntrega: data.dataEntrega,
            tarefa: data.tarefa,
          };

          api.post('/tarefas', tarefa)
    }
    return (
        <TarefaContext.Provider value={{criarTarefa}}>
            {children}
        </TarefaContext.Provider>
    )
       
    
}