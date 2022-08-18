import { useEffect, useState } from "react";
import IncrmentoQuantidade from "../IncrementoQuantidade";
import SelecaoTamanho from "../SelecaoTamanho";
import "./InfoProdutos.css"
import { Link } from "react-router-dom";


const InfoProdutos = (props)=>{

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

    const [objeto, setObjeto] = useState(""); 
    
    useEffect(()=>{
        const idExtistente = JSON.parse(localStorage.getItem("id")) || [];
        const armazenaObjeto = productArray.find(e=> e.id == idExtistente)
        setObjeto(armazenaObjeto)
    }, [])


    return (

        <>      
            <div className="box-principal">
                <section className="info-produtos">
                    <div className="info-imagens">
                        <div>
                            <img className="produto-principal" src= {objeto.img} ></img>
                        </div>

                        <div className="box-imagens">
                            <img className="imagem-extra" src="/imagens/imagenone.png" ></img>
                            <img className="imagem-extra" src="/imagens/imagenone.png"></img>
                            <img className="imagem-extra" src="/imagens/imagenone.png"></img>
                        </div>
                    </div>

                    <div className="info-extra">
                        <div>
                            <h3>{objeto.name}</h3>
                            <h4>R$ {objeto.price}</h4>
                            <h6>Tamanhos:</h6>
                            <SelecaoTamanho></SelecaoTamanho>
                            <h6>Quantidade:</h6>
                            <div className="box-incremento-quantidade">
                                <IncrmentoQuantidade></IncrmentoQuantidade>
                            </div>
                            
                            <Link to="/carrinho" className="btn btn-primary botao-produto">Adicionar ao carrinho</Link>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

export default InfoProdutos;