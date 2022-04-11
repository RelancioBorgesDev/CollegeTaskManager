import { useContext } from "react"
import { TarefaContext } from "../contexts/Tarefa"

export const useTarefa = () =>{
    const { criarTarefa } = useContext(TarefaContext)
    return criarTarefa
}