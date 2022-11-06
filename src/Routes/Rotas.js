import { Routes, Route } from "react-router-dom";
import Cadastro from "../Pages/Cadastro";
import Carrinho from "../Pages/Carrinho/Carrinho";
import FinalizacaoDeCompra from "../Pages/FinalizacaoDeCompra";
import App from "../Pages/Home/App";
import Login from "../Pages/Login";
import PaginaObrigado from "../Pages/PaginaObrigado";
import Produto from "../Pages/Produto/Produto";

function Rotas(props) {
  return (
    <Routes>
      <Route path="/" element={<App></App>} />
      <Route path="/produto" element={<Produto></Produto>} />
      <Route path="/carrinho" element={<Carrinho></Carrinho>} />
      <Route path="/login" element={<Login></Login>} />
      <Route path="/cadastro" element={<Cadastro></Cadastro>} />
      <Route
        path="/comprafinal"
        element={<FinalizacaoDeCompra></FinalizacaoDeCompra>}
      />
      <Route path="/obrigado" element={<PaginaObrigado></PaginaObrigado>} />
    </Routes>
  );
}

export default Rotas;
