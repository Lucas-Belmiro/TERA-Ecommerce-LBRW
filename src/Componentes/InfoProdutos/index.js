import { useEffect, useState } from 'react'
import './InfoProdutos.css'
import { Link } from 'react-router-dom'
import InfoExtra from '../InfoExtra'
import Loading from '../Loading'
import React from 'react'
import { CartContext } from '../../Providers/CartProvider'

const InfoProdutos = (props) => {
    let productArray = [
        {
            name: 'Tênis Nike Extend',
            price: '499.00',
            color: 'Preto',
            img: '/Imagens/3.png',
            id: 'product1',
            size: '',
            quantity: '',
            numberSales: 0,
        },

        {
            name: 'Tênis Fila Sport',
            price: '299.00',
            color: 'Preto',
            img: '/Imagens/2.png',
            id: 'product2',
            size: '',
            quantity: '',
            numberSales: 0,
        },

        {
            name: 'Tênis Nike Galaxy',
            price: '529.00',
            color: 'Preto',
            img: '/Imagens/1.png',
            id: 'product3',
            size: '',
            quantity: '',
            numberSales: 0,
        },

        {
            name: 'Tênis Nike WL',
            price: '422.00',
            color: 'Branco',
            img: '/Imagens/4.png',
            id: 'product4',
            size: '',
            quantity: '',
            numberSales: 0,
        },

        {
            name: 'Tênis Nike XP',
            price: '358.00',
            color: 'Rosa',
            img: '/Imagens/5.jpg',
            id: 'product5',
            size: '',
            quantity: '',
            numberSales: 0,
        },

        {
            name: 'Tênis Nike Future',
            price: '522.00',
            color: 'Pink',
            img: '/Imagens/6.jpg',
            id: 'product6',
            size: '',
            quantity: '',
            numberSales: 0,
        },

        {
            name: 'Tênis Nike World',
            price: '415.00',
            color: 'Preto',
            img: '/Imagens/7.jpg',
            id: 'product7',
            size: '',
            quantity: '',
            numberSales: 0,
        },

        {
            name: 'Tênis Addidas Racer',
            price: '299.00',
            color: 'Preto',
            img: '/Imagens/8.jpg',
            id: 'product8',
            size: '',
            quantity: '',
            numberSales: 0,
        },

        {
            name: 'Tênis adiddas Dark',
            price: '359.00',
            color: 'Preto',
            img: '/Imagens/9.jpg',
            id: 'product9',
            size: '',
            quantity: '',
            numberSales: 0,
        },
    ]

    const [objeto, setObjeto] = useState('')
    const [showLoading, setShowLoading] = useState(true)

    const { numeroDeitems, setNumeroDeitems } = React.useContext(CartContext)

    useEffect(() => {
        const idExtistente = JSON.parse(localStorage.getItem('id')) || []
        const armazenaObjeto = productArray.find((e) => e.id == idExtistente)
        setObjeto(armazenaObjeto)
        setShowLoading(false)
    }, [])

    return (
        <>
            <div className="box-principal">
                <section className="info-produtos">
                    <div className="info-imagens">
                        <div>
                            <img
                                className="produto-principal"
                                src={objeto.img}
                            ></img>
                        </div>

                        <div className="box-imagens">
                            <img
                                className="imagem-extra"
                                src={'/Imagens/imagenone.png'}
                                alt="Template de imagem vazia"
                            ></img>
                            <img
                                className="imagem-extra"
                                src={'/Imagens/imagenone.png'}
                                alt="Template de imagem vazia"
                            ></img>
                            <img
                                className="imagem-extra"
                                src={'/Imagens/imagenone.png'}
                                alt="Template de imagem vazia"
                            ></img>
                        </div>
                    </div>

                    <div className="info-extra">
                        <div>
                            <InfoExtra
                                name={objeto.name}
                                price={objeto.price}
                            ></InfoExtra>
                            <Link
                                to="/carrinho"
                                className="btn btn-primary botao-produto"
                            >
                                Adicionar ao carrinho
                            </Link>
                        </div>
                    </div>
                </section>
                {showLoading && <Loading></Loading>}
            </div>
        </>
    )
}

export default InfoProdutos
