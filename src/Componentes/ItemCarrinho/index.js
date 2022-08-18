import "./ItemCarrinho.css"

const ItemCarrinho = (props)=>{
    return(
        
                    <div>
                        <button className="excluir-produto bg-light">
                            Excluir produto
                        </button>

                        <section className="box-infoproduto2">
                            <div className="box-img">
                                <img src={props.imagem} alt="" ></img>
                            </div>

                            <div>
                                <h6>{props.nome}</h6>
                                <p>tam. 41</p>
                                <p>Quant. 1</p>
                                <p>Cor: preto</p>
                            </div>
                        </section>
                    </div>      
    )
}

export default ItemCarrinho;