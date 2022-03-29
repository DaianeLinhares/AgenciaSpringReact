import React from "react";
import './Card.css'
import { Card, Button } from 'react-bootstrap'

function Cards(props) {
  return (
    <Card className="Card">
      <Card.Img variant="top" src={props.foto} />
      <Card.Body>
        <Card.Title>{props.titulo}</Card.Title>
        <Card.Text>
          {props.texto}
        </Card.Text>
        <Card.Text>
          <h5> {props.valor}</h5>
        </Card.Text>
        <Card.Text>
          <h2> {props.valorpromocao}</h2>
        </Card.Text>
        <Button variant="primary" type="submit">Detalhes</Button>
      </Card.Body>
    </Card>
  );
}
export default Cards;
