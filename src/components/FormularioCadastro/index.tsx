import React from "react";
import styles from "./styles.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { IFormInput } from "../../types/Formulario";
import { useTarefa } from "../../hooks/useTarefa";

export default function FormularioCadastro() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const criarTarefa = useTarefa();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    criarTarefa(data)
  };

  return (
    <form
      action=''
      onSubmit={handleSubmit(onSubmit)}
      className={styles.formulario}
    >
      <label htmlFor=''>Matéria</label>
      <input type='text' {...register("materia")} />
      <label htmlFor=''>Data Pedido</label>
      <input type='date' {...register("dataPedido")} />
      <label htmlFor=''>Data Entregar</label>
      <input type='date' {...register("dataEntrega")} />
      <label className={styles.tarefa_label} htmlFor=''>
        Tarefa
      </label>
      <textarea id='' cols={30} rows={10} {...register("tarefa")} />
      <button type='submit'>Cadastrar</button>
    </form>
  );
}
