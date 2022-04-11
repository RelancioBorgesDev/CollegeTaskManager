import React from 'react'
import styles from './styles.module.scss'
import { AiOutlineClose } from 'react-icons/ai'

export default function PostIT() {
  return (
    <div className={styles.container}>
        <h1>Eletromagnetismo</h1>
        <button>
            <AiOutlineClose/>
        </button>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat saepe, laborum nisi eligendi autem, doloremque explicabo quod quis hic obcaecati cum inventore maiores quasi pariatur similique quisquam labore deserunt dolorem!</p>

        <span>Data Inicio: 30/03/2022</span>
        <span>Data Entrega: 17/04/2022</span>

        <h5>Faltam 17 dias</h5>

    </div>
  )
}
