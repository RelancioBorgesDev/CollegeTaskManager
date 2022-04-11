import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Link,
} from "react-router-dom";
import { TarefaContextProvider } from "./contexts/Tarefa";
import Cadastro from "./pages/Cadastro";
import Tarefas from "./pages/Tarefas";
function App() {
  return (
    <TarefaContextProvider>
      <Router>
        <Routes>
            <Route path='/' element={<Cadastro />} />
            <Route path='/Tarefas' element={<Tarefas />} />
        </Routes>
      </Router>
    </TarefaContextProvider>
  );
}

export default App;
