import { useState, useEffect } from "react";
import ItemCarrinho from "../ItemCarrinho";
import "./InfoCarrinho.css";
import { Link } from "react-router-dom";

const InfoCarrinho = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch(`https://cqokjbs4mc.execute-api.us-east-1.amazonaws.com/dev/produtos`)
      .then((response) => response.json())
      .then((data) => setProdutos(data));
  }, []);

  const [carrinhoProdutos, setCarrinhoProdutos] = useState([]);
  const [somaDeValores, setSomadeValores] = useState([]);
  const [precos, setPrecos] = useState([]);

  //do local storage para um array ajustado

  useEffect(() => {
    let armazenaArray = [];
    for (var i = 0; i < localStorage.length; i++) {
      armazenaArray.push(localStorage.getItem(localStorage.key(i)));
    }

    const arrUnique = [...new Set(armazenaArray)];

    let arrayAjustado = [];
    arrUnique.forEach((element) => {
      arrayAjustado.push(element.replace(/[\\"]/g, ""));
    });

    let armazenaObjetos = [];

    const idExtistente = JSON.parse(localStorage.getItem("id")) || [];
    const tamanhoExtistente = JSON.parse(localStorage.getItem("tamanho")) || [];
    const quantidadeExtistente =
      JSON.parse(localStorage.getItem("quantidade")) || [];

    arrayAjustado.forEach((element) => {
      produtos.forEach((element2) => {
        if (element == element2.id) {
          armazenaObjetos.push(element2);
        }
      });
    });

    localStorage.setItem(`itensDoCarrinho`, JSON.stringify(armazenaObjetos));

    const produtosExistentes =
      JSON.parse(localStorage.getItem("itensDoCarrinho")) || [];
    setCarrinhoProdutos(produtosExistentes);
  }, [produtos]);

  useEffect(() => {
    let arrayDePrecos = [];

    carrinhoProdutos.map((element) => {
      arrayDePrecos.push(parseInt(element.price));
    });

    const initialValue = 25;
    const sumWithInitial = arrayDePrecos.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );

    setSomadeValores(sumWithInitial);

    setPrecos(arrayDePrecos);
  }, [carrinhoProdutos]);

  return (
    <>
      <div className="container">
        <section className="box-infoproduto">
          <div className="primeira-sessao">
            <div>
              <h5 className="mb-3">Produto</h5>
              <div className="ajusta-itens">
                {carrinhoProdutos.map((produto) => (
                  <ItemCarrinho
                    key={produto.price}
                    nome={produto.name}
                    imagem={produto.img}
                    id={produto.id}
                    quantidade={produto.quantity}
                    tamanho={produto.size}
                  ></ItemCarrinho>
                ))}
              </div>

              <div className="frete mt-3">
                <input placeholder="Insira seu cep"></input>
                <button className="btn btn-primary ok">OK</button>
              </div>
            </div>
          </div>

          <div className="segunda-sessao">
            <div>
              <h5 className="mb-3">Resumo</h5>
              <p>
                {precos.length} produto(s):{" "}
                {precos.map((precos) => `${precos} `)}
              </p>
              <p>Frete: 25 reais</p>
              <hr className="separador"></hr>
              <p className="total-carrinho">Total: {somaDeValores}</p>
              <Link to="/login" className="btn btn-primary botao-comprar">
                Comprar
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default InfoCarrinho;
