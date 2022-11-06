import Footer from "../../Componentes/Footer";
import Topo from "../../Componentes/Topo";
import "./InfoObrigado.css";

const InfoObrigado = () => {
  const tokenExtistente = localStorage.getItem("token") || [];
  const idCompra = localStorage.getItem("id_compra") || [];

  return (
    <>
      <Topo></Topo>
      <div className="box-obrigado">
        <h1 className="obrigado">Obrigado por comprar conosco</h1>
        <h3 className="infoCodigo">Este é o código da sua compra:</h3>
        <h5 className="idCompra">{idCompra}</h5>
      </div>
      <Footer></Footer>
    </>
  );
};

export default InfoObrigado;
