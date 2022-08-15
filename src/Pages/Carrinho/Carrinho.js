import "./Carrinho.css"

import Topo from "../../Componentes/Topo";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import BarraPromocao from "../../Componentes/BarraPromocao";
import Blog from "../../Componentes/Blog";
import BannerCadastro2 from "../../Componentes/BannerCadastro2";
import Titulo from "../../Componentes/Titulo";
import Footer from "../../Componentes/Footer";
import InfoCarrinho from "../../Componentes/InfoCarrinho";
import PassosCompra from "../../Componentes/PassosCompra";



function Carrinho(props) {
  let productArray = [

    {
        name: "Tênis Nike Extend",
        price: "499.00",
        color: "Preto",
        img: "/imagens/3.png",
        id: "product1",
        size: "",
        quantity: "",
        numberSales: 0
    },

    {
        name: "Tênis Fila Sport",
        price: "299.00",
        color: "Preto",
        img: "/imagens/2.png",
        id: "product2",
        size: "",
        quantity: "",
        numberSales: 0
    },

    {
        name: "Tênis Nike Galaxy",
        price: "529.00",
        color: "Preto",
        img: "/imagens/1.png",
        id: "product3",
        size: "",
        quantity: "",
        numberSales: 0
    },

    {
        name: "Tênis Nike WL",
        price: "422.00",
        color: "Branco",
        img: "/imagens/4.png",
        id: "product4",
        size: "",
        quantity: "",
        numberSales: 0
    },

    {
        name: "Tênis Nike XP",
        price: "358.00",
        color: "Rosa",
        img: "/imagens/5.jpg",
        id: "product5",
        size: "",
        quantity: "",
        numberSales: 0
    },

    {
        name: "Tênis Nike Future",
        price: "522.00",
        color: "Pink",
        img: "/imagens/6.jpg",
        id: "product6",
        size: "",
        quantity: "",
        numberSales: 0
    },

    {
        name: "Tênis Nike World",
        price: "415.00",
        color: "Preto",
        img: "/imagens/7.jpg",
        id: "product7",
        size: "",
        quantity: "",
        numberSales: 0
    },

    {
        name: "Tênis Addidas Racer",
        price: "299.00",
        color: "Preto",
        img: "/imagens/8.jpg",
        id: "product8",
        size: "",
        quantity: "",
        numberSales: 0

    },

    {
        name: "Tênis adiddas Dark",
        price: "359.00",
        color: "Preto",
        img: "/imagens/9.jpg",
        id: "product9",
        size: "",
        quantity: "",
        numberSales: 0
    }
]


  return (
    <div className="Produto">
      <BarraPromocao></BarraPromocao>
      <Topo></Topo>

      <PassosCompra></PassosCompra>

      <InfoCarrinho></InfoCarrinho>

      <Titulo nome="BLOG"></Titulo>
      
     <section className="ajuste-blog">
        <Blog nome = "Dicas de cuidados para o seu tênis" descricao = "" imagem = "/imagens/blog1.png"></Blog>
        <Blog nome = "Saiba como correr com mais conforto" descricao = "" imagem = "/imagens/blog2.png"></Blog>
        <Blog nome = "Entenda como fazer o alongamento certo" descricao = "" imagem = "/imagens/blog3.png"></Blog>
        <Blog nome = "Aprenda qual o tênis certo para o seu esporte" descricao = "" imagem = "/imagens/Blog4.jpg" ></Blog>
     </section>
      
      <BannerCadastro2></BannerCadastro2>

      <Footer></Footer>

    </div>

   
  );
}

export default Carrinho;
