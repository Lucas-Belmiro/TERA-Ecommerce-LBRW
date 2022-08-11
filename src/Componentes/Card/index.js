import "./Card.css"

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


function Card2(props) {

  return (
    <Card className="ajuste-card" style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {props.imagem} />
      <Card.Body>
        <Card.Title>{props.nome}</Card.Title>
        <Card.Text>
         {props.preco}
        </Card.Text>
       <Link  to="/produto" as={Link}  id={props.id} onClick={ () => localStorage.setItem("id", JSON.stringify(props.id))}  className="btn btn-primary ajuste-botao" variant="primary">Comprar</Link>
      </Card.Body>
    </Card>
  );
}

export default Card2;