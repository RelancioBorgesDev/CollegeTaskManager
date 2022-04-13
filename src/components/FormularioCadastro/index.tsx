import React from "react";
import styles from "./styles.module.scss";

import { SubmitHandler, useForm } from "react-hook-form";
import { IFormInput } from "../../types/Formulario";
import { useTarefa } from "../../hooks/useTarefa";

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const validacaoForm = yup.object().shape({
  materia: yup.string().required("O campo matéria é obrigatório"),
  dataPedido: yup.date().required("O campo data pedido é obrigatório"),
  dataEntrega: yup.date().required("O campo data entrega é obrigatório"),
  tarefa: yup.string().required("O campo tarefa é obrigatório"),
}).required();

export default function FormularioCadastro() {
  const { register, handleSubmit, formState:{ errors } } = useForm<IFormInput>({
    resolver: yupResolver(validacaoForm)
  });
  const criarTarefa = useTarefa();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    criarTarefa(data);
  };

  return (
    <form
      action=''
      onSubmit={handleSubmit(onSubmit)}
      className={styles.formulario}
    >
      <label htmlFor=''>Matéria</label>
      <input type='text' {...register("materia")} />
      <small>{errors.materia?.message}</small>

      <label htmlFor=''>Data Pedido</label>
      <input type='date' {...register("dataPedido")} />
      <small>{errors.dataPedido?.message}</small>

      <label htmlFor=''>Data Entregar</label>
      <input type='date' {...register("dataEntrega")} />
      <small>{errors.dataEntrega?.message}</small>

      <label className={styles.tarefa_label} htmlFor=''>
        Tarefa
      </label>
      <textarea id='' cols={30} rows={10} {...register("tarefa")} />
      <small>{errors.tarefa?.message}</small>
      <button type='submit'>Cadastrar</button>
    </form>
  );
}
