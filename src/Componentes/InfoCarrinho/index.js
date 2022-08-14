import "./InfoCarrinho.css"

const InfoCarrinho = ()=>{
    return (
        <>

        <div className="container">
            <section className="box-infoproduto">
                <div className="primeira-sessao">
                    <div>

                        <h6>Produto</h6>
                        <div>
                            Excluir produto
                        </div>

                        <section>
                            <div>
                                <img src="" alt="" ></img>
                            </div>

                            <div>
                                <p>tam</p>
                                <p>Quant.</p>
                                <p>Cor:</p>
                            </div>
                        </section>

                        <div>
                            <input placeholder="Insira seu cep"></input>
                            <button className="btn btn-primary">OK</button>
                        </div>
                    </div>
                </div>

                <div className="segunda-sessao">
                    <div>
                        <h6>Resumo</h6>
                        <p>1 produto: 499</p>
                        <p>Frete: 25 reais</p>
                        <p>Total: R$ 524</p>
                        <button className="btn btn-primary">Comprar</button> 
                    </div>

                </div>
            </section>
        </div>
        
        </>
    )
}

export default InfoCarrinho