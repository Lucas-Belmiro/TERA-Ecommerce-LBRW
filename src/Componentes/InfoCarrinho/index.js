import "./InfoCarrinho.css"

const InfoCarrinho = ()=>{
    return (
        <>

        <div className="container">
            <section className="box-infoproduto">
                <div className="primeira-sessao">
                    <div>

                        <h5 className="mb-3">Produto</h5>
                        <button className="excluir-produto bg-light">
                            Excluir produto
                        </button>

                        <section className="box-infoproduto2">
                            <div className="box-img">
                                <img src="/imagens/3.png" alt="" ></img>
                            </div>

                            <div>
                                <h6>Nome do tênis</h6>
                                <p>tam. 41</p>
                                <p>Quant. 1</p>
                                <p>Cor: preto</p>
                            </div>
                        </section>

                        <div className="frete mt-3">
                            <input placeholder="Insira seu cep"></input>
                            <button className="btn btn-primary ok">OK</button>
                        </div>
                    </div>
                </div>

                <div className="segunda-sessao">
                    <div>
                        
                        <h5 className="mb-3">Resumo</h5>
                        <p>1 produto:             499</p>
                        <p>Frete:                 25 reais</p>
                        <hr className="separador"></hr>
                        <p className="total-carrinho">Total:                 R$ 524</p>
                        <button className="btn btn-primary botao-comprar">Comprar</button> 
                    </div>

                </div>
            </section>
        </div>
        
        </>
    )
}

export default InfoCarrinho