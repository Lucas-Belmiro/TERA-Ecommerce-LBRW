import "./Produto.css";
import Topo from "../../Componentes/Topo";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Suspense, useEffect, useState } from "react";
import BarraPromocao from "../../Componentes/BarraPromocao";
import Blog from "../../Componentes/Blog";
import BannerCadastro2 from "../../Componentes/BannerCadastro2";
import Titulo from "../../Componentes/Titulo";
import Footer from "../../Componentes/Footer";
import InfoProdutos from "../../Componentes/InfoProdutos";

function Produto(props) {
  return (
    <div className="Produto">
      <BarraPromocao></BarraPromocao>
      <Topo></Topo>

      <InfoProdutos></InfoProdutos>

      <Titulo nome="BLOG"></Titulo>

      <section className="ajuste-blog">
        <Blog
          nome="Dicas de cuidados para o seu tênis"
          descricao=""
          imagem={"/Imagens/blog1.png"}
          alt="Pessoa amarrando o tênis"
        ></Blog>
        <Blog
          nome="Saiba como correr com mais conforto"
          descricao=""
          imagem={"/Imagens/blog2.png"}
          alt="Homem se preparando para correr"
        ></Blog>
        <Blog
          nome="Entenda como fazer o alongamento certo"
          descricao=""
          imagem={"/Imagens/blog3.png"}
          alt="Homem fazendo alongamento"
        ></Blog>
        <Blog
          nome="Aprenda qual o tênis certo para o seu esporte"
          descricao=""
          imagem={"/Imagens/Blog4.jpg"}
          alt="Homem se preparando para correr"
        ></Blog>
      </section>

      <BannerCadastro2></BannerCadastro2>

      <Footer></Footer>
    </div>
  );
}

export default Produto;
