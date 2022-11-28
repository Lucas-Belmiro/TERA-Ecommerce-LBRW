import './Carrinho.css'
import Topo from '../../Componentes/Topo'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect } from 'react'
import BarraPromocao from '../../Componentes/BarraPromocao'
import Blog from '../../Componentes/Blog'
import BannerCadastro2 from '../../Componentes/BannerCadastro2'
import Titulo from '../../Componentes/Titulo'
import Footer from '../../Componentes/Footer'
import InfoCarrinho from '../../Componentes/InfoCarrinho'
import PassosCompra from '../../Componentes/PassosCompra'

function Carrinho(props) {
    return (
        <div className="Produto">
            <BarraPromocao></BarraPromocao>
            <Topo></Topo>

            <PassosCompra></PassosCompra>

            <InfoCarrinho></InfoCarrinho>

            <Titulo imagem={'blog-01.svg'} nome="BLOG"></Titulo>

            <section className="ajuste-blog">
                <Blog
                    nome="Dicas de cuidados para o seu tênis"
                    descricao=""
                    imagem="/Imagens/blog1.png"
                    alt="Homem amarrando o tênis se preparando para correr"
                ></Blog>
                <Blog
                    nome="Saiba como correr com mais conforto"
                    descricao=""
                    imagem="/Imagens/blog2.png"
                    alt="Homem com roupa esportiva olhando fixamente para um objetivo preparado para correr"
                ></Blog>
                <Blog
                    nome="Entenda como fazer o alongamento certo"
                    descricao=""
                    imagem="/Imagens/blog3.png"
                    alt="Homem com roupa esportiva fazendo alongamento em dia ensolarado"
                ></Blog>
                <Blog
                    nome="Aprenda qual o tênis certo para o seu esporte"
                    descricao=""
                    imagem="/Imagens/Blog4.jpg"
                    alt="Homem com tênis branco se preparando para uma corrida"
                ></Blog>
            </section>

            <BannerCadastro2></BannerCadastro2>

            <Footer></Footer>
        </div>
    )
}

export default Carrinho
