import './Card.css'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

function Card2(props) {
    function armazenaId() {
        localStorage.setItem(`${props.id}`, JSON.stringify(props.id))
        localStorage.setItem(`id`, JSON.stringify(props.id))
    }

    return (
        <Card className="ajuste-card" style={{ width: '18rem' }}>
            <Card.Img
                className="ajuste-imagem"
                variant="top"
                src={props.imagem}
                alt={props.alt}
            />
            <Card.Body>
                <Card.Title>{props.nome}</Card.Title>
                <Card.Text>{`R$ ${props.preco}`}</Card.Text>
                <Link
                    to="/produto"
                    as={Link}
                    id={props.id}
                    onClick={() => armazenaId()}
                    className="btn btn-primary ajuste-botao"
                    variant="primary"
                >
                    Comprar
                </Link>
            </Card.Body>
        </Card>
    )
}

export default Card2
