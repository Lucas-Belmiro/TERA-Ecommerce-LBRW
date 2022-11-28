import './Produto.css'
import Topo from '../../Componentes/Topo'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react'
import BarraPromocao from '../../Componentes/BarraPromocao'
import Blog from '../../Componentes/Blog'
import BannerCadastro2 from '../../Componentes/BannerCadastro2'
import Titulo from '../../Componentes/Titulo'
import Footer from '../../Componentes/Footer'
import InfoProdutos from '../../Componentes/InfoProdutos'
import Loading from '../../Componentes/Loading'

function Produto(props) {
    const [loading, setLoading] = useState(false)

    setTimeout(() => {
        setLoading(true)
    }, 300)

    if (loading == true) {
        return (
            <div className="Produto">
                <BarraPromocao></BarraPromocao>
                <Topo></Topo>

                <InfoProdutos></InfoProdutos>

                <Titulo imagem={'blog-01.svg'} nome="BLOG"></Titulo>

                <section className="ajuste-blog">
                    <Blog
                        nome="Dicas de cuidados para o seu tênis"
                        descricao=""
                        imagem={'/Imagens/blog1.png'}
                        alt="Pessoa amarrando o tênis"
                    ></Blog>
                    <Blog
                        nome="Saiba como correr com mais conforto"
                        descricao=""
                        imagem={'/Imagens/blog2.png'}
                        alt="Homem se preparando para correr"
                    ></Blog>
                    <Blog
                        nome="Entenda como fazer o alongamento certo"
                        descricao=""
                        imagem={'/Imagens/blog3.png'}
                        alt="Homem fazendo alongamento"
                    ></Blog>
                    <Blog
                        nome="Aprenda qual o tênis certo para o seu esporte"
                        descricao=""
                        imagem={'/Imagens/Blog4.jpg'}
                        alt="Homem se preparando para correr"
                    ></Blog>
                </section>

                <BannerCadastro2></BannerCadastro2>

                <Footer></Footer>
            </div>
        )
    } else {
        return <Loading></Loading>
    }
}

export default Produto
