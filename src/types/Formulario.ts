import { ReactNode } from "react";

export interface IFormInput{
    id: number;
    materia: string;
    dataPedido: string;
    dataEntrega: string;
    tarefa: string;
}

export interface TarefasContextProps {
    children: ReactNode; 
}