import Topo from "../../Componentes/Topo";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import BarraPromocao from "../../Componentes/BarraPromocao";
import Carrossel from "../../Componentes/Carrossel";
import Blog from "../../Componentes/Blog";
import BannerCadastro2 from "../../Componentes/BannerCadastro2";
import BarraCadastro from "../../Componentes/BarraCadastro";
import Titulo from "../../Componentes/Titulo";
import Card from "../../Componentes/Card";
import "./App.css"
import Footer from "../../Componentes/Footer";



function App(props) {

const [produtos, setProdutos] = useState([])


useEffect(()=>{
  fetch(`https://cqokjbs4mc.execute-api.us-east-1.amazonaws.com/dev/produtos`)
      .then (response => response.json())
      .then (data => setProdutos(data))
}, [])


  return (

    
    <div className="App">
      <BarraPromocao></BarraPromocao>
      <Topo></Topo>
      <Carrossel></Carrossel>
      <BarraCadastro></BarraCadastro>
      <Titulo nome="OFERTAS"></Titulo>
      <div className="ajusta-produtos">
        {produtos.map(produto=><Card key = {produto.id} nome = {produto.name} preco = {produto.price} imagem = {produto.img} id={produto.id} ></Card>)}
      </div>
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

export default App;
