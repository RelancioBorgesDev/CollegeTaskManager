import React from "react";
import styles from "./styles.module.scss";

export default function Navigation() {
  return (
    <ul className={styles.navigation}>
      <li>
        <a href='#'>Cadastro</a>
      </li>
      <li>
        <a href='#'>Tarefas</a>
      </li>
    </ul>
  );
}
