import "./Carrinho.css";

import Topo from "../../Componentes/Topo";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import BarraPromocao from "../../Componentes/BarraPromocao";
import Blog from "../../Componentes/Blog";
import BannerCadastro2 from "../../Componentes/BannerCadastro2";
import Titulo from "../../Componentes/Titulo";
import Footer from "../../Componentes/Footer";
import InfoCarrinho from "../../Componentes/InfoCarrinho";
import PassosCompra from "../../Componentes/PassosCompra";

function Carrinho(props) {
  return (
    <div className="Produto">
      <BarraPromocao></BarraPromocao>
      <Topo></Topo>

      <PassosCompra></PassosCompra>

      <InfoCarrinho></InfoCarrinho>

      <Titulo nome="BLOG"></Titulo>

      <section className="ajuste-blog">
        <Blog
          nome="Dicas de cuidados para o seu tênis"
          descricao=""
          imagem="/Imagens/blog1.png"
        ></Blog>
        <Blog
          nome="Saiba como correr com mais conforto"
          descricao=""
          imagem="/Imagens/blog2.png"
        ></Blog>
        <Blog
          nome="Entenda como fazer o alongamento certo"
          descricao=""
          imagem="/Imagens/blog3.png"
        ></Blog>
        <Blog
          nome="Aprenda qual o tênis certo para o seu esporte"
          descricao=""
          imagem="/Imagens/Blog4.jpg"
        ></Blog>
      </section>

      <BannerCadastro2></BannerCadastro2>

      <Footer></Footer>
    </div>
  );
}

export default Carrinho;
