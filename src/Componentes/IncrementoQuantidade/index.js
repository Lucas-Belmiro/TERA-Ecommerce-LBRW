import { useState } from "react";
import "./IncrementoQuantidade.css"

const IncrmentoQuantidade = ()=>{

    const [count, setCount] = useState(1);

    return (
        <div className="box-contador">
            <button className="botao-quantidade" onClick={ () => count > 1 && setCount(count - 1)}>
                -
            </button>

            <div>
                <p className="espaco-clique">{count}</p>
            </div>
          
            <button className="botao-quantidade" onClick={() => setCount(count + 1)}>
                +
            </button>
        </div>
    )
}

export default IncrmentoQuantidade;