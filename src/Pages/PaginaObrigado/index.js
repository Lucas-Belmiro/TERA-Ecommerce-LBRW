import { useEffect, useState } from "react";
import "./PaginaObrigado.css";
import { useNavigate } from "react-router-dom";
import InfoObrigado from "../../Componentes/InfoObrigado";

const PaginaObrigado = () => {
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

    fetch("http://localhost:5000/verifyToken", options).then((res) => {
      if (res.status === 200) {
        setToken(true);
      } else {
        setToken(false);
        return navigate("/login");
      }
    });
  }, []);

  return <div>{token && <InfoObrigado></InfoObrigado>}</div>;
};

export default PaginaObrigado;
