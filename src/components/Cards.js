import React from 'react'
import { Card, Button, Container } from 'react-bootstrap';

export const Cards = ({productos}) => {
    return (
      <Container>
          {productos.map(p =>(
                <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={p.image} />
                <Card.Body>
                    <Card.Title>{p.description}</Card.Title>
                    <Card.Text>
                    $ {p.price}/kg   {p.prices}/kg
                    </Card.Text>
                    <Button variant="primary">Agregar</Button>
                </Card.Body>
                </Card>
          ) )}
      </Container>
    );
}
