import IncrmentoQuantidade from "../IncrementoQuantidade"
import SelecaoTamanho from "../SelecaoTamanho"
import "./ItemCarrinho.css"

const ItemCarrinho = (props)=>{

    function excluiProduto(param){

        localStorage.setItem(`id`, JSON.stringify("null"))
        localStorage.removeItem(param)
        window.location.reload(false)
        this.forceUpdate()
        
    }
    return(
        
                    <div>
                        <button id={props.id} onClick={()=> excluiProduto(props.id)} className="excluir-produto bg-light">
                            Excluir produto
                        </button >

                        <section className="box-infoproduto2">
                            <div className="box-img">
                                <img src={props.imagem} alt="" ></img>
                            </div>

                            <div>
                                <h6>{props.nome}</h6>
                                <SelecaoTamanho id={props.id}></SelecaoTamanho>
                                <p>Cor: preto</p>
                            </div>
                        </section>
                    </div>      
    )
}

export default ItemCarrinho;