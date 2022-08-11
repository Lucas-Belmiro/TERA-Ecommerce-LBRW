import { Routes, Route } from "react-router-dom";
import App from "../Pages/Home/App";
import Produto from "../Pages/Produto/Produto";


function Rotas(props) {

  return (
        <Routes>
            <Route path='/' element={<App></App>} />
            <Route path='/produto' element={<Produto></Produto>} />
        </Routes>
  );
}

export default Rotas;