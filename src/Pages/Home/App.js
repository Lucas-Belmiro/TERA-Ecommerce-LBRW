import Topo from '../../Componentes/Topo'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect, useState, useRef } from 'react'
import BarraPromocao from '../../Componentes/BarraPromocao'
import Carrossel from '../../Componentes/Carrossel'
import Blog from '../../Componentes/Blog'
import BannerCadastro2 from '../../Componentes/BannerCadastro2'
import BarraCadastro from '../../Componentes/BarraCadastro'
import Titulo from '../../Componentes/Titulo'
import Card from '../../Componentes/Card'
import './App.css'
import Footer from '../../Componentes/Footer'
import { motion } from 'framer-motion'
import { CartContext } from '../../Providers/CartProvider'

function App(props) {
    const [produtos, setProdutos] = useState([])
    const carousel = useRef()
    const carousel2 = useRef()
    const innerValue = useRef()
    const innerValue2 = useRef()
    const [width, setWidth] = useState(0)
    const [width2, setWidth2] = useState(0)
    const [xValue, setXValue] = useState(0)
    const [xValue2, setXValue2] = useState(0)
    const [userId, setUserId] = useState(false)
    const { nomeLog, setNomeLog } = React.useContext(CartContext)

    useEffect(() => {
        const tokenExistente = localStorage.getItem('token') || []
        const options2 = {
            method: 'POST',
            headers: new Headers({
                'content-type': 'application/json',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods':
                    'DELETE,GET,HEAD,OPTIONS,PATCH,POST,PUT',
                'Access-Control-Allow-Credentials': true,
            }),
            body: JSON.stringify({ tokenExistente: tokenExistente }),
        }

        fetch(`https://lucasbelmiro.com/verifyToken`, options2).then((res) => {
            if (res.status == 200) {
                res.json().then((data) => {
                    setUserId(data.userVerify._id)
                })
            } else {
                console.log('Não foi enviado :(')
            }
        })
    }, [])

    useEffect(() => {
        const options3 = {
            method: 'POST',
            headers: new Headers({
                'content-type': 'application/json',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods':
                    'DELETE,GET,HEAD,OPTIONS,PATCH,POST,PUT',
                'Access-Control-Allow-Credentials': true,
            }),
            body: JSON.stringify({ _id: userId }),
        }

        fetch(`https://lucasbelmiro.com/findName`, options3).then((res) => {
            if (res.status == 200) {
                res.json().then((data) => {
                    setNomeLog(data.nome)
                })
            } else {
                console.log('Não foi enviado :(')
            }
        })
    }, [userId])

    useEffect(() => {
        fetch(
            `https://cqokjbs4mc.execute-api.us-east-1.amazonaws.com/dev/produtos`
        )
            .then((response) => response.json())
            .then((data) => setProdutos(data))
    }, [])

    function retornaTamanho() {
        setWidth(
            -(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
        )
        return
    }

    function retornaTamanho2() {
        setWidth2(
            -(carousel2.current?.scrollWidth - carousel2.current?.offsetWidth)
        )
        return
    }

    function aumentaTransformacao() {
        let el = innerValue.current
        // utiliza método
        let elCoordenadas = el.getBoundingClientRect()

        setXValue({ x: 0 })
    }

    function diminuiTransformacao() {
        let el = innerValue.current
        // utiliza método
        let elCoordenadas = el.getBoundingClientRect()
        setXValue({ x: width })
    }

    function aumentaTransformacao2() {
        let el = innerValue2.current
        // utiliza método
        let elCoordenadas = el.getBoundingClientRect()

        setXValue2({ x: 0 })
    }

    function diminuiTransformacao2() {
        let el = innerValue2.current
        // utiliza método
        let elCoordenadas = el.getBoundingClientRect()
        setXValue2({ x: width2 })
    }

    return (
        <div className="App">
            <BarraPromocao></BarraPromocao>
            <Topo></Topo>
            <Carrossel></Carrossel>
            <BarraCadastro></BarraCadastro>
            <Titulo imagem={'promotion-01.svg'} nome="OFERTAS"></Titulo>
            <div className="ajuste-produto">
                <motion.div
                    ref={carousel}
                    className="carousel"
                    whileTap={{ cursor: 'grabbing' }}
                    onLoad={() => retornaTamanho()}
                >
                    <motion.div
                        ref={innerValue}
                        className="inner"
                        drag="x"
                        dragConstraints={{ right: 0, left: width }}
                        animate={xValue}
                        transition={{ duration: 1 }}
                        dragTransition={{ bounceStiffness: 600 }}
                    >
                        {produtos.map((produto) => (
                            <motion.div className="item" key={produto.id}>
                                <Card
                                    className="subitem"
                                    key={produto.id}
                                    nome={produto.name}
                                    preco={produto.price}
                                    imagem={produto.img}
                                    id={produto.id}
                                ></Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
            <div className="botoes">
                <button
                    className="btn btn-primary botao1"
                    onClick={() => aumentaTransformacao()}
                >
                    <img
                        className="arrow-button"
                        src={'Imagens/upArrow-01.svg'}
                        alt="Seta esquerda"
                    />
                </button>

                <button
                    className="btn btn-primary botao2"
                    onClick={() => diminuiTransformacao()}
                >
                    <img
                        className="arrow-button2"
                        src={'Imagens/upArrow-01.svg'}
                        alt="Seta esquerda"
                    />
                </button>
            </div>

            <Titulo
                imagem={'favoritos.svg'}
                className="titulo-mv"
                nome="MAIS VENDIDOS"
            ></Titulo>

            <div className="ajuste-produto">
                <motion.div
                    ref={carousel2}
                    className="carousel"
                    whileTap={{ cursor: 'grabbing' }}
                    onLoad={() => retornaTamanho2()}
                >
                    <motion.div
                        ref={innerValue2}
                        className="inner"
                        drag="x"
                        dragConstraints={{ right: 0, left: width2 }}
                        animate={xValue2}
                        transition={{ duration: 1 }}
                        dragTransition={{ bounceStiffness: 600 }}
                    >
                        {produtos.map((produto) => (
                            <motion.div className="item" key={produto.id}>
                                <Card
                                    className="subitem"
                                    key={produto.id}
                                    nome={produto.name}
                                    preco={produto.price}
                                    imagem={produto.img}
                                    id={produto.id}
                                ></Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
            <div className="botoes">
                <button
                    className="btn btn-primary botao1"
                    onClick={() => aumentaTransformacao2()}
                >
                    <img
                        className="arrow-button"
                        src={'Imagens/upArrow-01.svg'}
                        alt="Seta esquerda"
                    />
                </button>

                <button
                    className="btn btn-primary botao2"
                    onClick={() => diminuiTransformacao2()}
                >
                    <img
                        className="arrow-button2"
                        src={'Imagens/upArrow-01.svg'}
                        alt="Seta esquerda"
                    />
                </button>
            </div>

            <Titulo imagem={'blog-01.svg'} nome="BLOG"></Titulo>

            <section className="ajuste-blog">
                <Blog
                    nome="Dicas de cuidados para o seu tênis"
                    descricao=""
                    imagem={'/Imagens/blog1.png'}
                ></Blog>
                <Blog
                    nome="Saiba como correr com mais conforto"
                    descricao=""
                    imagem={'/Imagens/blog2.png'}
                ></Blog>
                <Blog
                    nome="Entenda como fazer o alongamento certo"
                    descricao=""
                    imagem={'/Imagens/blog3.png'}
                ></Blog>
                <Blog
                    nome="Aprenda qual o tênis certo para o seu esporte"
                    descricao=""
                    imagem={'/Imagens/Blog4.jpg'}
                ></Blog>
            </section>

            <BannerCadastro2></BannerCadastro2>

            <Footer></Footer>
        </div>
    )
}

export default App
