import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { AiOutlineClose } from "react-icons/ai";
import { IFormInput } from "../../types/Formulario";
import api from "../../services/api";


export default function PostIT() {
  const [post, setPost] = useState<IFormInput[]>([]);

  useEffect(() => {
    api.get("/tarefas").then((response) => {
      setPost(response.data);
    });
  }, []);


  return (
    <>
      {post.map((item) => (
        <div className={styles.container}>
          <h1>{item.materia}</h1>
          <button>
            <AiOutlineClose />
          </button>
          <p>
            {item.tarefa}
          </p>

          <span>Data Inicio: {item.dataPedido}</span>
          <span>Data Entrega: {item.dataEntrega}</span>

          <h5>Faltam {parseInt(item.dataEntrega) - parseInt(item.dataPedido)} dias</h5>
        </div>
      ))}
    </>
  );
}
