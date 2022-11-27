import './Blog.css'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

function Blog(props) {
    return (
        <Card className="ajuste-card2" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.imagem} />
            <Card.Body>
                <Card.Title>{props.nome}</Card.Title>
                <Card.Text>{props.descricao}</Card.Text>
                <Button className="ajuste-botao" variant="primary">
                    Acessar
                </Button>
            </Card.Body>
        </Card>
    )
}

export default Blog
