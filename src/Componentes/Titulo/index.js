import "./Titulo.css"

const Titulo = (props)=>{
    return (
        <div className="titulo">
            <h1>{props.nome}</h1>
        </div>
    )
}

export default Titulo