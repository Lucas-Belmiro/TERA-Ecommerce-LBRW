import { useState, useEffect } from "react";
import "./IncrementoQuantidade.css"

const IncrmentoQuantidade = (props)=>{

    const [count, setCount] = useState(1);
    const [novosPrecos, setNovosPrecos] = useState([]);
    const [somaDeValores, setSomadeValores] = useState([]);
    const [precos, setPrecos] = useState([]);

    
   ;

    useEffect(()=>{
        
        let arrayQuantidade = [];

        arrayQuantidade.push(count, props.id)
        
        const produtosExtistentes = JSON.parse(localStorage.getItem("itensDoCarrinho")) || [];
        

        produtosExtistentes.forEach(element => {
            if(element.id == props.id){
                element.quantity = count
            }
        });

        localStorage.setItem("itensDoCarrinho", JSON.stringify(produtosExtistentes))
        setNovosPrecos(produtosExtistentes)

    }, [count])

    function diminuir(){
        count > 1 && setCount(count - 1)
       
        window.location.reload(false)
        
        
    }

    function aumentar(){
        setCount(count + 1)
        window.location.reload(false)
    }


    return (
        <div className="box-contador">
            <button id={props.id} className="botao-quantidade" onClick={ () => diminuir()}>
                -
            </button>

            <div>
                <p className="espaco-clique"></p>
            </div>
          
            <button id={props.id} className="botao-quantidade" onClick={() => aumentar()}>
                +
            </button>
        </div>
    )
}

export default IncrmentoQuantidade;