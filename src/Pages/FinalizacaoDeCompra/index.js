import { useEffect, useState } from "react";
import InfoCompraFinal from "../../Componentes/InfoCompraFinal";
import "./FinalizacaoDeCompra.css";
import { useNavigate } from "react-router-dom";

const FinalizacaoDeCompra = () => {
  const [token, setToken] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const tokenExtistente = localStorage.getItem("token") || [];

    let post = {
      tokenExistente: tokenExtistente,
    };

    const options = {
      method: "POST",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify(post),
    };

    fetch("https://lucasbelmiro.com/verifyToken", options).then((res) => {
      if (res.status === 200) {
        setToken(true);
      } else {
        setToken(false);
        return navigate("/login");
      }
    });
  }, []);

  return <div>{token && <InfoCompraFinal></InfoCompraFinal>}</div>;
};

export default FinalizacaoDeCompra;
