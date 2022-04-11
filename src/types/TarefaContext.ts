import { IFormInput } from "./Formulario";

export interface ITarefaContext {
    criarTarefa: (data: IFormInput) => void
}