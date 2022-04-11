import React from "react";
import styles from './styles.module.scss';

export default function FormularioCadastro() {
  return (
    <form action='' className={styles.formulario}>
      <label htmlFor=''>Matéria</label>
      <input type='text' />
      <label htmlFor=''>Data Pedido</label>
      <input type='date' />
      <label htmlFor=''>Data Entregar</label>
      <input type='date' />
      <label className={styles.tarefa_label}htmlFor=''>Tarefa</label>
      <textarea  name='' id='' cols={30} rows={10}/>
      <button type="submit">Cadastrar</button>
    </form>
  );
}
