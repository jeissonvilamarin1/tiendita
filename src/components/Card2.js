import React from 'react'
import { Card, Button, Container } from 'react-bootstrap';



export const Card2 = ({populares}) => {
    return (
      <Container className="cardcontainer">
          {populares.map(p =>(
                <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={p.image} />
                <Card.Body>
                    <Card.Title>{p.description}</Card.Title>
                    <Card.Text>
                    $ {p.price}/kg   {p.prices}/kg
                    </Card.Text>
                    <Button style={{ backgroundColor: "rgb(230, 154, 12)"}} variant="primary">Agregar</Button>
                </Card.Body>
                </Card>
          ) )}
      </Container>
    );
}
