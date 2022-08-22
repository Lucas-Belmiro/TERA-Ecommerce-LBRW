import { useState, useEffect } from "react"
import ItemCarrinho from "../ItemCarrinho"
import "./InfoCarrinho.css"

const InfoCarrinho = ()=>{

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

    const [carrinhoProdutos, setCarrinhoProdutos] = useState([]);
    const [somaDeValores, setSomadeValores] = useState([]);
    const [precos, setPrecos] = useState([]);
    


    useEffect(()=>{
        let armazenaArray = []
        for(var i =0; i < localStorage.length; i++){
           armazenaArray.push (localStorage.getItem(localStorage.key(i)));
          } 

        const arrUnique = [...new Set(armazenaArray)]

         let arrayAjustado = [];
        arrUnique.forEach(element => {
          arrayAjustado.push(element.replace(/[\\"]/g, '')); 
        });

        let armazenaObjetos = [];

        arrayAjustado.forEach(element => {
            productArray.forEach(element2 => {
                if(element == element2.id){
                    armazenaObjetos.push(element2)
                }
            });  
        });
            setCarrinhoProdutos(armazenaObjetos)
    }, []) 

    // soma de valores

    useEffect(()=>{

        let arrayDePrecos = [];

        carrinhoProdutos.forEach(element => {
            arrayDePrecos.push(parseInt(element.price))
        });

        const initialValue = 25;
        const sumWithInitial = arrayDePrecos.reduce(
          (previousValue, currentValue) => previousValue + currentValue,
          initialValue
        );
      
        setSomadeValores(sumWithInitial)

        setPrecos(arrayDePrecos)
    
    }, [somaDeValores]) 

    return (
        <>

        <div className="container">
            <section className="box-infoproduto">
                <div className="primeira-sessao">
                    <div>

                        <h5 className="mb-3">Produto</h5>
                        <div className="ajusta-itens">
                            {carrinhoProdutos.map(produto=><ItemCarrinho key = {produto.price} nome = {produto.name} imagem = {produto.img} id = {produto.id}></ItemCarrinho>)}
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
                        <p>{precos.length} produto(s):  {precos.map(precos=>`${precos} `)}</p>
                        <p>Frete:                 25 reais</p>
                        <hr className="separador"></hr>
                        <p className="total-carrinho">Total: {somaDeValores}</p>
                        <button className="btn btn-primary botao-comprar">Comprar</button> 
                    </div>

                </div>
            </section>
        </div>
        
        </>
    )
}

export default InfoCarrinho