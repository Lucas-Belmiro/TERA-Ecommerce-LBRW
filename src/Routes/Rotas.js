import { Routes, Route } from "react-router-dom";
import Cadastro from "../Pages/Cadastro";
import Carrinho from "../Pages/Carrinho/Carrinho";
import App from "../Pages/Home/App";
import Login from "../Pages/Login";
import Produto from "../Pages/Produto/Produto";


function Rotas(props) {

  return (
        <Routes>
            <Route path='/' element={<App></App>} />
            <Route path='/produto' element={<Produto></Produto>} />
            <Route path='/carrinho' element={<Carrinho></Carrinho>} />
            <Route path="/login" element={<Login></Login>}/>
            <Route path="/cadastro" element={<Cadastro></Cadastro>}/>
        </Routes>
  );
}

export default Rotas;