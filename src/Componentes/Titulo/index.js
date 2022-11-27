import './Titulo.css'

const Titulo = (props) => {
    return (
        <div className="titulo">
            <img
                className="icone-promocao"
                src={`Imagens/${props.imagem}`}
                alt="icone de promo;'ao"
            />
            <h1>{props.nome}</h1>
        </div>
    )
}

export default Titulo
