// Importação do bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//Importação estilo CSS padrão
import "./App.css";

// Importação de páginas
import Login from "./pages/Login";
import Home from "./pages/Home";
import CadastroAnimal from "./pages/CadastroAnimal";
import EditarAnimal from "./pages/EditarAnimal";
import CadastroUsuario from "./pages/CadastroUsuario";

//Importação do gerenciador de rotas
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/cadastro/usuario" element={<CadastroUsuario />}/>
          <Route path="/login" element={<Login />}/>  
          <Route path="/home" element={<Home />}/> 
          <Route path="/animal/cadastrar" element={<CadastroAnimal />}/>  
          <Route path="/animal/editar/:id" element={<EditarAnimal />}/>    
        </Routes>
      </BrowserRouter>
    </div> 
  );
}

export default App;
