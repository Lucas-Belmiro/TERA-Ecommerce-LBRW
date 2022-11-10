import BarraPromocao from "../../Componentes/BarraPromocao";
import Footer from "../../Componentes/Footer";
import Form1 from "../../Componentes/Form1";
import Topo from "../../Componentes/Topo";
import { Link, useNavigate } from "react-router-dom";
import "./InfoCompraFinal.css";
import Form2 from "../../Componentes/Form2";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const InfoCompraFinal = () => {
  const navigate = useNavigate();
  const [precos, setPrecos] = useState([]);
  const [objeto, setObjeto] = useState({});
  const [objeto2, setObjeto2] = useState({});
  const [botao1, setBotao1] = useState(false);
  const [botao2, setBotao2] = useState(false);
  const [comprasAnteriores, setComprasAnteriores] = useState([]);
  const produtosExistentes =
    JSON.parse(localStorage.getItem("itensDoCarrinho")) || [];
  const [somaDeValores, setSomadeValores] = useState([]);

  useEffect(() => {
    //Cálculo de preços dos itens do carrinho
    let arrayDePrecos = [];

    produtosExistentes.forEach((element) => {
      arrayDePrecos.push(parseInt(element.price));
    });

    const initialValue = 25;
    const sumWithInitial = arrayDePrecos.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );

    setSomadeValores(sumWithInitial);

    setPrecos(arrayDePrecos);
  }, []);

  function atualizaUsuario(dado) {
    const tokenExistente = localStorage.getItem("token") || [];

    console.log(dado);

    //Eu pego os dados do usuário (ID)

    const options2 = {
      method: "POST",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify({ tokenExistente: tokenExistente }),
    };

    fetch(`https://lbrw.herokuapp.com/verifyToken`, options2).then((res) => {
      if (res.status == 200) {
        res.json().then((data) => {
          localStorage.setItem(
            "idUsuario",
            data.userVerify._id
          );
        });
      } else {
        console.log("Não foi enviado :(");
      }
    });

    //Verificar os ID's de compras anteriores e adicionar os novos

    const idUsuario = localStorage.getItem("idUsuario") || [];
    

    const options3 = {
      method: "POST",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify({ idUser: idUsuario }),
    };

    console.log(options3.body);

    fetch(`https://lbrw.herokuapp.com/id`, options3).then((res) => {
      if (res.status == 200) {
        res.json().then((data2) => {
          let comprasPassadas = data2.id.compras
          localStorage.setItem("idCompras", JSON.stringify(comprasPassadas));
        });
      } else {
        console.log("Não foi enviado :(");
      }
    });

    const compraAnterior = JSON.parse(localStorage.getItem("idCompras") || []);

    //ainda problemático

    const array = [dado, ...compraAnterior];

    //Atualizar o usuário adicionando os ID's de compra

    const options = {
      method: "PATCH",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify({ compras: array }),
    };

    fetch(`https://lbrw.herokuapp.com/${idUsuario}`, options).then((res) => {
      if (res.status == 200) {
        res.json().then((data) => {
          console.log(dado);
        });
      } else {
        console.log("Não foi enviado :(");
      }
    });
  }

  function EnviarDados(evento) {
    evento.preventDefault();

    //Salvar dados de compra dentro do banco de dados (DADOS)

    if (botao1 === true && botao2 === true) {
      const returnedTarget = {
        ...objeto,
        pagamento: objeto2,
        produto: produtosExistentes,
      };

      const options = {
        method: "POST",
        headers: new Headers({ "content-type": "application/json" }),
        body: JSON.stringify(returnedTarget),
      };

      fetch("https://lbrw.herokuapp.com/dados/salvar", options).then((res) => {
        if (res.status == 200) {
          res.json().then((data) => {
            atualizaUsuario(data.doc._id);
            localStorage.setItem("id_compra", data.doc._id);
          });
          alert("Compra efetuada com sucesso!");
          return navigate("/obrigado");
        } else {
          alert("Não foi enviado :(");
        }
      });
    } else {
      alert("Preencha os dois formulários antes de efetuar a compra");
    }
  }

  return (
    <div>
      <BarraPromocao></BarraPromocao>
      <Topo></Topo>
      <section className="container">
        <div className="boxDiv">
          <h4>Entrega</h4>
          <Form1
            salvarForm={(objeto) => {
              setObjeto(objeto);
            }}
            estadoBotaoForm1={(botao) => {
              setBotao1(botao);
            }}
          ></Form1>
        </div>

        <div className="boxDiv">
          <h4>Pagamento</h4>
          <Form2
            salvarForm2={(objeto2) => {
              setObjeto2(objeto2);
            }}
            estadoBotaoForm2={(botao2) => {
              setBotao2(botao2);
            }}
          ></Form2>
        </div>

        <div className="boxDiv">
          <h4>Resumo</h4>
          <div className="segunda-sessao">
            <div>
              {produtosExistentes.map((produto) => (
                <img
                  className="imagem-produto"
                  key={produto.name}
                  src={produto.img}
                  alt=""
                ></img>
              ))}
              <p>
                {" "}
                Produto(s):{" "}
                {produtosExistentes.map(
                  (produto) => `(${produto.price}, ${produto.name}) `
                )}{" "}
              </p>
              <p>Frete: R$ 25,00</p>
              <hr className="separador"></hr>
              <p className="total-carrinho">Total: R$ {somaDeValores},00</p>
              <Button
                onClick={(evento) => EnviarDados(evento)}
                className="btn btn-primary botao-comprar"
              >
                Comprar
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default InfoCompraFinal;
